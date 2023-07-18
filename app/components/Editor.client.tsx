import { useEffect, useMemo } from "react";
import { EditorContent, BubbleMenu, Editor } from "@tiptap/react";
import insertHTMLonText from "~/lib/insertHtmlOnText";
import { useLoaderData } from "@remix-run/react";
function EditorContainer({ editor }: { editor: Editor }) {
  let content = useMemo(() => editor.getText(), [editor.getText()]);
  useEffect(() => {
    editor?.commands.focus();
    const content = editor?.getText();
    console.log("step1", content);
    const segments = document.querySelectorAll(".segment");
    let clickCount = 0;
    const events = [];
    const handleSegmentClick = (event) => {
      let modifiedContent = content;
      const selection = event.target.innerText;
      console.log("step2", selection);
      const locationText = event.target.classList;
      console.log("step3", locationText);
      const spaceToAddLocation =
        parseInt(locationText[1].replace("s-", "")) + selection.length;
      console.log("step4", spaceToAddLocation);
      clickCount++;

      setTimeout(() => {
        if (clickCount === 1) {
          // Single click
          if (content[spaceToAddLocation] === " ") {
            modifiedContent =
              modifiedContent.slice(0, spaceToAddLocation) +
              modifiedContent.slice(spaceToAddLocation + 1);
          } else {
            modifiedContent =
              modifiedContent.slice(0, spaceToAddLocation) +
              " " +
              modifiedContent.slice(spaceToAddLocation);
          }
          console.log("step5", modifiedContent);
          const newText = insertHTMLonText(modifiedContent);
          console.log("step6", newText);
          editor?.commands.setContent(newText);
        } else if (clickCount === 2) {
          const condition = ["ར་", "ས་"];
          const includedCondition = condition.find((cond) =>
            selection.includes(cond)
          );
          if (includedCondition) {
            const s = selection.split(includedCondition);
            s[1] = " ";
            s[2] = includedCondition;
            const middle = s.join("");
            const start = spaceToAddLocation - selection.length;
            const end =
              spaceToAddLocation - selection.length + selection.length;
            modifiedContent =
              modifiedContent.slice(0, start) +
              middle +
              modifiedContent.slice(end);
            const newText = insertHTMLonText(modifiedContent);
            editor?.commands.setContent(newText);
          }
        }

        setTimeout(() => {
          clickCount = 0;
        }, 300);
      }, 200);
    };

    segments.forEach((segment, i) => {
      const event = {
        segment,
        listener: handleSegmentClick,
      };
      segment.addEventListener("click", event.listener);
      events[i] = event;
    });

    return () => {
      segments.forEach((segment, i) => {
        segment.removeEventListener("click", events[i].listener);
      });
    };
  }, [editor, content]);
  const handleClick = () => {
    let { from, to } = editor?.state.selection;
    let content = editor?.getText();
    if (!content) return;
    let modifiedContent =
      content.substring(0, from - 1) + " " + content.substring(to - 1);
    let newText = insertHTMLonText(modifiedContent);
    editor?.commands.setContent(newText);
  };

  useEffect(() => {
    let containers = document.querySelector(".container");
    if (editor?.isFocused === true) {
      containers?.classList.add("active");
    } else {
      containers?.classList.remove("active");
    }
  }, [editor?.isFocused]);
  return (
    <div className="editor-container">
      <EditorContent editor={editor} />
      {editor && (
        <BubbleMenu
          editor={editor}
          tippyOptions={{ duration: 100 }}
          shouldShow={(editor) => {
            let { from } = editor;
            let textLength = editor?.editor.getText().length;
            let textContent = editor.state.doc.textBetween(from - 1, from, "");
            if (from === 1 || from - 1 === textLength || textContent === " ")
              return false;
            if (editor.state.selection.from === editor.state.selection.to)
              return true;
            return false;
          }}
        >
          <button onClick={handleClick} id="spaceButton">
            +
          </button>
        </BubbleMenu>
      )}
    </div>
  );
}

export default EditorContainer;
