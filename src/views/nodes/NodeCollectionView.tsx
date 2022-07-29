import * as React from "react";
import { CollectionNodeStore } from "../../stores/CollectionNodeStore";
import { IframeNodeStore } from "../../stores/IframeNodeStore";
import { ImageNodeStore } from "../../stores/ImageNodeStore";
import { StoreType } from "../../global/Variables";
import { TextNodeStore } from "../../stores/TextNodeStore";
import { VideoNodeStore } from "../../stores/VideoNodeStore";
import { CollectionNodeView } from "./CollectionNodeView";
import { IframeNodeView } from "./IframeNodeView";
import { ImageNodeView } from "./ImageNodeView";
import { TextNodeView } from "./TextNodeView";
import { VideoNodeView } from "./VideoNodeView";

interface Props {
    store: CollectionNodeStore
}

/* THe NodeCollectionView class acts as a "canvas" that appears in the CollectionNodeView. The nested nodes are rendered onto this 
canvas. */

export class NodeCollectionView extends React.Component<Props> {

    state = {
        clicked: false
    }

    updateClicked(){
        if (this.state.clicked) {
            this.setState({clicked: false});
        } else {
            this.setState({clicked: true});
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
                            return (<TextNodeView id = {staticID} key={nodeStore.Id} store={nodeStore as TextNodeStore}/>)

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