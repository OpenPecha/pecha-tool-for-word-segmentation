import { useEffect, memo, useRef, useCallback } from "react";
import { EditorContent, Editor } from "@tiptap/react";
import insertHTMLonText from "~/lib/insertHtmlOnText";
import useDoubleClick from "use-double-click";

function EditorContainer({ editor, html }: { editor: Editor; html: string }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (editor) {
      editor?.commands.setContent(html);
    }
  }, [html]);

  const handleSingleClick = (e: any) => {
    let modifiedContent = editor?.getText();
    const locationText = e.target.classList;

    const selection = e.target.innerText;
    if (selection === " ") return null;
    const spaceToAddLocation =
      parseInt(locationText[1]?.replace("s-", "")) + selection.length;
    if (modifiedContent[spaceToAddLocation] === " ") {
      modifiedContent =
        modifiedContent.slice(0, spaceToAddLocation) +
        modifiedContent.slice(spaceToAddLocation + 1);
    } else {
      modifiedContent =
        modifiedContent.slice(0, spaceToAddLocation) +
        " " +
        modifiedContent.slice(spaceToAddLocation);
    }
    const newText = insertHTMLonText(modifiedContent);
    editor?.commands.setContent(newText);
  };
  function handleDoubleClick(e: any) {
    let modifiedContent = editor?.getText();
    const selection = e.target.innerText;
    const locationText = e.target.classList;
    const spaceToAddLocation =
      parseInt(locationText[1].replace("s-", "")) + selection.length;
    const condition = ["ར་", "ས་", "འི་", "།།", "།", "འང་"];
    const includedCondition = condition.find((cond) =>
      selection.includes(cond)
    );
    const exactCondition = condition.find((cond) => cond === selection);
    if (includedCondition && !exactCondition) {
      const s = selection.split(includedCondition);
      s[1] = " ";
      s[2] = includedCondition;
      const middle = s.join("");
      const start = spaceToAddLocation - selection.length;
      const end = spaceToAddLocation - selection.length + selection.length;
      modifiedContent =
        modifiedContent.slice(0, start) + middle + modifiedContent.slice(end);
      const newText = insertHTMLonText(modifiedContent);
      editor?.commands.setContent(newText);
    } else {
      let middle = selection.slice(0, -1) + " " + selection.slice(-1);
      const start = spaceToAddLocation - selection.length;
      const end = spaceToAddLocation - selection.length + selection.length;
      modifiedContent =
        modifiedContent.slice(0, start) + middle + modifiedContent.slice(end);
      const newText = insertHTMLonText(modifiedContent);
      editor?.commands.setContent(newText);
    }
  }

  useDoubleClick({
    onSingleClick: handleSingleClick,
    onDoubleClick: handleDoubleClick,
    ref: buttonRef,
    latency: 250,
  });

  if (!editor) return;

  return (
    <div
      ref={buttonRef}
      className="text-slate-600 h-[90%] m-auto bg-white max-h-[60dvh] overflow-y-scroll p-2 text-3xl pointer-events-auto"
    >
      {editor && <EditorContent editor={editor} />}
    </div>
  );
}

export default memo(EditorContainer);
