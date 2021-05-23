import {computed} from "mobx";
import { NodeStore } from "./NodeStore";

export class CollectionNodeStore extends NodeStore {

    /*A new array is created every time a CollectionNodeStore is instantiated. This array is used to store all of the nodes that are 
    created inside the Collection. */
    public nodes = new Array<NodeStore>();

    /*Set upon instantiation and determines whether the Store is nested inside a collection or not. */
    public notNested; 

    /*Initializes the node's size and location. */
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