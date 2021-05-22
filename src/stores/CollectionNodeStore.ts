import {computed} from "mobx";
import { NodeStore } from "./NodeStore";

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