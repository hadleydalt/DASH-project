import { observable } from "mobx";
import { NodeStore } from "./NodeStore";

export class TextNodeStore extends NodeStore {

    public notNested;

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