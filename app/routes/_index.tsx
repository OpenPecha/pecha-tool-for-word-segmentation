import { redirect, type LoaderFunction } from "@remix-run/node";
import { useState } from "react";
import { useFetcher, useLoaderData, useSearchParams } from "@remix-run/react";
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
      text = await getTextToDisplay(user?.id, history);
    }
    return { text, user, history };
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
  let [history, setHistory] = useState<string[]>([]);
  let [searchParams] = useSearchParams();
  let id = text?.id;
  let textContent = text?.original_text.trim() || "";
  let html = insertHTMLonText(textContent);
  let editor = useEditorTiptap(html);

  const [activeTime, setActiveTime] = useState(0); // in sec

  let saveText = async () => {
    let duration = activeTime;
    let modified_text = editor!.getText();
    fetcher.submit(
      { id, modified_text, userId: user.id, duration },
      { method: "POST", action: "/api/text" }
    );
    setActiveTime(0);
    if (searchParams.get("history")) return;
    setHistory([...history, id]);
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
    setActiveTime(0);
  };

  let isButtonDisabled = !text || text.reviewed || fetcher.state !== "idle";

  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar user={user} text={text} history={history} />

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
          <div className="fixed top-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm md:h-[54vh]">
            <div className="flex items-center justify-between opacity-75 text-sm font-bold px-2  pt-1 ">
              <ActiveUser active={activeTime} setActive={setActiveTime} />
              {fetcher.state !== "idle" && (
                <div className=" flex justify-center items-center">
                  saving...
                </div>
              )}
              <div>transcript</div>
            </div>
            {!editor ? <div>loading...</div> : <Editor editor={editor!} />}
          </div>
        )}
        {text && (
          <div className="flex gap-2 fixed bottom-0 justify-center ">
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
