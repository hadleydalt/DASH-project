import { computed } from "mobx";
import { NodeStore } from "./NodeStore";
import { constants } from "../global/Variables"

export class CollectionNodeStore extends NodeStore {

    /*A new array is created every time a CollectionNodeStore is instantiated. This array is used to store all of the nodes that are 
    created inside the Collection. */
    public nodes = new Array<NodeStore>();

    /*Set upon instantiation and determines whether the Store is nested inside a collection or not. */
    public nested; 

    /*Initializes the node's size and location. */
    constructor(initializer: Partial<CollectionNodeStore>) {
        super();
        Object.assign(this, initializer);
        this.w = constants.nodeWidth;
        this.h = constants.collectionHeight;
    }

    @computed
    public get transform(): string {
        return "translate(" + this.x + "px, " + this.y + "px)"; // for CSS trnsform property
    }

}