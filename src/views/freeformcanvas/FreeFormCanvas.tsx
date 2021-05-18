import { observer } from "mobx-react";
import { NodeCollectionStore } from "../../stores/NodeCollectionStore";
import "./FreeFormCanvas.scss";
import * as React from 'react';
import { StaticTextNodeStore } from "../../stores/StaticTextNodeStore";
import { ImageNodeStore } from "../../stores/ImageNodeStore";
import { VideoNodeStore } from "../../stores/VideoNodeStore";
import { TextNodeView } from "../nodes/TextNodeView";
import { VideoNodeView } from "../nodes/VideoNodeView";
import { ImageNodeView } from "../nodes/ImageNodeView";
import { StoreType } from "../../stores/NodeStore";
import { IframeNodeView } from "../nodes/IframeNodeView";
import { IframeNodeStore } from "../../stores/IframeNodeStore";
import { NodeForm } from "./Sidebar";
import { Menu } from "./Folders/FolderMenu";
import { CreateFolder } from "./Folders/CreateFolder";
import { CollectionNodeStore } from "../../stores/CollectionNodeStore";
import { CollectionNodeView } from "../nodes/CollectionNodeView";
import { SubCollectionNodeStore } from "../../stores/SubCollectionNodeStore";
import { SubCollectionNodeView } from "../nodes/SubCollectionNodeView";

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
    }

    render() {
        let store = this.props.store;
        return (
            <div className="ffc-and-menu-container">
            <div className="freeformcanvas-container" onPointerDown={this.onPointerDown}>
                <div className="freeformcanvas" style={{ transform: store.transform }}>
                    {   
                        // maps each item in the store to be rendered in the canvas based on the node type
                        store.nodes.map(nodeStore => {
                            switch (nodeStore.type) {
                                case StoreType.Text:
                                    return (<TextNodeView id = {store.count} key={nodeStore.Id} store={nodeStore as StaticTextNodeStore}/>)

                                case StoreType.Video:
                                    return (<VideoNodeView id = {store.count} key={nodeStore.Id} store={nodeStore as VideoNodeStore}/>)

                                case StoreType.Image:
                                    return (<ImageNodeView id = {store.count} key={nodeStore.Id} store={nodeStore as ImageNodeStore}/>)

                                case StoreType.Iframe:
                                    return (<IframeNodeView id = {store.count} key={nodeStore.Id} store={nodeStore as IframeNodeStore}/>)

                                case StoreType.Collection:
                                    return (<CollectionNodeView id = {store.count} key={nodeStore.Id} store={nodeStore as CollectionNodeStore}/>)
                                
                                case StoreType.SubCollection:
                                    return (<SubCollectionNodeView id = {store.count} key={nodeStore.Id} store={nodeStore as SubCollectionNodeStore}/>)

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
