import { observer } from "mobx-react";
import { IframeNodeStore } from "../../stores/IframeNodeStore";
import "./NodeView.scss";
import { ResizeIcon } from "./ResizeIcon";
import { TopBar } from "./TopBar";
import * as React from 'react';
import { WebsiteForm } from './addIframe';
import { nca } from "../freeformcanvas/Sidebar";
import { Menu, ml, changeType } from "../freeformcanvas/Folders/FolderMenu";
import mainNodeCollection from "../../Main";
import { CollectionNodeStore } from "../../stores/CollectionNodeStore";
import { observable } from "mobx";
import { x, y, newCollection, NodeCollectionStore } from "../../stores/NodeCollectionStore";
import { StoreType } from "../../stores/NodeStore";
import { StaticTextNodeStore } from "../../stores/StaticTextNodeStore";
import { TextNodeView } from "./TextNodeView";
import { CollectionTopBar } from "./CollectionTopBar";

interface CollectionNodeProps {
    store: CollectionNodeStore;
    id: number;
}

let id;

@observer
export class CollectionNodeView extends React.Component<CollectionNodeProps> {

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
        id = this.props.id;
    }

    state = {
        clicked: false,
    }

    addTextNode(){
        mainNodeCollection.count += 1;
        let t = new StaticTextNodeStore({ type: StoreType.Text, x: x, y: y+210, title: "", text: "" });
        t.nodeID = mainNodeCollection.count;
        mainNodeCollection.nodes.push(t);
        newCollection.push(t);
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
            ml.c1 = nca.folders[0].name + ' - ';
        }
        if (nca.folders[1].isNamed = true) {
            ml.c2 = nca.folders[1].name + ' - ';
        }
        if (nca.folders[2].isNamed = true) {
            ml.c3 = nca.folders[2].name + ' - ';
        }
        if (nca.folders[3].isNamed = true) {
            ml.c4 = nca.folders[3].name + ' - ';
        }
        if (nca.folders[4].isNamed = true) {
            ml.c5 = nca.folders[4].name + ' - ';
        }
        if (nca.folders[5].isNamed = true) {
            ml.c6 = nca.folders[5].name + ' - ';
        }
        if (nca.folders[6].isNamed = true) {
            ml.c7 = nca.folders[6].name + ' - ';
        }
        if (nca.folders[7].isNamed = true) {
            ml.c8 = nca.folders[7].name+ ' - ';
        }
        if (nca.folders[8].isNamed = true) {
            ml.c9 = nca.folders[8].name+ ' - ';
        }
        if (nca.folders[9].isNamed = true) {
            ml.c10 = nca.folders[9].name+ ' - '; 
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
        return;
    }

    render() {
        let store = this.props.store;

        return (
            <div className="node text-node" onPointerDown={this.onPointerDown} style={{ transform: store.transform, width: store.w + 'px', height: store.h + 'px' }} onWheel={(e: React.WheelEvent) => {
                e.stopPropagation();
                e.preventDefault();
            }}>
                <CollectionTopBar store={store} collection = {newCollection}/>
                <button className="atc-button" title = "Add to Folder" onClick={this.handleClick}>{this.state.clicked ? "-": "+"}</button>
                {this.state.clicked ? <Menu /> : null}
                <div className="scroll-box">
                    <div className="content">
                        <div className="collection-name">COLLECTION!</div>
                        <div className="node-atc">ADD NEW:</div>
                        <div className="node-button-wrapper">
                            <button className = "node-button-each" onClick={this.addTextNode}>Note</button>
                            <button className = "node-button-each">Image</button>
                            <button className = "node-button-each">Video</button>
                            <button className = "node-button-each">Website</button>
                            <div>
                            <button className="node-button-c">Collection</button>
                            </div>
                        </div>
                        <div className="node-atc">IN THIS COLLECTION:</div>
                    </div>
                </div>
            </div>
        );
    }
}

export function pushCollectionNode(x){
    for (var i = 0; i < mainNodeCollection.nodes.length; i++){
        if (mainNodeCollection.nodes[i].nodeID === id){
            nca.folders[x].folder.push(mainNodeCollection.nodes[i]);
            alert('Added to ' + nca.folders[x].name + '!');
        }
    }
}