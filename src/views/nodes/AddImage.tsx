import * as React from 'react';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

/* Placed into the Image nodes to allow the user to add an image */

export default function AddImage() {

  /* Uses "useState" to handle and concatanate text entered into the node. */

  const [convertedText, setConvertedText] = useState("");

  const handleConvertedText = e => {
    setConvertedText(e);
  }

  /* Uses the React Quill Rich Text Editor extension to upload images. */

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