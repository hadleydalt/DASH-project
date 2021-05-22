import { observer } from "mobx-react";
import { ImageNodeStore } from "../../stores/ImageNodeStore";
import "./NodeView.scss";
import { TopBar } from "./TopBar";
import "./VideoNodeView.scss";
import { ResizeIcon } from "./ResizeIcon";
import * as React from 'react';
import AddImage from '../nodes/AddImage';
import { Menu, ml, changeType, LinkedNodes, turnfalse } from "../freeformcanvas/Folders/FolderMenu";
import { nca } from "../freeformcanvas/Sidebar";
import mainNodeCollection from "../../Main";

interface ImageNodeProps {
    store: ImageNodeStore;
    id: number;
}
//export let addedToFolder = false;
export function atfImage(){
    this.addedToFolder = true;
}
//let shouldBeClosed = false;
export function sbcImage(){
    this.shouldBeClosed = true;
}

@observer
export class ImageNodeView extends React.Component<ImageNodeProps> {

    public addedToFolder;
    public one; 
    public two;
    public three;
    public four;
    public five;
    public six;
    public seven;
    public eight;
    public nine;
    public ten;

    public f1;
    public f2;
    public f3;
    public f4;
    public f5;
    public f6;
    public f7;
    public f8;
    public f9;
    public f10;

    public id;

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.id = mainNodeCollection.count;
        this.addedToFolder = false;
        this.one = false;
        this.two = false;
        this.three = false;
        this.four = false;
        this.five = false;
        this.six = false;
        this.seven = false;
        this.eight = false;
        this.nine = false;
        this.ten = false;
        this.f1 = "";
        this.f2 = "";
        this.f3 = "";
        this.f4 = "";
        this.f5 = "";
        this.f6 = "";
        this.f7 = "";
        this.f8 = "";
        this.f9 = "";
        this.f10 = "";

        this.id = this.props.id;
    }

    state = {
        clicked: false,
        clicked2: false, 
        added: false
    }

    private isPointerDown = false;

    handleClick(){
        if (this.state.clicked === false){
            this.setState({clicked: true});
            }
    
            if (this.state.clicked === true){
                this.setState({clicked: false});
            }

            //changeType("image");

        if (nca.folders[0].isNamed = true) {
            this.f1 = nca.folders[0].name + '  ';
        }

        if (nca.folders[1].isNamed = true) {
            this.f2 = nca.folders[1].name + '  ';
        }
        if (nca.folders[2].isNamed = true) {
            this.f3 = nca.folders[2].name + '  ';
        }
        if (nca.folders[3].isNamed = true) {
            this.f4 = nca.folders[3].name + '  ';
        }
        if (nca.folders[4].isNamed = true) {
            this.f5 = nca.folders[4].name + '  ';
        }
        if (nca.folders[5].isNamed = true) {
            this.f6 = nca.folders[5].name + '  ';
        }
        if (nca.folders[6].isNamed = true) {
            this.f7 = nca.folders[6].name + '  ';
        }
        if (nca.folders[7].isNamed = true) {
            this.f8 = nca.folders[7].name + '  ';
        }
        if (nca.folders[8].isNamed = true) {
            this.f9 = nca.folders[8].name + '  ';
        }
        if (nca.folders[9].isNamed = true) {
            this.f10 = nca.folders[9].name + '  '; 
    }
}

