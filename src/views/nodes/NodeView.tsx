import * as React from 'react';
import { observer } from "mobx-react";
import "./NodeView.scss";
import { ResizeIcon } from "./ResizeIcon";
import { TopBar } from "./TopBar";
import { WebsiteForm } from './WebsiteForm';
import mainNodeCollection from "../../Main";
import { NodeStore } from "../../stores/NodeStore";
import { StoreType, variables } from '../../global/Variables'
import { constants } from "../../global/Variables";
import RichTextEditor from "./RichTextEditor";
import AddImage from "./AddImage";
import AddVideo from "./AddVideo";
import { CollectionNodeStore } from "../../stores/CollectionNodeStore";
import { IframeNodeStore } from "../../stores/IframeNodeStore";
import { ImageNodeStore } from "../../stores/ImageNodeStore";
import { TextNodeStore } from "../../stores/TextNodeStore";
import { VideoNodeStore } from "../../stores/VideoNodeStore";
import AddCollection from "./AddCollection";

interface NodeProps {
    store: NodeStore;
    type: StoreType;
    id: number;
}

const parentFolderArray = constants.parentFolderArray;

/* These variables allow nested nodes to appear in a grid order. */

let count = 0;
let x = -(constants.nodeWidth);
let y = constants.collectionVerticalDisplacement;
const totalVerticalDisplacement = constants.nodeHeight + constants.collectionVerticalDisplacement

/* The decCount function is called when a nested node is deleted. It changes the Count, X, and Y variables so that any new nodes added 
can be added to the right place in the grid. */

function decCount() {
    if (count % constants.collectionMaxCols === 0) {
        y -= totalVerticalDisplacement;
        x += (totalVerticalDisplacement * 2);
    }
    else {
        x -= constants.nodeWidth;
    }
    count --;
}

@observer
export class NodeView extends React.Component<NodeProps> {

    public folderNameLabels = ['', '', '', '', '', '', '', '', '', ''] // Initializes array of folder name labels so they can be displayed on the note
    public id;

    constructor(props) {
        super(props);

        this.handleExpand = this.handleExpand.bind(this);
        this.handleOpenCloseFolderContents = this.handleOpenCloseFolderContents.bind(this);

        this.id = this.props.id;
    }

    state = {
        expanded: false,
        folderContentsOpen: false, 
        added: false,
        addedTo: null,
        deleted: false
    }

    handleExpand() {
        if (this.state.expanded === false){
            this.setState({expanded: true});
        } else {
            this.setState({expanded: false});
        }

        /* Gets names of all the Folders */

        let i = 0
        for (; i < parentFolderArray.length; ) {
            if (parentFolderArray[i].isNamed) {
                this.folderNameLabels[i] = parentFolderArray[i].name + '  ';
            }
        }
    }

    handleOpenCloseFolderContents() {
        if (this.state.folderContentsOpen === false){
            this.setState({folderContentsOpen: true});
        } else {
            this.setState({folderContentsOpen: false});
        }
    }

    /* Handles adding of this note to a Folder */

    pushNode(id: number, folderIndex: number) {
        const thisFolder = parentFolderArray[folderIndex];
        for (let i = 0; i < mainNodeCollection.nodes.length; i++) {
            if (mainNodeCollection.nodes[i].nodeID === id) { // Matching the View ID of this note with its ID in the Store
                if (thisFolder.contents.length < 3) { // Adds the note to the Folder if the Folder contains less than 3 notes
                    this.setState({added: true, addedTo: folderIndex + 1});
                    thisFolder.contents.push(mainNodeCollection.nodes[i]);
                    alert('Added to ' + thisFolder.name + '!');
                } else {
                    alert('Could not add to folder - maximum reached.')
                }
            }
        }
    }

    onPointerDown = (e: React.PointerEvent): void => {
        e.stopPropagation();
    }

    /* Organizes the notes in the top left corner when the user chooses to view them */

    showNode(n: NodeStore) {
        n.x = (10 - variables.amDisplacedX);
        n.y = (10 - variables.amDisplacedY);
    }

    /* Handling deletion of note */

    handleDelete(nested:boolean) {
        this.setState({deleted: true});
        if (nested) {
            decCount();
        }
    }

    /* Handles adding a new note to a Collection .*/

