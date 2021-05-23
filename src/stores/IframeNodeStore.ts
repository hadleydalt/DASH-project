import { NodeStore } from "./NodeStore";

export class IframeNodeStore extends NodeStore {

    /*Set upon instantiation and determines whether the Store is nested inside a collection or not. */
    public notNested;

    /*Initializes the node's size and location. */
    constructor(initializer: Partial<IframeNodeStore>) {
        super();
        Object.assign(this, initializer);
        this.w = 300;
        this.h = 300;
    }

}