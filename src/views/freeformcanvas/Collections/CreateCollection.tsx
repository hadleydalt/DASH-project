import { observable } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";
import mainNodeCollection from "../../../Main";
import { NodeCollectionStore } from "../../../stores/NodeCollectionStore";
import { NodeStore } from "../../../stores/NodeStore";
import { NewCollection } from "./NewCollection";

export class CreateCollection extends React.Component {

  public collections = new Array<NewCollection>();
  public one: string = "You haven't created any collections yet.";
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
      const newCollection = new NewCollection();
      newCollection.collection = new Array<NodeStore>();
      newCollection.name = this.state.value;
      newCollection.isNamed = true;
      this.collections.push(newCollection); 
      if (this.state.count === 1){
        this.one = newCollection.name;
      }
      if (this.state.count === 2){
        this.two = newCollection.name;
      }
      if (this.state.count === 3){
        this.three = newCollection.name;
      }
      if (this.state.count === 4){
        this.four = newCollection.name;
      }
      if (this.state.count === 5){
        this.five = newCollection.name;
      }
      if (this.state.count === 6){
        this.six = newCollection.name;
      }
      if (this.state.count === 7){
        this.seven = newCollection.name;
      }
      if (this.state.count === 8){
        this.eight = newCollection.name;
      }
      if (this.state.count === 9){
        this.nine = newCollection.name;
      }
      if (this.state.count === 10){
        this.ten = newCollection.name;
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
        <div className = "collections">
        <div className = "collections-each">{this.one}</div>
        <div className = "collections-each">{this.two}</div>
        <div className = "collections-each">{this.three}</div>
        <div className = "collections-each">{this.four}</div>
        <div className = "collections-each">{this.five}</div>
        <div className = "collections-each">{this.six}</div>
        <div className = "collections-each">{this.seven}</div>
        <div className = "collections-each">{this.eight}</div>
        <div className = "collections-each">{this.nine}</div>
        <div className = "collections-each">{this.ten}</div>
        </div>
        </div>
      );
    }
  }