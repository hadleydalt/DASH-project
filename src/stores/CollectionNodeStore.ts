import { action, computed, observable } from "mobx";
import mainNodeCollection from "../Main";
import { IframeNodeStore } from "./IframeNodeStore";
import { ImageNodeStore } from "./ImageNodeStore";
import { changeX, changeY, NodeCollectionStore } from "./NodeCollectionStore";
import { NodeStore, StoreType } from "./NodeStore";
import { StaticTextNodeStore } from "./StaticTextNodeStore";
import { VideoNodeStore } from "./VideoNodeStore";

export class CollectionNodeStore extends NodeStore {

    public nodes = new Array<NodeStore>();
    public notNested;

    constructor(initializer: Partial<CollectionNodeStore>) {
        super();
        Object.assign(this, initializer);
        this.w = 300;
        this.h = 222;
    }

    @computed
    public get transform(): string {
        return "translate(" + this.x + "px, " + this.y + "px)"; // for CSS trnsform property
    }

}