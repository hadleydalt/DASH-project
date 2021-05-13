import { observable } from "mobx";
import { NodeStore } from "./NodeStore";

export class VideoNodeStore extends NodeStore {

    constructor(initializer: Partial<VideoNodeStore>) {
        super();
        Object.assign(this, initializer);
        this.w = 300;
        this.h = 300;
    }

    @observable
    public title: string;

    @observable
    public url: string;

}