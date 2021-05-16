import * as React from 'react';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

export default function AddImage() {

  const [convertedText, setConvertedText] = useState("");

  const handleConvertedText = e => {
    setConvertedText(e);
  }

  return (
    <div>
      <ReactQuill
        placeholder='Click the icon to add an image '
        modules={AddImage.modules}
        formats={AddImage.formats}
        onChange={handleConvertedText}
        value={convertedText}
        theme='snow'
        style={{height:"65%"}}
      />
    </div>
  );
} 

AddImage.modules = {
  toolbar: [
    ["image"],
  ],
};

AddImage.formats = [
  "image",
];