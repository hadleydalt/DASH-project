import { observer } from "mobx-react";
import { IframeNodeStore } from "../../stores/IframeNodeStore";
import "./NodeView.scss";
import { ResizeIcon } from "./ResizeIcon";
import { TopBar } from "./TopBar";
import * as React from 'react';
import mainNodeCollection from "../../Main";
import { CollectionNodeStore } from "../../stores/CollectionNodeStore";
import { NodeStore } from "../../stores/NodeStore";
import { constants, variables, StoreType } from "../../global/Variables"
import { TextNodeStore } from "../../stores/TextNodeStore";
import { ImageNodeStore } from "../../stores/ImageNodeStore";
import { VideoNodeStore } from "../../stores/VideoNodeStore";
import { NodeCollectionView } from "./NodeCollectionView";

interface CollectionNodeProps {
    store: CollectionNodeStore;
    id: number;
}

const parentFolderArray = constants.parentFolderArray;

/* The Count, X, and Y variables allow nested nodes to appear in a grid order. */

let count = 0;
let x = -(constants.nodeWidth);
let y = constants.collectionVerticalDisplacement;
const totalVerticalDisplacement = constants.nodeHeight + constants.collectionVerticalDisplacement

/* The decCount function is called when a nested node is deleted. It changes the Count, X, and Y variables so that any new nodes added 
can be added to the right place in the grid. */

