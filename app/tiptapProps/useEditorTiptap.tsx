import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import { editorProps } from "~/tiptapProps/events";
import { Character } from "~/tiptapProps/extension/character";
import { Space } from "~/tiptapProps/extension/space";

export const useEditorTiptap = () => {
  const setter = () => {};
  const charClick = () => {};
  const editor = useEditor(
    {
      extensions: [StarterKit, Space(setter), Character(charClick)],
      editorProps,
      editable: false,
    },
    []
  );
 
  return editor;
};
