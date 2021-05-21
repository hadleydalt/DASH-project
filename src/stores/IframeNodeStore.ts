import { NodeStore } from "./NodeStore";

export class IframeNodeStore extends NodeStore {

    public notNested;

    constructor(initializer: Partial<IframeNodeStore>) {
        super();
        Object.assign(this, initializer);
        this.w = 300;
        this.h = 300;
    }

}