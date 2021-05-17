import { computed, observable, action } from "mobx";
import { NodeStore, StoreType } from "./NodeStore";
import { StaticTextNodeStore } from "./StaticTextNodeStore";
import { ImageNodeStore } from "./ImageNodeStore";
import { VideoNodeStore } from "./VideoNodeStore";
import { IframeNodeStore } from "./IframeNodeStore";

export class NodeCollectionStore extends NodeStore {
    public n;

    @observable
    public nodes: NodeStore[] = new Array<NodeStore>();

    @computed
    public get transform(): string {
        return "translate(" + this.x + "px, " + this.y + "px)"; // for CSS trnsform property
    }

    @action
    public addTextNode(): void {
        this.n = new StaticTextNodeStore({ type: StoreType.Text, x: Math.random() * 500, y: Math.random() * 500, title: "", text: "" });
        this.nodes.push(this.n);
    }

    @action
    public addImageNode(): void {
        this.n = new ImageNodeStore({ type: StoreType.Image, x: Math.random() * 500, y: Math.random() * 500 });
        this.nodes.push(this.n);
    }

    @action
    public addVideoNode(): void {
        this.n = new VideoNodeStore({ type: StoreType.Video, x: Math.random() * 500, y: Math.random() * 500 });
        this.nodes.push(this.n);
    }

    @action
    public addIframeNode(): void {
        this.n = new IframeNodeStore({ type: StoreType.Iframe, x: Math.random() * 500, y: Math.random() * 500 });
        this.nodes.push(this.n);
    }
}