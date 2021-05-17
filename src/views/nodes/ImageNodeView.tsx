import { observer } from "mobx-react";
import { ImageNodeStore } from "../../stores/ImageNodeStore";
import "./NodeView.scss";
import { TopBar } from "./TopBar";
import "./VideoNodeView.scss";
import { ResizeIcon } from "./ResizeIcon";
import * as React from 'react';
import AddImage from '../nodes/AddImage';
import { Menu, ml } from "../freeformcanvas/Collections/CollectionMenu";
import { nca } from "../freeformcanvas/Sidebar";

interface ImageNodeProps {
    store: ImageNodeStore;
    id: ImageNodeStore;
}


@observer
export class ImageNodeView extends React.Component<ImageNodeProps> {

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    state = {
        clicked: false
    }

    private isPointerDown = false;

    handleClick(){
        this.setState({clicked: true});

        if (nca.collections[0].isNamed = true) {
            ml.c1 = nca.collections[0].name + ' - ';
        }
        if (nca.collections[1].isNamed = true) {
            ml.c2 = nca.collections[1].name + ' - ';
        }
        if (nca.collections[2].isNamed = true) {
            ml.c3 = nca.collections[2].name + ' - ';
        }
        if (nca.collections[3].isNamed = true) {
            ml.c4 = nca.collections[3].name + ' - ';
        }
        if (nca.collections[4].isNamed = true) {
            ml.c5 = nca.collections[4].name + ' - ';
        }
        if (nca.collections[5].isNamed = true) {
            ml.c6 = nca.collections[5].name + ' - ';
        }
        if (nca.collections[6].isNamed = true) {
            ml.c7 = nca.collections[6].name + ' - ';
        }
        if (nca.collections[7].isNamed = true) {
            ml.c8 = nca.collections[7].name + ' - ';
        }
        if (nca.collections[8].isNamed = true) {
            ml.c9 = nca.collections[8].name + ' - ';
        }
        if (nca.collections[9].isNamed = true) {
            ml.c10 = nca.collections[9].name + ' - '; 
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


    render() {

        let store = this.props.store;

        return (
            <div className="node text-node" onPointerDown={this.onPointerDown} style={{ transform: store.transform, width: store.w + 'px', height: store.h + 'px' }} onWheel={(e: React.WheelEvent) => {
                e.stopPropagation();
                e.preventDefault();
            }}>
                <TopBar store={store}/>
                <button className="atc-button" title = "Add to Collection" onClick={this.handleClick}>+</button>
                {this.state.clicked ? <Menu id={this.props.id}/> : null}
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