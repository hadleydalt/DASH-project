import * as React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import { observable, action } from "mobx";
import { NodeStore, StoreType } from '../../stores/NodeStore';
import { StaticTextNodeStore } from '../../stores/StaticTextNodeStore'; 
import mainNodeCollection from '../../Main';

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



export function NodeForm() {

  return(
    <div>
      <div className = "title">DASH!</div>
      <div className="add-label1">ADD NEW</div>
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
      <div className = "menu-bg"></div>
      </div>
  )

  /*const [nodeState, setNodeState] = useState("")
  let nodes = [];

  return (
  <div>
    <select onChange={(e) => {
      const selectedNode = e.target.value;
      setNodeState(selectedNode);
      mainNodeCollection.addNodes(nodes);
    }}>
      <option value="text">Text</option>
      <option value="image">Image</option>
      <option value="video">Video</option>
      <option value="website">Website</option>
    </select>
    {nodeState}
  </div>
  ); */
}

/*

const options = [
  { value: 'text', label: 'Text' },
  { value: 'image', label: 'Image' },
  { value: 'video', label: 'Video' },
  { value: 'website', label: 'Website' },
];

const styles = {
  control: base => ({
    ...base,
    fontFamily: "Arial, Helvetica, sans-serif"
  }),
  menu: base => ({
    ...base,
    fontFamily: "Arial, Helvetica, sans-serif"
  })
};

let nodes = [];


export class NodeForm extends React.Component {

  state = {
    value: null
  };


  handleChange = selectedOption => {
    this.setState({ value: selectedOption });
    mainNodeCollection.addNodes(nodes);
  }; 

  render() {
    return (
      <Select
        value={this.state.value}
        onChange={this.handleChange}
        options={options}
        styles={styles}
      />
    );
  }
}

*/
