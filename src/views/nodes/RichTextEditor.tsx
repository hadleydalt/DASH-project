import * as React from 'react';
import ReactQuill from "react-quill"
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';

export default function RichTextEditor() {

  const [convertedText, setConvertedText] = useState("");

  const handleConvertedText = e => {
    setConvertedText(e);
  }

  return (
    <div>
      <ReactQuill
        placeholder='Press Tx and begin typing '
        modules={RichTextEditor.modules}
        formats={RichTextEditor.formats}
        theme='snow'
        onChange={handleConvertedText}
        value={convertedText}
        style={{minHeight: '200px'}}
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



