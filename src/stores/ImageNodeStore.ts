import mainNodeCollection from "../Main";
import { NodeStore } from "./NodeStore";

export class ImageNodeStore extends NodeStore {

    public notNested;

    constructor(initializer: Partial<ImageNodeStore>) {
        super();
        Object.assign(this, initializer);
        this.w = 300;
        this.h = 300;
    }

}