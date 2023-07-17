import { useEffect } from "react";
import { EditorContent, BubbleMenu } from "@tiptap/react";
import { removeSpace, replaceSpacesWithHTMLTag } from "~/lib/utils";
function Editor({editor}:{editor:any}) {

  
  useEffect(() => {
  editor?.commands.focus();
  }, [editor]);
  const handleClick = () => {
       let { from, to } = editor?.state.selection;
       let content = editor?.getText();
       if (!content) return;
       let modifiedContent =
         content.substring(0, from - 1) + " " + content.substring(to - 1);
       let newText = replaceSpacesWithHTMLTag(modifiedContent);

       if (removeSpace(modifiedContent) === removeSpace(content)) {
         editor?.commands.setContent(newText);
       } else {
         console.log("error");
       }
    };

  useEffect(() => {
        let containers = document.querySelector('.container')
        if (editor?.isFocused === true) {
            containers?.classList.add('active')
        } else {
            containers?.classList.remove('active');      
        }
    },[editor?.isFocused])
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

export default Editor