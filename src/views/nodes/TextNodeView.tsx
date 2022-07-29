import { observer } from "mobx-react";
import { TextNodeStore } from "../../stores/TextNodeStore";
import "./NodeView.scss";
import { ResizeIcon } from "./ResizeIcon";
import { TopBar } from "./TopBar";
import * as React from 'react';
import RichTextEditor from '../nodes/RichTextEditor';
import { folderArr } from '../freeformcanvas/Sidebar';
import mainNodeCollection from "../../Main";
import { NodeStore } from "../../stores/NodeStore";
import { variables } from "../../global/Variables"
import { decCount } from "./CollectionNodeView";

interface TextNodeProps {
    store: TextNodeStore;
    id: number;
}

/* All of the View class's methods are explained in the Collection Node View class since they are generally the same, with 
CollectionNodeView having a few extra capabilities. */

@observer
export class TextNodeView extends React.Component<TextNodeProps> {

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
        this.handleDelete = this.handleDelete.bind(this);

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
        clicked3: false,
        added: false,
        addedTo: null,
        deleted: false
    }

    private isPointerDown = false;

    handleClick(){
        if (this.state.clicked === false){
            this.setState({clicked: true});
            }
    
            if (this.state.clicked === true){
                this.setState({clicked: false});
            }

        if (folderArr.folders[0].isNamed = true) {
            this.f1 = folderArr.folders[0].name + '  ';
        }

        if (folderArr.folders[1].isNamed = true) {
            this.f2 = folderArr.folders[1].name + '  ';
        }
        if (folderArr.folders[2].isNamed = true) {
            this.f3 = folderArr.folders[2].name + '  ';
        }
        if (folderArr.folders[3].isNamed = true) {
            this.f4 = folderArr.folders[3].name + '  ';
        }
        if (folderArr.folders[4].isNamed = true) {
            this.f5 = folderArr.folders[4].name + '  ';
        }
        if (folderArr.folders[5].isNamed = true) {
            this.f6 = folderArr.folders[5].name + '  ';
        }
        if (folderArr.folders[6].isNamed = true) {
            this.f7 = folderArr.folders[6].name + '  ';
        }
        if (folderArr.folders[7].isNamed = true) {
            this.f8 = folderArr.folders[7].name + '  ';
        }
        if (folderArr.folders[8].isNamed = true) {
            this.f9 = folderArr.folders[8].name + '  ';
        }
        if (folderArr.folders[9].isNamed = true) {
            this.f10 = folderArr.folders[9].name + '  '; 
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
    }

    pushNode1(id: number){
        for (var i = 0; i < mainNodeCollection.nodes.length; i++){
            if (mainNodeCollection.nodes[i].nodeID === id){
                if (folderArr.folders[0].folder.length < 3){
                this.setState({added: true, addedTo: 1});
                folderArr.folders[0].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + folderArr.folders[0].name + '!');
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
                if (folderArr.folders[1].folder.length < 3){
                this.setState({added: true, addedTo: 2});
                folderArr.folders[1].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + folderArr.folders[1].name + '!');
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
                if (folderArr.folders[2].folder.length < 3){
                this.setState({added: true, addedTo: 3});
                folderArr.folders[2].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + folderArr.folders[2].name + '!');
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
                if (folderArr.folders[3].folder.length < 3){
                this.setState({added: true, addedTo: 4});
                folderArr.folders[3].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + folderArr.folders[3].name + '!');
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
                if (folderArr.folders[4].folder.length < 3){
                this.setState({added: true, addedTo: 5});
                folderArr.folders[4].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + folderArr.folders[4].name + '!');
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
                if (folderArr.folders[5].folder.length < 3){
                this.setState({added: true, addedTo: 6});
                folderArr.folders[5].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + folderArr.folders[5].name + '!');
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
                if (folderArr.folders[6].folder.length < 3){
                this.setState({added: true, addedTo: 7});
                folderArr.folders[6].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + folderArr.folders[6].name + '!');
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
                if (folderArr.folders[7].folder.length < 3){
                this.setState({added: true, addedTo: 8});
                folderArr.folders[7].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + folderArr.folders[7].name + '!');
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
                if (folderArr.folders[8].folder.length < 3){
                this.setState({added: true, addedTo: 9});
                folderArr.folders[8].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + folderArr.folders[8].name + '!');
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
                if (folderArr.folders[9].folder.length < 3){
                this.setState({added: true, addedTo: 10});
                folderArr.folders[9].folder.push(mainNodeCollection.nodes[i]);
                alert('Added to ' + folderArr.folders[9].name + '!');
                }
                else {
                alert('Could not add to folder - maximum reached.')
                }
            }
        }
    }

    handleDelete(nested:boolean){
        this.setState({deleted: true});
        if (nested){
            decCount();
        }
    }

    showNode(n: NodeStore){
        n.x = (10 - variables.amDisplacedX);
        n.y = (10 - variables.amDisplacedY);
    }

    render() {
        let store = this.props.store;

        return (
            <div>
            {this.state.deleted? null: 
                <div className="node text-node" onPointerDown={this.onPointerDown} style={{ transform: store.transform, width: store.w + 'px', height: store.h + 'px' }} onWheel={(e: React.WheelEvent) => {
                e.stopPropagation();
                e.preventDefault();
            }}>
                <TopBar store={store}/>
                {this.state.added? <button className="show-list" onClick={this.handleClick2}>{this.state.clicked2 ? "Close Folder Contnts": "View Folder Contents"}</button> : null}
                {!store.nested && !this.state.added ? <button className="atc-button" title = "Add to Folder" onClick={this.handleClick}>{this.state.clicked ? "-": "+"}</button> : null}
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
                this.f1 + " contains " + folderArr.folders[0].folder.length + " notes": this.state.addedTo===2? 
                this.f2 + " contains " + folderArr.folders[1].folder.length + " notes" : this.state.addedTo===3? 
                this.f3 + " contains " + folderArr.folders[2].folder.length + " notes" : this.state.addedTo===4? 
                this.f4 + " contains " + folderArr.folders[3].folder.length + " notes" : this.state.addedTo===5? 
                this.f5 + " contains " + folderArr.folders[4].folder.length + " notes" : this.state.addedTo===6? 
                this.f6 + " contains " + folderArr.folders[5].folder.length + " notes" : this.state.addedTo===7? 
                this.f7 + " contains " + folderArr.folders[6].folder.length + " notes" : this.state.addedTo===8? 
                this.f8 + " contains " + folderArr.folders[7].folder.length + " notes" : this.state.addedTo===9? 
                this.f9 + " contains " + folderArr.folders[8].folder.length + " notes" : 
                this.f10 + " contains " + folderArr.folders[9].folder.length + " notes"}</div>
                {this.state.addedTo===1? 
                <div><span className="atc-menu">{folderArr.folders[0].folder.length === 0? "": ""}</span> 
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[0].folder[0])}>{folderArr.folders[0].folder.length > 0? "Note 1": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[0].folder[1])}>{folderArr.folders[0].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[0].folder[2])}>{folderArr.folders[0].folder.length > 2? "Note 3": ""}</div>
                </div> : 
                this.state.addedTo===2? <div><div className="atc-menu">{folderArr.folders[1].folder.length === 0? "": ""}</div> 
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[1].folder[0])}>{folderArr.folders[1].folder.length > 0? "Note 1": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[1].folder[1])}>{folderArr.folders[1].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[1].folder[2])}>{folderArr.folders[1].folder.length > 2? "Note 3": ""}</div>
                </div> : 
                this.state.addedTo===3? <div><div className="atc-menu">{folderArr.folders[2].folder.length === 0? "": ""}</div> 
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[2].folder[0])}>{folderArr.folders[2].folder.length > 0? "Note 1": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[2].folder[1])}>{folderArr.folders[2].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[2].folder[2])}>{folderArr.folders[2].folder.length > 2? "Note 3": ""}</div>
                </div> : 
                this.state.addedTo===4? <div><div className="atc-menu">{folderArr.folders[3].folder.length === 0? "": ""}</div> 
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[3].folder[0])}>{folderArr.folders[3].folder.length > 0 ? "Note 1": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[3].folder[1])}>{folderArr.folders[3].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[3].folder[2])}>{folderArr.folders[3].folder.length > 2? "Note 3": ""}</div>
                </div> : 
                this.state.addedTo===5? <div><div className="atc-menu">{folderArr.folders[4].folder.length === 0? "": ""}</div> 
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[4].folder[0])}>{folderArr.folders[4].folder.length > 0? "Note 1": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[4].folder[1])}>{folderArr.folders[4].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[4].folder[2])}>{folderArr.folders[4].folder.length > 2? "Note 3": ""}</div>
                </div> : 
                this.state.addedTo===6? <div><div className="atc-menu">{folderArr.folders[5].folder.length === 0? "": ""}</div> 
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[5].folder[0])}>{folderArr.folders[5].folder.length > 0? "Note 1": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[5].folder[1])}>{folderArr.folders[5].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[5].folder[2])}>{folderArr.folders[5].folder.length > 2? "Note 3": ""}</div>
                </div> : 
                this.state.addedTo===7? <div><div className="atc-menu">{folderArr.folders[6].folder.length === 0? "": ""}</div> 
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[6].folder[0])}>{folderArr.folders[6].folder.length > 0? "Note 1": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[6].folder[1])}>{folderArr.folders[6].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[6].folder[2])}>{folderArr.folders[6].folder.length > 2? "Note 3": ""}</div>
                </div> : 
                this.state.addedTo===8? <div><div className="atc-menu">{folderArr.folders[7].folder.length === 0? "": ""}</div> 
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[7].folder[0])}>{folderArr.folders[7].folder.length > 0? "Note 1": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[7].folder[1])}>{folderArr.folders[7].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[7].folder[2])}>{folderArr.folders[7].folder.length > 2? "Note 3": ""}</div>
                </div> : 
                this.state.addedTo===9? <div><div className="atc-menu">{folderArr.folders[8].folder.length === 0? "": ""}</div> 
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[8].folder[0])}>{folderArr.folders[8].folder.length > 0? "Note 1": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[8].folder[1])}>{folderArr.folders[8].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[8].folder[2])}>{folderArr.folders[8].folder.length > 2? "Note 3": ""}</div>
                </div> : 
                <div><div className="atc-menu">{folderArr.folders[9].folder.length === 0? "": ""}</div> 
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[9].folder[0])}>{folderArr.folders[9].folder.length > 0? "Note 1": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[9].folder[1])}>{folderArr.folders[9].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu" onClick={() => this.showNode(folderArr.folders[9].folder[2])}>{folderArr.folders[9].folder.length > 2? "Note 3": ""}</div>
                </div>
                }
                </div>
            </div> : null}
                <ResizeIcon store={store}></ResizeIcon>
                <div className="scroll-box">
                    <div className="content">
                    <RichTextEditor />
                    </div>
                </div>
                {store.nested? <button className="delete" onClick={() => this.handleDelete(false)}>X</button> : <button className="delete" onClick={() => this.handleDelete(true)}>X</button> }
            </div>
            }
            </div>
        );
    }
}