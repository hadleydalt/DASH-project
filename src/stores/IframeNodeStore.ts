import { NodeStore } from "./NodeStore";
import { constants } from "../global/Variables"

export class IframeNodeStore extends NodeStore {

    /*Initializes the node's size and location. */
    constructor(initializer: Partial<IframeNodeStore>) {
        super();
        Object.assign(this, initializer);
        this.w = constants.nodeWidth;
        this.h = constants.nodeHeight;
    }

}