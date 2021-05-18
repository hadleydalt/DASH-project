import { NodeStore } from "./NodeStore";

export class SubCollectionNodeStore extends NodeStore {

    constructor(initializer: Partial<SubCollectionNodeStore>) {
        super();
        Object.assign(this, initializer);
        this.w = 300;
        this.h = 170;
    }

}