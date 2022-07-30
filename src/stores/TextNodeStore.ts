import { observable } from "mobx";
import { NodeStore } from "./NodeStore";
import { constants } from "../global/Variables"

export class TextNodeStore extends NodeStore {

    /*Initializes the node's size and location. */
    constructor(initializer: Partial<TextNodeStore>) {
        super();
        Object.assign(this, initializer);

        this.w = constants.nodeWidth;
        this.h = constants.nodeHeight;

    }

    @observable
    public title: string = "";

    @observable
    public text: string = "";
}