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
import { x, y, newCollection, NodeCollectionStore, passNewCollection, changeY, changeX } from "../../stores/NodeCollectionStore";
import { NodeStore, StoreType } from "../../stores/NodeStore";
import { StaticTextNodeStore } from "../../stores/StaticTextNodeStore";
import { TextNodeView } from "./TextNodeView";
import { CollectionTopBar } from "./CollectionTopBar";
import { ImageNodeStore } from "../../stores/ImageNodeStore";
import { VideoNodeStore } from "../../stores/VideoNodeStore";
import { SubCollectionNodeStore } from "../../stores/SubCollectionNodeStore";
import { cCounter, subCounter, incS } from "./CollectionNodeView";

interface SubCollectionNodeProps {
    store: SubCollectionNodeStore;
    id: number;
}

let id;

@observer
export class SubCollectionNodeView extends React.Component<SubCollectionNodeProps> {

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
        incS(1);
        let t = new StaticTextNodeStore({ type: StoreType.Text, x: (x+310), y: (y+60), title: "", text: "" });
        changeX(t.x);
        t.nodeID = mainNodeCollection.count;
        mainNodeCollection.nodes.push(t);
        newCollection.push(t);
    }

    addImageNode(){
        mainNodeCollection.count += 1;
        incS(1);
        let i = new ImageNodeStore({ type: StoreType.Image, x: (x+310), y: (y+60) });
        changeX(i.x);
        i.nodeID = mainNodeCollection.count;
        mainNodeCollection.nodes.push(i);
        newCollection.push(i);
    }

    addVideoNode(){
        mainNodeCollection.count += 1;
        incS(1);
        let v = new VideoNodeStore({ type: StoreType.Video, x: (x+310), y: (y+60) });
        changeX(v.x);
        v.nodeID = mainNodeCollection.count;
        mainNodeCollection.nodes.push(v);
        newCollection.push(v);
    }

    addIframeNode(){
        mainNodeCollection.count += 1;
        incS(1);
        let f = new IframeNodeStore({ type: StoreType.Iframe, x: (x+310), y: (y+60) });
        changeX(f.x);
        f.nodeID = mainNodeCollection.count;
        mainNodeCollection.nodes.push(f);
        newCollection.push(f);
    }

    addCollectionNode(){
        mainNodeCollection.count += 1;
        incS(1);
        incS(cCounter);
        let c = new SubCollectionNodeStore({ type: StoreType.Collection, x: (x+310), y: (y+60) });
        changeY(c.y);
        changeX(c.x);
        c.nodeID = mainNodeCollection.count;
        mainNodeCollection.nodes.push(c);
        newCollection.push(c);
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
            ml.c1 = nca.folders[0].name + '  ';
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
            ml.c7 = nca.folders[6].name + '  ';
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
                <TopBar store={store} />
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
                    </div>
                </div>
            </div>
        );
    }
}