import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ErrorMessage } from "formik";
import Editor from "ckeditor5-custom-build/build/ckeditor";
const editorConfiguration = {
  toolbar: {
    items: [
      "|",
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
const EditorField = ({ setInitialValues, initialValues, name }) => {
  return (
    <>
      <CKEditor
        editor={Editor}
        config={editorConfiguration}
        onReady={(editor) => {
          console.log("ck is ready to use");
        }}
        onChange={(event, editor) => {
          const description = editor.getData();
          setInitialValues({ ...initialValues, description });
        }}
      />
      <ErrorMessage name={name}></ErrorMessage>
    </>
  );
};

export default EditorField;
