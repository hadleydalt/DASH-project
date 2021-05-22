import * as React from 'react';
import mainNodeCollection from '../../Main';
import { CreateFolder } from './Folders/CreateFolder'
import { NewFolderArray } from './Folders/NewFolderArray';

function addTextNode(){
    mainNodeCollection.addTextNode();
}

function addImageNode(){
  mainNodeCollection.addImageNode();
}

function addVideoNode(){
  mainNodeCollection.addVideoNode();
}

function addIframeNode(){
  mainNodeCollection.addIframeNode();
}

function addCollectionNode(){
  mainNodeCollection.addCollectionNode();
}

export const nca = new NewFolderArray();


export function NodeForm() {


  return(
    <div>
      <div className = "name-folder"><CreateFolder c={nca}/></div>
      <div className="youre-using">YOU'RE USING</div>
      <div className = "title">DASH!</div>
      <div className="add-new">ADD NEW</div>
      <div className = "button-menu">
      <button className = "button-style" onClick={
        addTextNode
      }>Note</button>
      <button className = "button-style" onClick={
        addImageNode
      }>Image</button>
      <button className = "button-style" onClick={
        addVideoNode
      }>Video</button>
      <button className = "button-style" onClick={
        addIframeNode
      }>Website</button>
      </div>
      <button className = "col-button" onClick={addCollectionNode}>Collection</button>
      <div className="create-folder">CREATE FOLDER</div>
      <div className="my-folders">MY FOLDERS</div>
      <div className = "menu-bg"></div>
      </div>
  )
}
