import { DataFunctionArgs, LoaderArgs, json, redirect } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useMemo, useState } from "react";
import { LoaderFunction, useLoaderData } from "react-router";
import checkUnknown from "~/lib/checkUnknown";
import insertHTMLonText from "~/lib/insertHtmlOnText";
import { getUser } from "~/model/user";
import { Character } from "~/tiptapProps/extension/character";
import { editorProps } from "~/tiptapProps/events";
import AdminHistorySidebar from "~/components/AdminHistorySidebar";
import { ClientOnly } from "remix-utils";
import EditorContainer from "~/components/Editor.client";
import Button from "~/components/Button";
import { db } from "~/service/db.server";
import { Space } from "~/tiptapProps/extension/space";
import { sortUpdate_reviewed } from "~/lib/sortReviewedUpdate";
import { useEditorTiptap } from "~/tiptapProps/useEditorTiptap";

export const loader = async ({ request, params }: DataFunctionArgs) => {
  let url = new URL(request.url);
  let session = url.searchParams.get("session");
  let admin = await getUser(session!);
  let user = await getUser(params.slug!);
  let text_data = await db.text.findMany({
    where: { modified_by_id: user?.id, status: "APPROVED", reviewed: false },
    orderBy: { updatedAt: "desc" },
  });
  let currentText = await db.text.findFirst({
    where: { reviewed: false, modified_by_id: user?.id, status: "APPROVED" },
    orderBy: { id: "asc" },
  });

  return { user, admin, text_data, id_now: currentText?.id };
};

type LoaderType = Awaited<ReturnType<typeof loader>>;

function UserDetail() {
  const fetcher = useFetcher();
  const data = useLoaderData();
  const { user, text_data, admin, id_now } = data as LoaderType;
  let text = text_data?.sort((a, b) =>
    a.reviewed === b.reviewed ? 0 : !a.reviewed ? 1 : -1
  );
  const [content, setContent] = useState("");
  const [selectedId, setSelectedId] = useState<number | undefined>(id_now);
  useEffect(() => {
    setSelectedId(id_now);
  }, [id_now]);
  useEffect(() => {
    if (!user) return;
    let display = selectedId
      ? user.text.find((d) => d.id === selectedId)
      : user.text.sort(sortUpdate_reviewed).find((d) => d.id === text.id);
    if (display) {
      let show =
        JSON.parse(display?.modified_text!)?.join(" ") ||
        display?.original_text;
      setContent(show);
    }
  }, [selectedId]);
  let insertHTML = insertHTMLonText(content);
  let newText = checkUnknown(insertHTML);
  let textMemo = useMemo(() => {
    if (newText) return newText;
  }, [newText]);
  let editor = useEditorTiptap(textMemo);

  if (!editor) return null;
  let saveText = async () => {
    fetcher.submit(
      {
        id: selectedId!,
        modified_text: editor?.getText(),
        userId: user.id,
        adminId: admin?.id,
      },
      { method: "POST", action: "/api/text" }
    );
  };

  let rejectTask = async () => {
    fetcher.submit(
      { id: selectedId!, userId: user.id, _action: "reject", admin: true },
      { method: "PATCH", action: "/api/text" }
    );
  };
  let isButtonDisabled = !editor || !text;
  return (
    <div className="flex flex-col md:flex-row">
      <AdminHistorySidebar
        user={user}
        selectedId={selectedId!}
        setSelectedId={setSelectedId}
      />

      <div className="flex-1 flex items-center flex-col md:mt-[10vh]">
        {!text || !selectedId || !editor ? (
          <div>Thank you . your work is complete ! 😊😊😊</div>
        ) : (
          <div className="fixed bottom-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm md:h-[54vh]">
            <div className="flex items-center justify-between opacity-75 text-sm font-bold px-2 capitalize pt-1 ">
              transcript
            </div>
            <ClientOnly fallback={null}>
              {() => <EditorContainer editor={editor!} />}
            </ClientOnly>
            {!editor && <div>loading...</div>}
          </div>
        )}
        <ClientOnly fallback={null}>
          {() => (
            <div className="flex gap-2 fixed bottom-0 justify-center">
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
