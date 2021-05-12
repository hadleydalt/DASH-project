import { observer } from "mobx-react";
import { StaticTextNodeStore } from "../../stores/StaticTextNodeStore";
import "./NodeView.scss";
import { TopBar } from "./TopBar";
import { ResizeIcon } from "./ResizeIcon";
import * as React from 'react';

interface TextNodeProps {
    store: StaticTextNodeStore;
}

@observer
export class TextNodeView extends React.Component<TextNodeProps> {

    render() {
        let store = this.props.store;

        return (
            <div className="node text-node" style={{ transform: store.transform }} onWheel={(e: React.WheelEvent) => {
                e.stopPropagation();
                e.preventDefault();
            }}>
                <TopBar store={store}/>
                <ResizeIcon store={store}/>
                <div className="react-resizeable">hi</div>
                <div className="scroll-box">
                    <div className="content">
                        <h3 className="title">{store.title}</h3>
                        <p className="paragraph">{store.text}</p>
                    </div>
                </div>
            </div>
        );
    }
}