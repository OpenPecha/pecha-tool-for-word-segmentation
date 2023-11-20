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
import { getTextToDisplay } from "~/model/text.server";
import checkUnknown from "~/lib/checkUnknown";
import { createUserIfNotExists } from "~/model/user.server";
import insertHTMLonText from "~/lib/insertHtmlOnText";
import { useEditorTiptap } from "~/tiptapProps/useEditorTiptap";
import ActiveUser from "~/components/ActiveUser";
export const loader: LoaderFunction = async ({ request }) => {
  let url = new URL(request.url);
  let session = url.searchParams.get("session");
  let history = url.searchParams.get("history") || null;
  if (!session) {
    return redirect("https://pecha.tools");
  } else {
    let user = await createUserIfNotExists(session);
    let text = null;
    if (user.allow_assign) {
      text = await getTextToDisplay(user, history);
    }
    if (!user.allow_assign && history) {
      text = await getTextToDisplay(user, history);
    }
    return {
      text,
      user: {
        username: user.username,
        nickname: user.nickname,
        picture: user.picture,
        id: user.id,
        _count: user._count,
        rejected_list: user.rejected_list,
        role: user.role,
        approved_count: user.text.length,
      },
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
  let [searchParams] = useSearchParams();
  let id = text?.id;
  let editor = useEditorTiptap();

  let saveText = async () => {
    let duration = document?.querySelector("#activeTime")?.innerHTML ?? 0;
    let modified_text = editor!.getText();
    fetcher.submit(
      { id, modified_text, userId: user.id, duration: duration },
      { method: "POST", action: "/api/text" }
    );
    if (searchParams.get("history")) return;
  };
  let undoTask = async () => {
    let temptext = checkUnknown(insertHTMLonText(text?.original_text));
    editor?.commands.setContent(temptext);
  };
  let rejectTask = async () => {
    fetcher.submit(
      { id, userId: user.id, _action: "reject" },
      { method: "PATCH", action: "/api/text" }
    );
  };

  let isButtonDisabled = !text || text.reviewed || fetcher.state !== "idle";

  if (error) return <div>{error}</div>;

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
        {!text ? (
          <div className="fixed top-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm text-center py-4">
            {!user.allow_assign && (
              <div className="font-bold first-letter:uppercase first-letter:text-red-400">
                A single work must have been rejected 3 times or more . please
                contact admin .
              </div>
            )}
            Thank you . your work is complete ! 😊😊😊
            <br />
          </div>
        ) : (
          <div className="fixed top-[120px] md:relative md:top-0 md:mt-20 shadow-md max-h-[450px] w-[90%] rounded-sm md:h-[54vh]">
            <div className="flex items-center justify-between opacity-75 text-sm font-bold px-2  pt-1 ">
              {fetcher.state === "idle" && <ActiveUser />}
              {fetcher.state !== "idle" && (
                <div className=" flex justify-center items-center">
                  saving...
                </div>
              )}
            </div>
            {!editor || isButtonDisabled ? (
              <div className="flex justify-center items-center h-full p-10">
                <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900 p-3"></div>
              </div>
            ) : (
              <Editor editor={editor!} />
            )}
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
