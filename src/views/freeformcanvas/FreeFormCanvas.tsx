import { observer } from "mobx-react";
import { NodeCollectionStore } from "../../stores/NodeCollectionStore";
import "./FreeFormCanvas.scss";
import * as React from 'react';
import { TextNodeStore } from "../../stores/TextNodeStore";
import { ImageNodeStore } from "../../stores/ImageNodeStore";
import { VideoNodeStore } from "../../stores/VideoNodeStore";
import { StoreType, variables } from "../../global/Variables";
import { IframeNodeStore } from "../../stores/IframeNodeStore";
import { NodeForm } from "./Sidebar";
import { CollectionNodeStore } from "../../stores/CollectionNodeStore";
import { NodeView } from "../nodes/NodeView";

interface FreeFormProps {
    store: NodeCollectionStore
}

@observer
export class FreeFormCanvas extends React.Component<FreeFormProps> {

    private isPointerDown: boolean;

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
        variables.amDisplacedX += e.movementX;
        variables.amDisplacedY += e.movementY;
    }

    render() {
        const store = this.props.store;
        return (
            <div className="ffc-and-menu-container">
            <div className="freeformcanvas-container" onPointerDown={this.onPointerDown}>
                <div className="freeformcanvas" style={{ transform: store.transform }}>
                    {   
                        // maps each item in the store to be rendered in the canvas based on the node type
                        store.nodes.map(nodeStore => {
                            const type = nodeStore.type;
                            switch (type) {
                                case StoreType.Text:
                                    return (<NodeView type = {type} id = {store.count} key={nodeStore.Id} store={nodeStore as TextNodeStore}/>)

                                case StoreType.Video:
                                    return (<NodeView type = {type} id = {store.count} key={nodeStore.Id} store={nodeStore as VideoNodeStore}/>)

                                case StoreType.Image:
                                    return (<NodeView type = {type} id = {store.count} key={nodeStore.Id} store={nodeStore as ImageNodeStore}/>)

                                case StoreType.Iframe:
                                    return (<NodeView type = {type} id = {store.count} key={nodeStore.Id} store={nodeStore as IframeNodeStore}/>)

                                case StoreType.Collection:
                                    return (<NodeView type = {type} id = {store.count} key={nodeStore.Id} store={nodeStore as CollectionNodeStore} />)

                                default:
                                    break;
                            }
                        })
                    }
                </div>
            </div>
            <NodeForm />
            </div>
        );
    }
}
