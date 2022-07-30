import * as React from "react";
import { CollectionNodeStore } from "../../stores/CollectionNodeStore";
import { IframeNodeStore } from "../../stores/IframeNodeStore";
import { ImageNodeStore } from "../../stores/ImageNodeStore";
import { StoreType } from "../../global/Variables";
import { TextNodeStore } from "../../stores/TextNodeStore";
import { VideoNodeStore } from "../../stores/VideoNodeStore";
import { NodeView } from "./NodeView";

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
        const store = this.props.store;
        const staticID = 0;

        return (  
                // maps each item in the store to be rendered in the canvas based on the node type
                store.nodes.map(nodeStore => {
                    const type = nodeStore.type
                    switch (nodeStore.type) {
                        case StoreType.Text:
                            return (<NodeView type={type} id = {staticID} key={nodeStore.Id} store={nodeStore as TextNodeStore}/>)

                        case StoreType.Video:
                            return (<NodeView type={type} id = {staticID} key={nodeStore.Id} store={nodeStore as VideoNodeStore}/>)

                        case StoreType.Image:
                            return (<NodeView type={type} id = {staticID} key={nodeStore.Id} store={nodeStore as ImageNodeStore}/>)

                        case StoreType.Iframe:
                            return (<NodeView type={type} id = {staticID} key={nodeStore.Id} store={nodeStore as IframeNodeStore}/>)

                        case StoreType.Collection:
                            return (<NodeView type={type} id = {staticID} key={nodeStore.Id} store={nodeStore as CollectionNodeStore} />)

                        default:
                            break;
                    }
                })
        )
    }
}