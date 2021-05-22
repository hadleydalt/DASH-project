import * as React from "react";
import { NodeStore } from "../../../stores/NodeStore";
import { NewFolder } from "./NewFolder";
import { NewFolderArray } from "./NewFolderArray";

interface CCProps {
  c: NewFolderArray;
}

export class CreateFolder extends React.Component<CCProps> {

  public folders = this.props.c.folders;
  public one: string = "You haven't created any folders yet.";
  public two: string = "";
  public three: string = "";
  public four: string = "";
  public five: string = "";
  public six: string = "";
  public seven: string = "";
  public eight: string = "";
  public nine: string = "";
  public ten: string = "";


    state = {value: '', count: 0};

    constructor(props) {
      super(props);
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit() {
      this.setState({count: this.state.count += 1});
      const newFolder = new NewFolder();
      newFolder.folder = new Array<NodeStore>();
      newFolder.name = this.state.value;
      newFolder.isNamed = true;
      this.folders.push(newFolder); 
      
      if (this.state.count === 1){
        this.one = newFolder.name;
      }
      if (this.state.count === 2){
        this.two = newFolder.name;
      }
      if (this.state.count === 3){
        this.three = newFolder.name;
      }
      if (this.state.count === 4){
        this.four = newFolder.name;
      }
      if (this.state.count === 5){
        this.five = newFolder.name;
      }
      if (this.state.count === 6){
        this.six = newFolder.name;
      }
      if (this.state.count === 7){
        this.seven = newFolder.name;
      }
      if (this.state.count === 8){
        this.eight = newFolder.name;
      }
      if (this.state.count === 9){
        this.nine = newFolder.name;
      }
      if (this.state.count === 10){
        this.ten = newFolder.name;
      }
    }
  
    render() {
      return (
        <div>
        <form className = "form">
          <label>
            NAME:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </form>
        <button className = "create-button" onClick={this.handleSubmit}>Create</button>
        <div className = "folders">
        <div className = "folders-each">{this.one}</div>
        <div className = "folders-each">{this.two}</div>
        <div className = "folders-each">{this.three}</div>
        <div className = "folders-each">{this.four}</div>
        <div className = "folders-each">{this.five}</div>
        <div className = "folders-each">{this.six}</div>
        <div className = "folders-each">{this.seven}</div>
        <div className = "folders-each">{this.eight}</div>
        <div className = "folders-each">{this.nine}</div>
        <div className = "folders-each">{this.ten}</div>
        </div>
        </div>
      );
    }
  }