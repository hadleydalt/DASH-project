import * as React from 'react';
import Select from 'react-select';
import { observable, action } from "mobx";
import { NodeStore, StoreType } from '../../stores/NodeStore';
import { StaticTextNodeStore } from '../../stores/StaticTextNodeStore'; 
import mainNodeCollection from '../../Main';


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
