import { observable } from "mobx";
import { NodeStore } from "./NodeStore";

export class TextNodeStore extends NodeStore {

    /*Set upon instantiation and determines whether the Store is nested inside a collection or not. */
    public notNested;

    /*Initializes the node's size and location. */
    constructor(initializer: Partial<TextNodeStore>) {
        super();
        Object.assign(this, initializer);

        this.w = 300;
        this.h = 300;

    }

    @observable
    public title: string = "";

    @observable
    public text: string = "";
}