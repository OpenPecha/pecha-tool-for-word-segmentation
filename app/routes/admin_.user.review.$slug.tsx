import { DataFunctionArgs, redirect } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import insertHTMLonText from "~/lib/insertHtmlOnText";
import { getUser } from "~/model/server.user";
import AdminHistorySidebar from "~/components/AdminHistorySidebar";
import EditorContainer from "~/components/Editor";
import Button from "~/components/Button";
import { db } from "~/service/db.server";
import { sortUpdate_reviewed } from "~/lib/sortReviewedUpdate";
import { useEditorTiptap } from "~/tiptapProps/useEditorTiptap";

export const loader = async ({ request, params }: DataFunctionArgs) => {
  let url = new URL(request.url);
  let session = url.searchParams.get("session");

  const [user, annotator] = await Promise.all([
    getUser(session!),
    getUser(params.slug!),
  ]);
  //check if user and admin are in same group

  if (annotator?.reviewer_id !== user?.id)
    return redirect("/?session=" + session);

  let currentText = await db.text.findFirst({
    where: {
      reviewed: false,
      modified_by_id: annotator?.id,
      status: "APPROVED",
    },
    orderBy: { id: "asc" },
  });
  return { user, annotator, currentText };
};

function UserDetail() {
  const fetcher = useFetcher();
  const { annotator, user, currentText } = useLoaderData() as any;
  const [content, setContent] = useState("");
  const [selectedId, setSelectedId] = useState<number | undefined>(
    currentText?.id
  );
  useEffect(() => {
    setSelectedId(currentText?.id);
  }, [currentText?.id]);
  useEffect(() => {
    if (!annotator) return;
    let display = selectedId
      ? annotator.text.find((d) => d.id === selectedId)
      : annotator.text
          .sort(sortUpdate_reviewed)
          .find((d) => d.id === currentText?.id);
    if (display) {
      let show =
        JSON.parse(display?.modified_text!)?.join(" ") ||
        display?.original_text;
      setContent(show);
    }
  }, [selectedId]);
  let newText = insertHTMLonText(content);
  let editor = useEditorTiptap(newText);

  if (!editor) return null;

  let saveText = () => {
    fetcher.submit(
      {
        id: selectedId!,
        modified_text: editor?.getText()!,
        userId: annotator.id,
        adminId: user?.id,
      },
      { method: "POST", action: "/api/text" }
    );
  };

  let rejectTask = () => {
    fetcher.submit(
      { id: selectedId!, userId: annotator.id, _action: "reject", admin: true },
      { method: "PATCH", action: "/api/text" }
    );
    text_reviewed();
  };
  let isButtonDisabled =
    editor?.getText()!.length < 1 || fetcher.state !== "idle";
  return (
    <div className="flex flex-col md:flex-row">
      <AdminHistorySidebar
        user={annotator}
        selectedId={selectedId!}
        setSelectedId={setSelectedId}
      />

      <div className="flex-1 flex items-center flex-col md:mt-[10vh]">
        {!currentText || !selectedId || !editor ? (
          <div className="fixed top-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm md:h-[54vh]">
            Thank you . your work is complete ! 😊😊😊
          </div>
        ) : (
          <>
            <div className="fixed bottom-[150px] md:static shadow-md max-h-[450px] w-[90%] rounded-sm md:h-[54vh]">
              <div className="flex items-center justify-between opacity-75 text-sm font-bold px-2 capitalize pt-1 ">
                transcript
                {fetcher.state !== "idle" && (
                  <div className="w-full flex justify-center items-center">
                    saving
                  </div>
                )}
              </div>
              {!editor && <div>loading...</div>}

              <EditorContainer editor={editor!} />
            </div>
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
          </>
        )}
      </div>
    </div>
  );
}

export default UserDetail;
