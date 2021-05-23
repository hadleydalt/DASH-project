import * as React from 'react';
import ReactQuill from "react-quill"
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';

/* Placed into the Video nodes to allow the viewer to upload a video. */

export default function AddVideo() {

   /* Uses "useState" to handle and concatanate text entered into the node. */

  const [convertedText, setConvertedText] = useState("");

  const handleConvertedText = e => {
    setConvertedText(e);
  }

  /* Uses the React Quill Rich Text Editor extension to upload images. */

  return (
    <div>
      <ReactQuill
        placeholder='Press the icon to add a video '
        modules={AddVideo.modules}
        formats={AddVideo.formats}
        onChange={handleConvertedText}
        value={convertedText}
        style={{height:"65%"}}
        theme='snow'
      />
    </div>
  );
} 

AddVideo.modules = {
  toolbar: [
    ["video"],
  ],
};

AddVideo.formats = [
  "video",
];