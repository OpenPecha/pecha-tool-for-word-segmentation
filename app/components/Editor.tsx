import { useEffect } from "react";
import { EditorContent, Editor } from "@tiptap/react";
import insertHTMLonText from "~/lib/insertHtmlOnText";
import selectText from "~/lib/selectRange";

let select = 0;

function EditorContainer({ editor }: { editor: Editor }) {
  let content = editor?.getText();
  useEffect(() => {
    if (editor) {
      const content = editor?.getText();
      const segments = document.querySelectorAll(".seg");
      let clickCount = 0;
      const events = [];
      const handleSegmentClick = (event) => {
        let modifiedContent = content;
        const selection = event.target.innerText;
        const locationText = event.target.classList;
        const spaceToAddLocation =
          parseInt(locationText[1].replace("s-", "")) + selection.length;
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
            const newText = insertHTMLonText(modifiedContent);
            editor?.commands.setContent(newText);
          } else if (clickCount === 2) {
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
              const end =
                spaceToAddLocation - selection.length + selection.length;
              modifiedContent =
                modifiedContent.slice(0, start) +
                middle +
                modifiedContent.slice(end);
              const newText = insertHTMLonText(modifiedContent);
              editor?.commands.setContent(newText);
            } else {
              let middle = selection.slice(0, -1) + " " + selection.slice(-1);
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
      function handleKeyDown(e) {
        let key = e.key;
        if (
          key === "ArrowUp" ||
          key === "ArrowDown" ||
          key === "ArrowLeft" ||
          key === "ArrowRight" ||
          key === " "
        ) {
          let elements = [];
          segments.forEach((segment, i) => {
            elements.push(segment);
          });
          if (select >= 0) {
            if (key === "ArrowRight") {
              select = select < segments.length - 1 ? select + 1 : select;
              selectText(elements[select]);
            }
            if (key === "ArrowLeft") {
              select = select !== 0 ? select - 1 : select;
              selectText(elements[select]);
            }
          } else {
            select = 0;
          }
          if (key === " ") {
            elements[select].click();
          }
        }
      }
      if (select > 1) {
        let elements = document.querySelectorAll(".seg");
        selectText(elements[select]);
      }
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        segments.forEach((segment, i) => {
          segment.removeEventListener("click", events[i].listener);
        });
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
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
  return (
    <div className="text-slate-600 h-[90%] m-auto bg-white max-h-[60dvh] overflow-y-scroll p-2 text-3xl">
      {editor && <EditorContent editor={editor} />}
    </div>
  );
}

export default EditorContainer;