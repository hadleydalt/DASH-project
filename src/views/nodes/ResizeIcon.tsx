import { observer } from "mobx-react";
import "./NodeView.scss";
import { NodeStore } from "../../stores/NodeStore";
import * as React from 'react';

interface ResizeIProps {
    store: NodeStore;
}

/* The Resize icon appears on all nodes and enables them to be resized by changing the corresponding NodeStore's width (w) and height (h)
values! */

@observer
export class ResizeIcon extends React.Component<ResizeIProps> {

    private isPointerDown = false;

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

        this.props.store.w += e.movementX;
        this.props.store.h += e.movementY;
    }

    render() {
        return (<div className="resizeable" onPointerDown={this.onPointerDown}></div>);
    }
}