import { observer } from "mobx-react";
import { NodeStore } from "../../stores/NodeStore";
import "./NodeView.scss";
import * as React from 'react';
import { x, y, changeLoc } from "../../stores/NodeCollectionStore";

interface TopBarProps {
    store: NodeStore;
    collection: NodeStore[];
}

@observer
export class CollectionTopBar extends React.Component<TopBarProps> {

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

        this.props.store.x += e.movementX;
        this.props.store.y += e.movementY;
        changeLoc(e.movementX, e.movementY);

        for (var i = 0; i < this.props.collection.length; i++) {
            this.props.collection[i].x += e.movementX;
            this.props.collection[i].y += e.movementY;
        }
    }

    render() {
        return <div className="top" onPointerDown={this.onPointerDown} />
    }
}