import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import React, { useState } from "react";

const editorConfiguration = {
  toolbar: {
    items: [
      "|",
      "heading",
      "bold",
      "italic",
      "link",
      "bulletedList",
      "numberedList",
      "|",
      "blockQuote",
      "undo",
      "redo",
    ],
  },
  language: "es",
};
const EditorField = ({ setDescription }) => {
  return (
    <>
      <CKEditor
        editor={Editor}
        config={editorConfiguration}
        onReady={(editor) => {
          console.log("ck is ready to use");
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setDescription(data);
        }}
      />
    </>
  );
};

export default EditorField;
