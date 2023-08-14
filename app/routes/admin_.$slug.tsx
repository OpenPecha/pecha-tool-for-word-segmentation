import { LinksFunction, json } from "@remix-run/node";
import { Link, useFetcher } from "@remix-run/react";
import { Editor, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useEffect, useMemo, useState } from "react";
import { LoaderFunction, useLoaderData } from "react-router";
import checkUnknown from "~/lib/checkUnknown";
import insertHTMLonText from "~/lib/insertHtmlOnText";
import { getUser } from "~/model/user";
import { Character } from "~/tiptapProps/extension/character";
import { editorProps } from "~/tiptapProps/events";
import AdminHistorySidebar, {
  sortUpdate,
} from "~/components/AdminHistorySidebar";
import { ClientOnly } from "remix-utils";
import EditorContainer from "~/components/Editor.client";
import Button from "~/components/Button";
import { db } from "~/service/db.server";
import { Space } from "~/tiptapProps/extension/space";

export const loader: LoaderFunction = async ({ request, params }) => {
  let url = new URL(request.url);
  let session = url.searchParams.get("session");
  let user = await getUser(params.slug);
  let where = { modified_by_id: user?.id, status: "APPROVED", reviewed: false };
  let text = await db.text.findMany({
    where: where,
    orderBy: { updatedAt: "desc" },
  });
  let id_now = await db.text.findFirst({
    where: { reviewed: false, modified_by_id: user?.id, status: "APPROVED" },
    orderBy: { id: "asc" },
  });
  return json({ user, admin: session, text, id_now: id_now?.id });
};

function UserDetail() {
  let fetcher = useFetcher();
  const data = useLoaderData();
  let user = data?.user;
  let text = data?.text?.sort((a, b) =>
    a.review === b.review ? 0 : !a.review ? 1 : -1
  );

  const [content, setContent] = useState("");
  const [selectedId, setSelectedId] = useState(data?.id_now);
  useEffect(() => {
    setSelectedId(data?.id_now);
  }, [data]);
  useEffect(() => {
    let display = selectedId
      ? user.text.find((d) => d.id === selectedId)
      : user.text.sort(sortUpdate).find((d) => d.id === text.id);
    if (display) {
      let show =
        JSON.parse(display?.modified_text)?.join(" ") || display?.original_text;
      setContent(show);
    }
  }, [selectedId]);
  let insertHTML = insertHTMLonText(content);
  let newText = checkUnknown(insertHTML);
  let textMemo = useMemo(() => {
    if (newText) return newText;
  }, [newText]);
  const setter = () => {};
  const charClick = () => {};
  const editor = useEditor(
    {
      extensions: [StarterKit, Space(setter), Character(charClick)],
      content: textMemo,
      editorProps,
      editable: false,
    },
    [textMemo]
  );
  if (!editor) return null;
  let saveText = async () => {
    let modified_text = editor!.getText();
    let id = selectedId;
    fetcher.submit(
      { id, modified_text, userId: user.id, admin: true },
      { method: "POST", action: "/api/text" }
    );
  };

  let rejectTask = async () => {
    let id = selectedId;

    fetcher.submit(
      { id, userId: user.id, _action: "reject", admin: true },
      { method: "PATCH", action: "/api/text" }
    );
  };
  let isButtonDisabled = !editor || !text;
  return (
    <div className="main">
      <AdminHistorySidebar
        user={user}
        online={[]}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />

      <div className="flex-1 flex items-center flex-col md:mt-[10vh]">
        {!text || !selectedId || !editor ? (
          <div>Thank you . your work is complete ! 😊😊😊</div>
        ) : (
          <div className="container md:h-[54vh]">
            <div className="label">transcript</div>
            <ClientOnly fallback={null}>
              {() => <EditorContainer editor={editor!} />}
            </ClientOnly>
            {!editor && <div>loading...</div>}
          </div>
        )}
        <ClientOnly fallback={null}>
          {() => (
            <div className="btn-container">
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
            </div>
          )}
        </ClientOnly>
      </div>
    </div>
  );
}

export default UserDetail;
