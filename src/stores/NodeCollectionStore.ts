import { computed, observable, action } from "mobx";
import { NodeStore, StoreType } from "./NodeStore";
import { StaticTextNodeStore } from "./StaticTextNodeStore";
import { ImageNodeStore } from "./ImageNodeStore";
import { VideoNodeStore } from "./VideoNodeStore";
import { IframeNodeStore } from "./IframeNodeStore";

export class NodeCollectionStore extends NodeStore {

    @observable
    public nodes: NodeStore[] = new Array<NodeStore>();

    @computed
    public get transform(): string {
        return "translate(" + this.x + "px, " + this.y + "px)"; // for CSS trnsform property
    }

    @action
    public addTextNode(): void {
        this.nodes.push(new StaticTextNodeStore({ type: StoreType.Text, x: Math.random() * 500, y: Math.random() * 500, title: "", text: "" }));
    }

    @action
    public addImageNode(): void {
        this.nodes.push(new ImageNodeStore({ type: StoreType.Image, x: Math.random() * 500, y: Math.random() * 500 }));
    }

    @action
    public addVideoNode(): void {
        this.nodes.push(new VideoNodeStore({ type: StoreType.Video, x: Math.random() * 500, y: Math.random() * 500 }));
    }

    @action
    public addIframeNode(): void {
        this.nodes.push(new IframeNodeStore({ type: StoreType.Iframe, x: Math.random() * 500, y: Math.random() * 500 }));
    }
}