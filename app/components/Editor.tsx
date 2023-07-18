import { useEffect } from "react";
import { EditorContent, BubbleMenu, Editor } from "@tiptap/react";
import insertHTMLonText from "~/lib/insertHtmlOnText";
function EditorContainer({ editor }: { editor: Editor }) {
  let content = editor?.getText();
  useEffect(() => {
    editor?.commands.focus();
    let segments = document.querySelectorAll(".segment");
    var clickCount = 0;
    let events = [];
    segments.forEach((e, i) => {
      events[i] = e.addEventListener("click", (e) => {
        let modifiedContent = content;
        let selection = e.target.innerText;
        let locationText = e.target.classList;
        let spaceToAddLocation =
          parseInt(locationText[1].replace("s-", "")) + selection.length;
        clickCount++;
        setTimeout(function () {
          if (clickCount === 1) {
            // Single click
            if (content[spaceToAddLocation] === " ") {
              let firsthalf = content.slice(0, spaceToAddLocation);
              let secondhalf = content.slice(
                spaceToAddLocation + 1,
                content.length
              );
              modifiedContent = firsthalf + secondhalf;
              let newText = insertHTMLonText(modifiedContent);
              editor?.commands.setContent(newText);
            } else {
              modifiedContent =
                content.substring(0, spaceToAddLocation) +
                " " +
                content.substring(spaceToAddLocation);
              let newText = insertHTMLonText(modifiedContent);
              editor?.commands.setContent(newText);
            }
          } else if (clickCount === 2) {
            // Double click
            let condition = ["ར་", "ས་"];
            let includedCondition;
            let selection = e.target.innerText;
            condition.forEach((e) => {
              if (selection.includes(e)) {
                includedCondition = e;
              }
            });
            if (includedCondition) {
              let content = editor.getText();
              let s = selection.split(includedCondition);
              s[1] = " ";
              s[2] = includedCondition;
              let middle = s.join("");
              let firsthalf = content.slice(
                0,
                spaceToAddLocation - selection.length
              );
              let secondhalf = content.slice(
                spaceToAddLocation - selection.length + selection.length,
                content.length
              );
              modifiedContent = firsthalf + middle + secondhalf;
              let newText = insertHTMLonText(modifiedContent);
              editor?.commands.setContent(newText);
            }
          }

          // Reset click count after a short delay
          setTimeout(function () {
            clickCount = 0;
          }, 400);
        }, 300);
      });
    });
    return () => {
      segments.forEach((e, i) => {
        e.removeEventListener("click", events[i]);
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
