import * as React from "react";
import { NodeStore } from "../../../stores/NodeStore";
import { Folder } from "./Folder";
import { constants } from "../../../global/Variables";

export class FolderCreator extends React.Component {

  /*Initializes the folder labels. If a folder is created and named, these labels are changed to the name that is entered. */

  private parentFolderArray = constants.parentFolderArray;
  private allFolderNames = ["You haven't created any folders yet.", "", "", "", "", "", "", "", "", "",]


    state = {value: '', count: 0};

    constructor(props) {
      super(props);
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    /*Gathers characters that are entered in to the entry bar */

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    /*Creates a new folder if the user presses submit. The new folder houses an Array wherein any nodes added to that folder are pushed. 
    The name of the folder is set to the name the user has entered in. The isNamed variable is set to true so that any labels can be set
    to the name of the folder. The Folder array is also pushed to a parent array of folders. */

    handleSubmit() {
      this.setState({count: this.state.count += 1});
      const newFolder = new Folder();
      newFolder.contents = new Array<NodeStore>();
      newFolder.name = this.state.value;
      newFolder.isNamed = true;
      this.parentFolderArray.push(newFolder); 

      /* Sets the labels to the names of the folders if they have been created. */
      this.allFolderNames[this.state.count - 1] = newFolder.name
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
        <div className = "folders"> {/* Display existing Folder names */}
          {this.allFolderNames.map((name, index) => { 
            <div key={index} className = "folders-each">{name}</div>
          })}
        </div>
        </div>
      );
    }
  }