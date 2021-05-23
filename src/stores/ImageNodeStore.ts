import { NodeStore } from "./NodeStore";

export class ImageNodeStore extends NodeStore {

    /*Set upon instantiation and determines whether the Store is nested inside a collection or not. */
    public notNested;

    constructor(initializer: Partial<ImageNodeStore>) {
        super();
        Object.assign(this, initializer);
        this.w = 300;
        this.h = 300;
    }

}