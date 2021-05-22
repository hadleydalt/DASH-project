import * as React from "react";
import { CollectionNodeStore } from "../../stores/CollectionNodeStore";
import { IframeNodeStore } from "../../stores/IframeNodeStore";
import { ImageNodeStore } from "../../stores/ImageNodeStore";
import { StoreType } from "../../stores/NodeStore";
import { StaticTextNodeStore } from "../../stores/StaticTextNodeStore";
import { VideoNodeStore } from "../../stores/VideoNodeStore";
import { CollectionNodeView } from "./CollectionNodeView";
import { IframeNodeView } from "./IframeNodeView";
import { ImageNodeView } from "./ImageNodeView";
import { TextNodeView } from "./TextNodeView";
import { VideoNodeView } from "./VideoNodeView";

interface NCVProps {
    store: CollectionNodeStore
}

export class NodeCollectionView extends React.Component<NCVProps> {

    state = {
        clicked: false
    }

    sS(){
        if (this.state.clicked === false) {
        this.setState({clicked: true});
        }
        if (this.state.clicked === true) {
            this.setState({clicked: false});
            }
    }
    
    render(){
        let store = this.props.store;
        let staticID = 0;

        return (  
                // maps each item in the store to be rendered in the canvas based on the node type
                store.nodes.map(nodeStore => {
                    switch (nodeStore.type) {
                        case StoreType.Text:
                            return (<TextNodeView id = {staticID} key={nodeStore.Id} store={nodeStore as StaticTextNodeStore}/>)

                        case StoreType.Video:
                            return (<VideoNodeView id = {staticID} key={nodeStore.Id} store={nodeStore as VideoNodeStore}/>)

                        case StoreType.Image:
                            return (<ImageNodeView id = {staticID} key={nodeStore.Id} store={nodeStore as ImageNodeStore}/>)

                        case StoreType.Iframe:
                            return (<IframeNodeView id = {staticID} key={nodeStore.Id} store={nodeStore as IframeNodeStore}/>)

                        case StoreType.Collection:
                            return (<CollectionNodeView id = {staticID} key={nodeStore.Id} store={nodeStore as CollectionNodeStore} />)

                        default:
                            break;
                    }
                })
        )
    }
}