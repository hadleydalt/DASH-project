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
import { NodeStore } from "../../stores/NodeStore";
import { amDisplacedX, amDisplacedY } from "../freeformcanvas/FreeFormCanvas";

interface ImageNodeProps {
    store: ImageNodeStore;
    id: number;
}

@observer
export class ImageNodeView extends React.Component<ImageNodeProps> {

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
        added: false,
        addedTo: null
    }

    private isPointerDown = false;

    handleClick(){
        if (this.state.clicked === false){
            this.setState({clicked: true});
            }
    
            if (this.state.clicked === true){
                this.setState({clicked: false});
            }

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
                this.setState({added: true, addedTo: 1});
                nca.folders[0].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + nca.folders[0].name + '!');
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
                this.setState({added: true, addedTo: 2});
                nca.folders[1].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + nca.folders[1].name + '!');
                }
                else {
                alert('Could not add to folder - maximum reached.')
                }
            }
        }
    }

    pushNode3(id: number){
        for (var i = 0; i < mainNodeCollection.nodes.length; i++){
            if (mainNodeCollection.nodes[i].nodeID === id){
                if (nca.folders[2].folder.length < 3){
                this.setState({added: true, addedTo: 3});
                nca.folders[2].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + nca.folders[2].name + '!');
                }
                else {
                alert('Could not add to folder - maximum reached.')
                }
            }
        }
    }

    pushNode4(id: number){
        for (var i = 0; i < mainNodeCollection.nodes.length; i++){
            if (mainNodeCollection.nodes[i].nodeID === id){
                if (nca.folders[3].folder.length < 3){
                this.setState({added: true, addedTo: 4});
                nca.folders[3].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + nca.folders[3].name + '!');
                }
                else {
                alert('Could not add to folder - maximum reached.')
                }
            }
        }
    }

    pushNode5(id: number){
        for (var i = 0; i < mainNodeCollection.nodes.length; i++){
            if (mainNodeCollection.nodes[i].nodeID === id){
                if (nca.folders[4].folder.length < 3){
                this.setState({added: true, addedTo: 5});
                nca.folders[4].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + nca.folders[4].name + '!');
                }
                else {
                alert('Could not add to folder - maximum reached.')
                }
            }
        }
    }

    pushNode6(id: number){
        for (var i = 0; i < mainNodeCollection.nodes.length; i++){
            if (mainNodeCollection.nodes[i].nodeID === id){
                if (nca.folders[5].folder.length < 3){
                this.setState({added: true, addedTo: 6});
                nca.folders[5].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + nca.folders[5].name + '!');
                }
                else {
                alert('Could not add to folder - maximum reached.')
                }
            }
        }
    }

    pushNode7(id: number){
        for (var i = 0; i < mainNodeCollection.nodes.length; i++){
            if (mainNodeCollection.nodes[i].nodeID === id){
                if (nca.folders[6].folder.length < 3){
                this.setState({added: true, addedTo: 7});
                nca.folders[6].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + nca.folders[6].name + '!');
                }
                else {
                alert('Could not add to folder - maximum reached.')
                }
            }
        }
    }

    pushNode8(id: number){
        for (var i = 0; i < mainNodeCollection.nodes.length; i++){
            if (mainNodeCollection.nodes[i].nodeID === id){
                if (nca.folders[7].folder.length < 3){
                this.setState({added: true, addedTo: 8});
                nca.folders[7].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + nca.folders[7].name + '!');
                }
                else {
                alert('Could not add to folder - maximum reached.')
                }
            }
        }
    }

    pushNode9(id: number){
        for (var i = 0; i < mainNodeCollection.nodes.length; i++){
            if (mainNodeCollection.nodes[i].nodeID === id){
                if (nca.folders[8].folder.length < 3){
                this.setState({added: true, addedTo: 9});
                nca.folders[8].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + nca.folders[8].name + '!');
                }
                else {
                alert('Could not add to folder - maximum reached.')
                }
            }
        }
    }

    pushNode10(id: number){
        for (var i = 0; i < mainNodeCollection.nodes.length; i++){
            if (mainNodeCollection.nodes[i].nodeID === id){
                if (nca.folders[9].folder.length < 3){
                this.setState({added: true, addedTo: 10});
                nca.folders[9].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + nca.folders[9].name + '!');
                }
                else {
                alert('Could not add to folder - maximum reached.')
                }
            }
        }
    }

    showNode(n: NodeStore){
        n.x = (10 - amDisplacedX);
        n.y = (10 - amDisplacedY);
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
                {this.state.clicked2 ? 
                <div>
                <div className="atc-menu-wrapper">
                <div className="add-to">{this.state.addedTo===1? 
                this.f1 + " contains " + nca.folders[0].folder.length + " notes": 
                this.state.addedTo===2? this.f2 + " contains " + nca.folders[1].folder.length + " notes" : 
                this.state.addedTo===3? this.f3 + " contains " + nca.folders[2].folder.length + " notes" : 
                this.state.addedTo===4? this.f4 + " contains " + nca.folders[3].folder.length + " notes" : 
                this.state.addedTo===5? this.f5 + " contains " + nca.folders[4].folder.length + " notes" : 
                this.state.addedTo===6? this.f6 + " contains " + nca.folders[5].folder.length + " notes" : 
                this.state.addedTo===7? this.f7 + " contains " + nca.folders[6].folder.length + " notes" : 
                this.state.addedTo===8? this.f8 + " contains " + nca.folders[7].folder.length + " notes" : 
                this.state.addedTo===9? this.f9 + " contains " + nca.folders[8].folder.length + " notes" : 
                this.f10 + " contains " + nca.folders[9].folder.length + " notes"}</div>
                {this.state.addedTo===1? 
                <div><span className="atc-menu">{nca.folders[0].folder.length === 0? "": ""}</span> 
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[0].folder[0])}>{nca.folders[0].folder.length > 0? "Note 1": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[0].folder[1])}>{nca.folders[0].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[0].folder[2])}>{nca.folders[0].folder.length > 2? "Note 3": ""}</div>
                </div> : 
                this.state.addedTo===2? <div><div className="atc-menu">{nca.folders[1].folder.length === 0? "": ""}</div> 
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[1].folder[0])}>{nca.folders[1].folder.length > 0? "Note 1": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[1].folder[1])}>{nca.folders[1].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[1].folder[2])}>{nca.folders[1].folder.length > 2? "Note 3": ""}</div>
                </div> : 
                this.state.addedTo===3? <div><div className="atc-menu">{nca.folders[2].folder.length === 0? "": ""}</div> 
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[2].folder[0])}>{nca.folders[2].folder.length > 0? "Note 1": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[2].folder[1])}>{nca.folders[2].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[2].folder[2])}>{nca.folders[2].folder.length > 2? "Note 3": ""}</div>
                </div> : 
                this.state.addedTo===4? <div><div className="atc-menu">{nca.folders[3].folder.length === 0? "": ""}</div> 
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[3].folder[0])}>{nca.folders[3].folder.length > 0 ? "Note 1": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[3].folder[1])}>{nca.folders[3].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[3].folder[2])}>{nca.folders[3].folder.length > 2? "Note 3": ""}</div>
                </div> : 
                this.state.addedTo===5? <div><div className="atc-menu">{nca.folders[4].folder.length === 0? "": ""}</div> 
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[4].folder[0])}>{nca.folders[4].folder.length > 0? "Note 1": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[4].folder[1])}>{nca.folders[4].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[4].folder[2])}>{nca.folders[4].folder.length > 2? "Note 3": ""}</div>
                </div> : 
                this.state.addedTo===6? <div><div className="atc-menu">{nca.folders[5].folder.length === 0? "": ""}</div> 
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[5].folder[0])}>{nca.folders[5].folder.length > 0? "Note 1": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[5].folder[1])}>{nca.folders[5].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[5].folder[2])}>{nca.folders[5].folder.length > 2? "Note 3": ""}</div>
                </div> : 
                this.state.addedTo===7? <div><div className="atc-menu">{nca.folders[6].folder.length === 0? "": ""}</div> 
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[6].folder[0])}>{nca.folders[6].folder.length > 0? "Note 1": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[6].folder[1])}>{nca.folders[6].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[6].folder[2])}>{nca.folders[6].folder.length > 2? "Note 3": ""}</div>
                </div> : 
                this.state.addedTo===8? <div><div className="atc-menu">{nca.folders[7].folder.length === 0? "": ""}</div> 
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[7].folder[0])}>{nca.folders[7].folder.length > 0? "Note 1": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[7].folder[1])}>{nca.folders[7].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[7].folder[2])}>{nca.folders[7].folder.length > 2? "Note 3": ""}</div>
                </div> : 
                this.state.addedTo===9? <div><div className="atc-menu">{nca.folders[8].folder.length === 0? "": ""}</div> 
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[8].folder[0])}>{nca.folders[8].folder.length > 0? "Note 1": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[8].folder[1])}>{nca.folders[8].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[8].folder[2])}>{nca.folders[8].folder.length > 2? "Note 3": ""}</div>
                </div> : 
                <div><div className="atc-menu">{nca.folders[9].folder.length === 0? "": ""}</div> 
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[9].folder[0])}>{nca.folders[9].folder.length > 0? "Note 1": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[9].folder[1])}>{nca.folders[9].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(nca.folders[9].folder[2])}>{nca.folders[9].folder.length > 2? "Note 3": ""}</div>
                </div>
                }
                </div>
            </div> : null}
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