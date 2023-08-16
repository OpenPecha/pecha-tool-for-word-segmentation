import {
  redirect,
  type LinksFunction,
  type LoaderFunction,
  type V2_MetaFunction,
} from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Button from "~/components/Button";
import Editor from "~/components/Editor.client";
import Sidebar from "~/components/Sidebar";
import { getTextToDisplay, getTextToDisplayByUser } from "~/model/text";
import { Space } from "~/tiptapProps/extension/space";
import { Character } from "~/tiptapProps/extension/character";
import { editorProps } from "~/tiptapProps/events";
import checkUnknown from "~/lib/checkUnknown";
import { useMemo, useState } from "react";
import { createUserIfNotExists } from "~/model/user";
import usePusherPresence from "~/lib/usePresence";
import insertHTMLonText from "~/lib/insertHtmlOnText";
import { ClientOnly } from "remix-utils";
import { getter } from "~/service/pusher.server";
export const loader: LoaderFunction = async ({ request }) => {
  let { KEY, CLUSTER, APP_ID, SECRET, NODE_ENV } = process.env;
  let url = new URL(request.url);
  let session = url.searchParams.get("session");
  let history = url.searchParams.get("history") || null;
  if (!session) {
    return redirect("/error");
  } else {
    let user = await createUserIfNotExists(session);
    // let activeText = await getter(APP_ID!, KEY!, SECRET!, CLUSTER!);
    let text = null;
    if (user.allow_assign) {
      text = await getTextToDisplay(user?.id, history);
    }

    return { text, user, KEY, CLUSTER, NODE_ENV };
  }
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Pecha Tools" },
    { name: "description", content: "Word segmentation" },
  ];
};
export default function Index() {
  let fetcher = useFetcher();
  const data = useLoaderData();
  const text = data?.text?.original_text.trim() || "";

  const { textOnline } = usePusherPresence(
    `presence-text-${data.NODE_ENV}`,
    data?.KEY,
    data?.CLUSTER,
    data?.user,
    data?.text
  );
  let user = data.user;
  let insertHTML = insertHTMLonText(text);
  let newText = checkUnknown(insertHTML);

  const setter = () => {};
  const charClick = () => {};

  const editor = useEditor(
    {
      extensions: [StarterKit, Space(setter), Character(charClick)],
      content: newText,
      editorProps,
      editable: false,
    },
    [newText]
  );
  let saveText = async () => {
    let modified_text = editor!.getText();
    let id = data.text.id;
    fetcher.submit(
      { id, modified_text, userId: user.id },
      { method: "POST", action: "/api/text" }
    );
  };
  let undoTask = async () => {
    let text = checkUnknown(insertHTMLonText(data?.text?.original_text));
    editor?.commands.setContent(text);
  };
  let ignoreTask = async () => {
    let id = data.text.id;
    fetcher.submit(
      { id, userId: user.id, _action: "ignore" },
      { method: "PATCH", action: "/api/text" }
    );
  };
  let rejectTask = async () => {
    let id = data.text.id;
    fetcher.submit(
      { id, userId: user.id, _action: "reject" },
      { method: "PATCH", action: "/api/text" }
    );
  };
  let isButtonDisabled = !editor || !data.text || data.text.reviewed;
  if (data.error) return <div>{data.error}</div>;
  return (
    <div className="main">
      <Sidebar user={data.user} online={textOnline} />

      <div className="flex-1 flex items-center flex-col md:mt-[10vh] ">
        {!data.text ? (
          <div>Thank you . your work is complete ! 😊😊😊</div>
        ) : (
          <div className="container md:h-[54vh]">
            <div className="flex items-center justify-between label">
              <div>transcript</div>

              <div onClick={() => window.my_modal_1.showModal()}>sheet</div>
              <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box p-0">
                  <iframe
                    className="w-full h-[80vh]"
                    src="https://docs.google.com/spreadsheets/d/1ZdkguvvvWiqZoEh4LLbceYsnHubBDpAAdi4DToFN9I0/edit?usp=sharing"
                  ></iframe>
                </form>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
            <ClientOnly fallback={null}>
              {() => <Editor editor={editor!} />}
            </ClientOnly>
            {!editor && <div>loading...</div>}
          </div>
        )}
        <div className="btn-container">
          <Button
            disabled={isButtonDisabled}
            handleClick={saveText}
            value="CONFIRM"
            title="CONFIRM (a)"
            shortCut="a"
          />
          {/* <Button
            disabled={isButtonDisabled}
            handleClick={rejectTask}
            value="REJECT"
            title="REJECT (x)"
            shortCut="x"
          /> */}
          <Button
            disabled={isButtonDisabled}
            handleClick={ignoreTask}
            value="IGNORE"
            title="IGNORE (i)"
            shortCut="i"
          />
          <Button
            disabled={isButtonDisabled}
            handleClick={undoTask}
            value="UNDO"
            title="UNDO (backspace)"
            shortCut="Backspace"
          />
        </div>
      </div>
    </div>
  );
}
