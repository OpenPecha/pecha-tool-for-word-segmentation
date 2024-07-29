import { redirect, type LoaderFunction } from "@remix-run/node";
import { useState } from "react";
import {
  useFetcher,
  useLoaderData,
  useSearchParams,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";

import Button from "~/components/Button";
import Editor from "~/components/Editor";
import Sidebar from "~/components/Sidebar";
import { getMonthlyWordCount, getTextToDisplay } from "~/model/text.server";
import checkUnknown from "~/lib/checkUnknown";
import { createUserIfNotExists } from "~/model/user.server";
import insertHTMLonText from "~/lib/insertHtmlOnText";
import { useEditorTiptap } from "~/tiptapProps/useEditorTiptap";
import ActiveUser from "~/components/ActiveUser";
import { db } from "~/service/db.server";
import { WORD_PER_WEEK } from "~/root";
export const loader: LoaderFunction = async ({ request }) => {
  let { NODE_ENV } = process.env;
  let url = new URL(request.url);
  let session = url.searchParams.get("session");
  let detail = url.searchParams.get("detail");
  let history = url.searchParams.get("history") || null;
  let activeWork = await db.system.findFirst();

  if (!session) {
    return redirect("https://pecha.tools");
  } else {
    let user = await createUserIfNotExists(session, detail);
    let text = null;
    if (user?.role === "ADMIN" || user?.role === "REVIEWER") {
      return redirect(`/admin/user/?session=${user.username}`);
    }
    if (user?.role === "OWNER") {
      return redirect(`/owner?session=${user.username}`);
    }
    if (activeWork?.status === "Activated") {
      return { activeWork };
    }
    if (user?.allow_assign) {
      text = await getTextToDisplay(user?.id, history);
      if (text?.error) {
        return { error: text.error.message };
      }
    }

    let monthlyData = await getMonthlyWordCount(user?.id);
    let current_time = Date.now();
    return {
      text,
      user,
      NODE_ENV,
      history,
      current_time,
      monthlyData,
    };
  }
};

export const meta = () => {
  return [
    { title: "Pecha Tools" },
    { name: "description", content: "Word segmentation" },
    {
      keywords:
        "pecha,tools,word,segmentation,pecha tools,pecha tools word segmentation",
    },
  ];
};

export default function Index() {
  let fetcher = useFetcher();
  const { user, text, error } = useLoaderData();
  let id = text?.id;
  let editor = useEditorTiptap();
  let original_text = text?.original_text?.replaceAll("?", "");
  original_text = original_text?.replaceAll("\u0F37", "");

  let saveText = async () => {
    let duration = document?.querySelector("#activeTime")?.innerHTML ?? 0;

    let text = editor!.getText();
    let modified_text = JSON.stringify(text.split(" "));

    fetcher.submit(
      { id, modified_text, userId: user.id, duration: duration },
      { method: "POST", action: "/api/text" }
    );
  };
  let trashTask = async () => {
    let id = text.id;
    fetcher.submit(
      { id, _action: "trash", userId: user.id },
      { method: "PATCH", action: "/api/text" }
    );
  };
  let undoTask = async () => {
    let temptext = checkUnknown(insertHTMLonText(original_text));
    editor?.commands.setContent(temptext);
  };
  let rejectTask = async () => {
    fetcher.submit(
      { id, userId: user.id, _action: "reject" },
      { method: "PATCH", action: "/api/text" }
    );
  };
  let isButtonDisabled = !text || text.reviewed || fetcher.state !== "idle";
  let isSaving = fetcher.state !== "idle";
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar user={user} text={text} />

      <div className="flex-1 flex items-center flex-col md:mt-[3vh] ">
        {user?.rejected_list?.length > 0 && (
          <div className="text-red-500 flex items-center gap-2 font-bold">
            <img
              src="/assets/notification.gif"
              alt="notification "
              className="w-8 h-8"
            />
            SOME OF YOUR WORK IS REJECTED
          </div>
        )}
        {error && (
          <div className="fixed top-16 font-bold first-letter:uppercase first-letter:text-red-400">
            {error} . please contact admin .
          </div>
        )}
        {!user?.allow_assign && (
          <div className="font-bold first-letter:uppercase first-letter:text-red-400">
            A single work must have been rejected 3 times or more. maybe system
            blocked your work. please contact admin .
          </div>
        )}
        {!text ? (
          <div className="fixed top-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm text-center py-4">
            Thank you . your work is complete ! 😊😊😊
            <br />
          </div>
        ) : (
          <div className="fixed top-[120px] md:relative md:top-0 md:mt-20 shadow-md max-h-[450px] w-[90%] rounded-sm md:h-[54vh]">
            <div className="flex items-center justify-between opacity-75 text-sm font-bold px-2  pt-1 ">
              {!isSaving && <ActiveUser />}
              {isSaving && (
                <div className=" flex justify-center items-center">
                  saving...
                </div>
              )}
            </div>
            {!editor || isSaving ? <Loading /> : <Editor editor={editor} />}
          </div>
        )}
        {text && (
          <div className="flex gap-2 fixed bottom-0 md:relative md:mt-10 justify-center ">
            <Button
              disabled={isButtonDisabled}
              handleClick={saveText}
              value="CONFIRM"
              title="CONFIRM (a)"
              shortCut="a"
            />
            <Button
              disabled={isButtonDisabled}
              handleClick={rejectTask}
              value="REJECT"
              title="REJECT (x)"
              shortCut="x"
            />
            <Button
              disabled={isButtonDisabled}
              handleClick={trashTask}
              value="TRASH"
              title="TRASH (delete)"
              shortCut="Delete"
            />
            <Button
              disabled={isButtonDisabled}
              handleClick={undoTask}
              value="UNDO"
              title="UNDO (backspace)"
              shortCut="Backspace"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}

function Loading() {
  return (
    <div className="flex justify-center items-center h-full p-10">
      <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900 p-3"></div>
    </div>
  );
}
