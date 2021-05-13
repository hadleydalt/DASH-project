import { observer } from "mobx-react";
import { VideoNodeStore } from "../../stores/VideoNodeStore";
import "./NodeView.scss";
import { TopBar } from "./TopBar";
import "./VideoNodeView.scss";
import { ResizeIcon } from "./ResizeIcon";
import * as React from 'react';
import { TextNodeView } from "./TextNodeView";

interface VideoNodeProps {
    store: VideoNodeStore;
}


@observer
export class VideoNodeView extends React.Component<VideoNodeProps> {


    render() {

        let store = this.props.store;

        return (
            <div className="node text-node" style={{ transform: store.transform, width: store.w + 'px', height: store.h + 'px' }}>
                <TopBar store={store}/>
                <ResizeIcon store={store}></ResizeIcon>
                <div className="scroll-box">
                    <div className="content">
                        <h3 className="title">{store.title}</h3>
                        <video src={store.url} controls />
                    </div>
                </div>
            </div>
        );
    }
}