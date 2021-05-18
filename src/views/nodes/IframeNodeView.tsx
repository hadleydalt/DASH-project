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

interface IframeNodeProps {
    store: IframeNodeStore;
    id: number;
}

let id;

@observer
export class IframeNodeView extends React.Component<IframeNodeProps> {

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
        id = this.props.id;
    }

    state = {
        clicked: false,
    }

    handleClick(){
        if (this.state.clicked === false){
            this.setState({clicked: true});
            }
    
            if (this.state.clicked === true){
                this.setState({clicked: false});
            }

            changeType("iframe");

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
                <TopBar store={store}/>
                <button className="atc-button" title = "Add to Folder" onClick={this.handleClick}>{this.state.clicked ? "-": "+"}</button>
                {this.state.clicked ? <Menu /> : null}
                <ResizeIcon store={store}></ResizeIcon>
                <div className="scroll-box">
                    <div className="content">
                        <div className="iframe-content">
                        <WebsiteForm /> </div>
                    </div>
                </div>
            </div>
        );
    }
}

export function pushIframeNode(x){
    for (var i = 0; i < mainNodeCollection.nodes.length; i++){
        if (mainNodeCollection.nodes[i].nodeID === id){
            nca.folders[x].folder.push(mainNodeCollection.nodes[i]);
            alert('Added to ' + nca.folders[x].name + '!');
        }
    }
}