export function decCount(){
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
export class CollectionNodeView extends React.Component<CollectionNodeProps> {

    /* Initializes the variables of the folder name labels should the user click on "add To Folder" */

    public folderNameLabels = ['', '', '', '', '', '', '', '', '', '']

    /* Initializes the ID of the node corresponding to this View */

    public id;

    /* Initializes the store that any nested nodes can be added to */

    public store;

    constructor(props){
        super(props);

        this.handleExpand = this.handleExpand.bind(this);
        this.handleOpenCloseFolderContents = this.handleOpenCloseFolderContents.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.id = mainNodeCollection.count;

        this.id = this.props.id;

        this.store = this.props.store;
    }

    state = {
        expanded: false,
        folderContentsOpen: false, 
        added: false,
        addedTo: null,
        deleted: false
    }

    /* Methods to instantiate new Nodes and add them to the array created with the instantiation of this Collection.*/

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

    /* Gathers the names of any folders that have been created so that they can be displayed in the list that shows up whenever the user 
    clicks the add to folder button, which is called */

    handleExpand() {
        if (this.state.expanded === false){
            this.setState({expanded: true});
            }
    
            if (this.state.expanded === true){
                this.setState({expanded: false});
            }

        let i = 0
        for (; i < parentFolderArray.length; ) {
            if (parentFolderArray[i].isNamed) {
                this.folderNameLabels[i] = parentFolderArray[i].name + '  ';
            }
        }
}

/* Changes the state when the node is added to a folder so that the component can rerender and the "View Folder Contents" button can show up */

handleOpenCloseFolderContents(){
    if (this.state.folderContentsOpen === false){
        this.setState({folderContentsOpen: true});
        }

        if (this.state.folderContentsOpen === true){
            this.setState({folderContentsOpen: false});
        }
    
}

/* The following method is used to push the node to respective folders, depending on which folder it has been added to. The method takes 
in the ID given to this View (determined by the ID variable) and finds the NodeStore in the main node array that corresponds to it, 
adding this node to the folder's array! */

pushNode(id: number, folderIndex: number) {
    const thisFolder = parentFolderArray[folderIndex];
    for (var i = 0; i < mainNodeCollection.nodes.length; i++){
        if (mainNodeCollection.nodes[i].nodeID === id){
            if (thisFolder.contents.length < 3) {
                this.setState({added: true, addedTo: folderIndex + 1});
                thisFolder.contents.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + thisFolder.name + '!');
            } else {
                alert('Could not add to folder - maximum reached.')
            }
        }
    }
}

    private isPointerDown = false;

    onPointerDown = (e: React.PointerEvent): void => {
        e.stopPropagation();
        e.preventDefault();
        this.isPointerDown = true;
        document.removeEventListener("pointermove", this.onPointerMove);
        document.addEventListener("pointermove", this.onPointerMove);
        document.removeEventListener("pointerup", this.onPointerUp);
        document.addEventListener("pointerup", this.onPointerUp);
    }

    onPointerUp = (e: PointerEvent): void => {
        e.stopPropagation();
        e.preventDefault();
        this.isPointerDown = false;
        document.removeEventListener("pointermove", this.onPointerMove);
        document.removeEventListener("pointerup", this.onPointerUp);
    }

    onPointerMove = (e: PointerEvent): void => {
        e.stopPropagation();
        e.preventDefault();
        if (!this.isPointerDown) return;

        this.props.store.x += e.movementX;
        this.props.store.y += e.movementY;
    }

    /* If a linked node has been clicked on, this method gets the node and sets it to the 10, 10 position to show it.*/

    showNode(n: NodeStore){
        n.x = (10 - variables.amDisplacedX);
        n.y = (10 - variables.amDisplacedY);
    }

    /* Sets state to Deleted! If the node is nested, the collection count decrements so the the nested grid is not graphically messed up. 
    If the state is deleted the node will not render. */

    handleDelete(nested:boolean){
        this.setState({deleted: true});
        if (nested){
            decCount();
        }
    }

    generateFolderContentStatement(): string {
        const index = this.state.addedTo - 1
        return this.folderNameLabels[index] + " contains " + parentFolderArray[index].contents.length + " notes"
    }

    /* If the + button is clicked, a menu appears displaying the names of all the folders that have been made. If the user clicks on 
    one, it will push the node to the array of that Folder and render the View Folder Contents button. 
    
    This button displays all of the nodes that have been pushed to that folder's array. If the user clicks on one, that node's position 
    will be set to 10, 10 to designate it. 
    
    The Collection node is also special because it contains a menu of options to instantiate nested nodes. */

    render() {

        const store = this.props.store;
        const index = this.state.addedTo - 1
        const label = this.folderNameLabels[index]
        const contents = parentFolderArray[index].contents
        const numContents = contents.length

        return (
            <div>
            {this.state.deleted? null : 
            <div className="node text-node" onPointerDown={this.onPointerDown} style={{ transform: store.transform, width: store.w + 'px', height: store.h + 'px' }} onWheel={(e: React.WheelEvent) => {
                e.stopPropagation();
                e.preventDefault();
            }}>
                <TopBar store={store} />
                {this.state.added? <button className="show-list" onClick={this.handleOpenCloseFolderContents}>{this.state.folderContentsOpen ? "Close Folder Contnts": "View Folder Contents"}</button> : null}
                {!store.nested && !this.state.added ? <button className="atc-button" title = "Add to Folder" onClick={this.handleExpand}>{this.state.expanded ? "-": "+"}</button> : null}
                {this.state.expanded && !this.state.added ?
                <div className="atc-menu-wrapper">
                <div className="add-to">Add To:</div>
                {this.folderNameLabels.map((label, index) => {
                    <span className="atc-menu" onClick={() => this.pushNode(this.id, index)}>{label}</span>
                })}
                </div>
            : null}
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
                                key={index}
                            > 
                                {"Note " + String(index + 1)}
                            </div>
                        }) : null}
                    </div>
                </div>
            </div> : null}
                <div className="scroll-box">
                    <div className="content">
                        <div className="collection-name">COLLECTION →</div>
                        <div className="node-atc">ADD NEW:</div>
                        <div className="node-button-wrapper">
                            {constants.storeTypes.map((type, index) => {
                                <button key={index} className={type === StoreType.Collection ? "node-button-c" : "node-button-each"} onClick={() => this.addNode(this.store, type)}>{constants.storeTypesNames[index]}</button>
                            })}
                        </div>
                        <div className = "rb-wrapper"><button className ="rainbow-button">After adding, move or resize the collection to view the addition.</button></div>
                        <NodeCollectionView store = {store}/>
                        <ResizeIcon store={store}></ResizeIcon>
                    </div>
                </div>
                {store.nested?<button className="delete" onClick={() => this.handleDelete(false)}>X</button> : <button className="delete" onClick={() => this.handleDelete(true)}>X</button> }
            </div>
    }
            </div>
        );
    }
}