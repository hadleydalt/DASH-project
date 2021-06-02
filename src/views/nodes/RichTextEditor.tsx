import * as React from 'react';
import ReactQuill from "react-quill"
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';

/* A rich text editor from Quill placed into the Text node*/

export default function RichTextEditor() {

  const [convertedText, setConvertedText] = useState("");

  const handleConvertedText = e => {
    setConvertedText(e);
  }

  return (
    <div>
      <ReactQuill
        placeholder='Leave a note'
        modules={RichTextEditor.modules}
        formats={RichTextEditor.formats}
        theme='snow'
        onChange={handleConvertedText}
        value={convertedText}
        style={{height:"65%"}}
      />
    </div>
  );
} 

RichTextEditor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["image"],
    ["clean"],
    ["code-block"],
  ],
};

RichTextEditor.formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "image",
  "code-block",
];



