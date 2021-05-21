import { observer } from "mobx-react";
import { IframeNodeStore } from "../../stores/IframeNodeStore";
import "./NodeView.scss";
import { ResizeIcon } from "./ResizeIcon";
import { TopBar } from "./TopBar";
import * as React from 'react';
import { WebsiteForm } from './addIframe';
import { nca } from "../freeformcanvas/Sidebar";
import { Menu, ml, changeType, turnfalse, LinkedNodes } from "../freeformcanvas/Folders/FolderMenu";
import mainNodeCollection from "../../Main";
import { CollectionNodeStore } from "../../stores/CollectionNodeStore";
import { action, observable } from "mobx";
import { x, y, NodeCollectionStore, changeX, changeY } from "../../stores/NodeCollectionStore";
import { NodeStore, StoreType } from "../../stores/NodeStore";
import { StaticTextNodeStore } from "../../stores/StaticTextNodeStore";
import { TextNodeView } from "./TextNodeView";
import { ImageNodeStore } from "../../stores/ImageNodeStore";
import { VideoNodeStore } from "../../stores/VideoNodeStore";
import { VideoNodeView } from "./VideoNodeView";
import { ImageNodeView } from "./ImageNodeView";
import { IframeNodeView } from "./IframeNodeView";
import { NodeCollectionView } from "./NodeCollectionView";

interface CollectionNodeProps {
    store: CollectionNodeStore;
    id: number;
}

let id;
let store;
export let addedToFolder = false;
export function atfCollection(){
    addedToFolder = true;
}

@observer
export class CollectionNodeView extends React.Component<CollectionNodeProps> {

    constructor(props){
        super(props);

        id = this.props.id;
        store = this.props.store;

        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
    }

    state = {
        clicked: false,
        clicked2: false,
    }

    addTextNode(){
        let t = new StaticTextNodeStore({ type: StoreType.Text, x: 5, y: 5, title: "", text: "" });
        t.notNested = false;
        changeX(t.x);
        t.nodeID = 0;
        store.nodes.push(t);
    }

    addImageNode(){
        let i = new ImageNodeStore({ type: StoreType.Image, x: 5, y: 5 });
        i.notNested = false;
        changeX(i.x);
        i.nodeID = 0;
        store.nodes.push(i);
    }

    addVideoNode(){
        let v = new VideoNodeStore({ type: StoreType.Video, x: 5, y: 5 });
        v.notNested = false;
        changeX(v.x);
        v.nodeID = 0;
        store.nodes.push(v);
    }

    addIframeNode(){
        let f = new IframeNodeStore({ type: StoreType.Iframe, x: 5, y: 5 });
        f.notNested = false;
        changeX(f.x);
        f.nodeID = 0;
        store.nodes.push(f);
    }

    addCollectionNode(){
        let c = new CollectionNodeStore({ type: StoreType.Collection, x: 5, y: 5 });
        c.notNested = false;
        changeX(c.x);
        changeY(c.y);
        c.nodeID = 0;
        store.nodes.push(c);
    } 

    handleClick(){
        if (this.state.clicked === false){
            this.setState({clicked: true});
            }
    
            if (this.state.clicked === true){
                this.setState({clicked: false});
            }

            changeType("collection");

        if (nca.folders[0].isNamed = true) {
            ml.c1 = nca.folders[0].name + ' ';
        }
        if (nca.folders[1].isNamed = true) {
            ml.c2 = nca.folders[1].name + '  ';
        }
        if (nca.folders[2].isNamed = true) {
            ml.c3 = nca.folders[2].name + '  ';
        }
        if (nca.folders[3].isNamed = true) {
            ml.c4 = nca.folders[3].name + '  ';
        }
        if (nca.folders[4].isNamed = true) {
            ml.c5 = nca.folders[4].name + '  ';
        }
        if (nca.folders[5].isNamed = true) {
            ml.c6 = nca.folders[5].name + '  ';
        }
        if (nca.folders[6].isNamed = true) {
            ml.c7 = nca.folders[6].name + ' ';
        }
        if (nca.folders[7].isNamed = true) {
            ml.c8 = nca.folders[7].name+ '  ';
        }
        if (nca.folders[8].isNamed = true) {
            ml.c9 = nca.folders[8].name+ '  ';
        }
        if (nca.folders[9].isNamed = true) {
            ml.c10 = nca.folders[9].name+ '  '; 
    }
}

handleClick2(){
    if (this.state.clicked2 === false){
        this.setState({clicked2: true});
        }

        if (this.state.clicked2 === true){
            this.setState({clicked2: false});
            turnfalse();
            addedToFolder = false;
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

    render() {

        let store = this.props.store;

        return (
            <div className="node text-node" onPointerDown={this.onPointerDown} style={{ transform: store.transform, width: store.w + 'px', height: store.h + 'px' }} onWheel={(e: React.WheelEvent) => {
                e.stopPropagation();
                e.preventDefault();
            }}>
                <TopBar store={store} />
                {addedToFolder ? <button className="show-list" onClick={this.handleClick2}>{this.state.clicked2 ? "Close Folder Contnts": "View Folder Contents"}</button> : null}
                {store.notNested? <button className="atc-button" title = "Add to Folder" onClick={this.handleClick}>{this.state.clicked ? "-": "+"}</button> : null}
                {this.state.clicked ? <Menu /> : null}
                {this.state.clicked2 ? <LinkedNodes /> : null}
                <ResizeIcon store={store}></ResizeIcon>
                <div className="scroll-box">
                    <div className="content">
                        <div className="collection-name">COLLECTION →</div>
                        <div className="node-atc">ADD NEW:</div>
                        <div className="node-button-wrapper">
                            <button className = "node-button-each" onClick={this.addTextNode}>Note</button>
                            <button className = "node-button-each" onClick={this.addImageNode}>Image</button>
                            <button className = "node-button-each" onClick={this.addVideoNode}>Video</button>
                            <button className = "node-button-each" onClick={this.addIframeNode}>Website</button>
                            <div>
                            <button className="node-button-c" onClick={this.addCollectionNode}>Collection</button>
                            </div>
                        </div>
                        <div className = "rb-wrapper"><button className ="rainbow-button">After adding, move or resize the collection to view the addition.</button></div>
                        <NodeCollectionView store = {store}/>
                    </div>
                </div>
            </div>
        );
    }
}

export function pushCollectionNode(x){
    for (var i = 0; i < mainNodeCollection.nodes.length; i++){
        if (mainNodeCollection.nodes[i].nodeID === id){
            if (nca.folders[x].folder.length < 3){
            nca.folders[x].folder.push(mainNodeCollection.nodes[i]);
            alert('Added to ' + nca.folders[x].name + '! Press the "-" button to close the Add To box.');
            }
            else {
            alert('Could not add to folder - maximum reached.')
            }
        }
    }
}