    addNode(store: CollectionNodeStore, type: StoreType) {
        count ++;
        let n;

        switch (type) {
            case StoreType.Text:
                n = new TextNodeStore({ type: type, x: x+totalVerticalDisplacement, y: y, title: "", text: "" });
            case StoreType.Image:
                new ImageNodeStore({ type: type, x: x+totalVerticalDisplacement, y: y });
            case StoreType.Video:
                new VideoNodeStore({ type: type, x: x+totalVerticalDisplacement, y: y });
            case StoreType.Iframe:
                new IframeNodeStore({ type: type, x: x+totalVerticalDisplacement, y: y });
            case StoreType.Collection:
                new CollectionNodeStore({ type: type, x: x+totalVerticalDisplacement, y: y });
        }

        n.nested = true;
        n.nodeID = 0;

        if (type === StoreType.Collection) {
            x = -(constants.nodeWidth)
            count = 0
        } else {
            x = n.x
            if (count % constants.collectionMaxCols === 0) {
                x = -(constants.nodeWidth)
                y += totalVerticalDisplacement
            }
        }

        store.nodes.push(n);
    }

    render() {
        const store = this.props.store;
        const type = this.props.type;
        const index = this.state.addedTo - 1
        const label = this.folderNameLabels[index]
        const contents = parentFolderArray[index].contents
        const numContents = contents.length

        return (
            <div>
                {this.state.deleted ? 
                    null : 

                    /* Handles Note Topbar configuration, including moving and dragging, adding Note to a Folder, and viewing the other contents
                    in the Folder the note has been added to. */

                    <div 
                        className="node text-node" 
                        onPointerDown={this.onPointerDown} 
                        style={{ transform: store.transform, width: store.w + 'px', height: store.h + 'px' }} 
                        onWheel={(e: React.WheelEvent) => {
                            e.stopPropagation();
                            e.preventDefault();
                        }}>

                    <TopBar store={store} />

                    {this.state.added ? 
                        <button 
                            className="show-list" 
                            onClick={this.handleOpenCloseFolderContents}
                        >
                            {this.state.folderContentsOpen ? "Close Folder Contnts": "View Folder Contents"}
                        </button> : null}

                    {!store.nested && !this.state.added ? 
                        <button 
                            className="atc-button" 
                            title = "Add to Folder" 
                            onClick={this.handleExpand}>
                            {this.state.expanded ? "-": "+"}
                        </button> : null}

                    {this.state.expanded && !this.state.added ?
                        <div className="atc-menu-wrapper">
                            <div className="add-to">Add To:</div>
                                {this.folderNameLabels.map((label, index) => {
                                    <span 
                                        className="atc-menu" 
                                        onClick={() => this.pushNode(this.id, index)}>
                                        {label}
                                    </span>
                                })}
                        </div> : null}

                {this.state.folderContentsOpen ? 
                    <div>
                        <div className="atc-menu-wrapper">
                            <div className="add-to">
                                {label + " contains " + numContents + " notes"}
                            </div>
                            <div>
                                {numContents > 0 ? contents.map((content, index) => {
                                    <div 
                                        className="atc-menu"
                                        onClick={() => this.showNode(content)}
                                        key={index}> 
                                        {"Note " + String(index + 1)}
                                    </div>
                                }) : null}
                            </div>
                        </div>
                    </div> : null}

                <ResizeIcon store={store}></ResizeIcon>

                <div className="scroll-box">
                    <div className="content">
                        {type === StoreType.Text ? 
                            <RichTextEditor /> : 
                        type === StoreType.Image ? 
                            <AddImage /> :
                        type === StoreType.Video ? 
                            <AddVideo /> : 
                        type === StoreType.Iframe ? 
                            <div className="iframe-content">
                                <WebsiteForm /> 
                            </div> : 
                            <AddCollection store={store} addNode={this.addNode(store as CollectionNodeStore, type)} />
                        }
                    </div>
                </div>

                {store.nested ? 
                    <button 
                        className="delete" 
                        onClick={() => this.handleDelete(false)}>
                        X
                    </button> : 
                    <button 
                        className="delete" 
                        onClick={() => this.handleDelete(true)}>
                        X
                    </button>}
                </div>}
            </div>
        );
    }
}