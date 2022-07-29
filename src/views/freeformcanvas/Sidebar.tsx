import * as React from 'react';
import mainNodeCollection from '../../Main';
import { FolderCreator } from './Folders/FolderCreator'
import { StoreType } from '../../global/Variables'

export function NodeForm() {

  return(
    <div>
      <div className = "name-folder"><FolderCreator /></div>
      <div className="youre-using">YOU'RE USING</div>
      <div className = "title">DASH!</div>
      <div className="add-new">ADD NEW</div>
      <div className = "button-menu">
      <button className = "button-style" onClick={
        () => mainNodeCollection.addNode(StoreType.Text)
      }>Note</button>
      <button className = "button-style" onClick={
        () => mainNodeCollection.addNode(StoreType.Image)
      }>Image</button>
      <button className = "button-style" onClick={
        () => mainNodeCollection.addNode(StoreType.Video)
      }>Video</button>
      <button className = "button-style" onClick={
        () => mainNodeCollection.addNode(StoreType.Iframe)
      }>Website</button>
      </div>
      <button className = "col-button" onClick={() => mainNodeCollection.addNode(StoreType.Collection)}>Collection</button>
      <div className="create-folder">CREATE FOLDER</div>
      <div className="my-folders">MY FOLDERS</div>
      <div className = "menu-bg"></div>
      </div>
  )
}