handleClick2(){
    if (this.state.clicked2 === false){
        this.setState({clicked2: true});
        }

        if (this.state.clicked2 === true){
            this.setState({clicked2: false});
        }
    
}

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

    pushNode1(id: number){
        for (var i = 0; i < mainNodeCollection.nodes.length; i++){
            if (mainNodeCollection.nodes[i].nodeID === id){
                if (nca.folders[0].folder.length < 3){
                this.setState({added: true});
                nca.folders[0].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + nca.folders[0].name + '! Press the "-" button to close the Add To box.');
                }
                else {
                alert('Could not add to folder - maximum reached.')
                }
            }
        }
    }

    pushNode2(id: number){
        for (var i = 0; i < mainNodeCollection.nodes.length; i++){
            if (mainNodeCollection.nodes[i].nodeID === id){
                if (nca.folders[1].folder.length < 3){
                nca.folders[1].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + nca.folders[1].name + '! Press the "-" button to close the Add To box.');
                }
                else {
                alert('Could not add to folder - maximum reached.')
                }
            }
        }
        this.addedToFolder = true;
        this.two = true;
    }

    pushNode3(id: number){
        for (var i = 0; i < mainNodeCollection.nodes.length; i++){
            if (mainNodeCollection.nodes[i].nodeID === id){
                if (nca.folders[2].folder.length < 3){
                nca.folders[2].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + nca.folders[2].name + '! Press the "-" button to close the Add To box.');
                }
                else {
                alert('Could not add to folder - maximum reached.')
                }
            }
        }
        this.addedToFolder = true;
        this.three = true;
    }

    pushNode4(id: number){
        for (var i = 0; i < mainNodeCollection.nodes.length; i++){
            if (mainNodeCollection.nodes[i].nodeID === id){
                if (nca.folders[3].folder.length < 3){
                nca.folders[3].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + nca.folders[3].name + '! Press the "-" button to close the Add To box.');
                }
                else {
                alert('Could not add to folder - maximum reached.')
                }
            }
        }
        this.addedToFolder = true;
        this.four = true;
    }

    pushNode5(id: number){
        for (var i = 0; i < mainNodeCollection.nodes.length; i++){
            if (mainNodeCollection.nodes[i].nodeID === id){
                if (nca.folders[4].folder.length < 3){
                nca.folders[4].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + nca.folders[4].name + '! Press the "-" button to close the Add To box.');
                }
                else {
                alert('Could not add to folder - maximum reached.')
                }
            }
        }
        this.addedToFolder = true;
        this.five = true;
    }

    pushNode6(id: number){
        for (var i = 0; i < mainNodeCollection.nodes.length; i++){
            if (mainNodeCollection.nodes[i].nodeID === id){
                if (nca.folders[5].folder.length < 3){
                nca.folders[5].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + nca.folders[5].name + '! Press the "-" button to close the Add To box.');
                }
                else {
                alert('Could not add to folder - maximum reached.')
                }
            }
        }
        this.addedToFolder = true;
        this.six = true;
    }

    pushNode7(id: number){
        for (var i = 0; i < mainNodeCollection.nodes.length; i++){
            if (mainNodeCollection.nodes[i].nodeID === id){
                if (nca.folders[6].folder.length < 3){
                nca.folders[6].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + nca.folders[6].name + '! Press the "-" button to close the Add To box.');
                }
                else {
                alert('Could not add to folder - maximum reached.')
                }
            }
        }
        this.addedToFolder = true;
        this.seven = true;
    }

    pushNode8(id: number){
        for (var i = 0; i < mainNodeCollection.nodes.length; i++){
            if (mainNodeCollection.nodes[i].nodeID === id){
                if (nca.folders[7].folder.length < 3){
                nca.folders[7].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + nca.folders[7].name + '! Press the "-" button to close the Add To box.');
                }
                else {
                alert('Could not add to folder - maximum reached.')
                }
            }
        }
        this.addedToFolder = true;
        this.eight = true;
    }

    pushNode9(id: number){
        for (var i = 0; i < mainNodeCollection.nodes.length; i++){
            if (mainNodeCollection.nodes[i].nodeID === id){
                if (nca.folders[8].folder.length < 3){
                nca.folders[8].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + nca.folders[8].name + '! Press the "-" button to close the Add To box.');
                }
                else {
                alert('Could not add to folder - maximum reached.')
                }
            }
        }
        this.addedToFolder = true;
        this.nine = true;
    }

    pushNode10(id: number){
        for (var i = 0; i < mainNodeCollection.nodes.length; i++){
            if (mainNodeCollection.nodes[i].nodeID === id){
                if (nca.folders[9].folder.length < 3){
                nca.folders[9].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + nca.folders[9].name + '! Press the "-" button to close the Add To box.');
                }
                else {
                alert('Could not add to folder - maximum reached.')
                }
            }
        }
        this.addedToFolder = true;
        this.ten = true;
    }

    render() {

        let store = this.props.store;

        return (
            <div className="node text-node" onPointerDown={this.onPointerDown} style={{ transform: store.transform, width: store.w + 'px', height: store.h + 'px' }} onWheel={(e: React.WheelEvent) => {
                e.stopPropagation();
                e.preventDefault();
            }}>
                <TopBar store={store}/>
                {this.state.added? <button className="show-list" onClick={this.handleClick2}>{this.state.clicked2 ? "Close Folder Contnts": "View Folder Contents"}</button> : null}
                {store.notNested && this.state.added === false? <button className="atc-button" title = "Add to Folder" onClick={this.handleClick}>{this.state.clicked ? "-": "+"}</button> : null}
                {this.state.clicked && this.state.added === false?
                <div className="atc-menu-wrapper">
                <div className="add-to">Add To:</div>
                <span className="atc-menu" onClick={() => this.pushNode1(this.id)}>{this.f1}</span>
                <span className="atc-menu" onClick={() => this.pushNode2(this.id)}>{this.f2}</span>
                <span className="atc-menu" onClick={() => this.pushNode3(this.id)}>{this.f3}</span>
                <span className="atc-menu" onClick={() => this.pushNode4(this.id)}>{this.f4}</span>
                <span className="atc-menu" onClick={() => this.pushNode5(this.id)}>{this.f5}</span>
                <span className="atc-menu" onClick={() => this.pushNode6(this.id)}>{this.f6}</span>
                <span className="atc-menu" onClick={() => this.pushNode7(this.id)}>{this.f7}</span>
                <span className="atc-menu" onClick={() => this.pushNode8(this.id)}>{this.f8}</span>
                <span className="atc-menu" onClick={() => this.pushNode9(this.id)}>{this.f9}</span>
                <span className="atc-menu" onClick={() => this.pushNode10(this.id)}>{this.f10}</span>
                </div>
            : null}
                {this.state.clicked2 ? <LinkedNodes /> : null}
                <ResizeIcon store={store}></ResizeIcon>
                <div className="scroll-box">
                    <div className="content">
                    <AddImage />
                    </div>
                </div>
            </div>
        );
    }
} 