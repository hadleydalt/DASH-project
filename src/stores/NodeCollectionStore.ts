import { computed, observable, action } from "mobx";
import { NodeStore, StoreType } from "./NodeStore";
import { StaticTextNodeStore } from "./StaticTextNodeStore";
import { ImageNodeStore } from "./ImageNodeStore";
import { VideoNodeStore } from "./VideoNodeStore";
import { IframeNodeStore } from "./IframeNodeStore";
import { CollectionNodeStore } from "./CollectionNodeStore";

export class NodeCollectionStore extends NodeStore {
    public count: number = 0;

    @observable
    public nodes: NodeStore[] = new Array<NodeStore>();

    @computed
    public get transform(): string {
        return "translate(" + this.x + "px, " + this.y + "px)"; // for CSS trnsform property
    }

    @action
    public addTextNode(): void {
        this.count += 1;
        let t = new StaticTextNodeStore({ type: StoreType.Text, x: Math.random() * 500, y: Math.random() * 500, title: "", text: "" });
        t.notNested = true;
        t.nodeID = this.count;
        this.nodes.push(t);
    }

    @action
    public addImageNode(): void {
        this.count += 1;
        let i = new ImageNodeStore({ type: StoreType.Image, x: Math.random() * 500, y: Math.random() * 500 });
        i.notNested = true;
        i.nodeID = this.count;
        this.nodes.push(i);
    }

    @action
    public addVideoNode(): void {
        this.count += 1;
        let v = new VideoNodeStore({ type: StoreType.Video, x: Math.random() * 500, y: Math.random() * 500 });
        v.notNested = true;
        v.nodeID = this.count;
        this.nodes.push(v);
    }

    @action
    public addIframeNode(): void {
        this.count += 1;
        let f = new IframeNodeStore({ type: StoreType.Iframe, x: Math.random() * 500, y: Math.random() * 500 });
        f.notNested = true;
        f.nodeID = this.count;
        this.nodes.push(f);
    }

    @action
    public addCollectionNode(): void {
        this.count += 1;
        let c = new CollectionNodeStore({ type: StoreType.Collection, x: Math.random() * 500, y: Math.random() * 500 });
        c.notNested = true;
        c.nodeID = this.count;
        this.nodes.push(c);
    }

}