import * as React from 'react';
import ReactQuill from "react-quill"
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';

export default function AddVideo() {

  const [convertedText, setConvertedText] = useState("");

  const handleConvertedText = e => {
    setConvertedText(e);
  }

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