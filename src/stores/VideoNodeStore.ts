import { observable } from "mobx";
import { NodeStore } from "./NodeStore";
import { constants } from "../global/Variables"

export class VideoNodeStore extends NodeStore {

    /*Initializes the node's size and location. */
    constructor(initializer: Partial<VideoNodeStore>) {
        super();
        Object.assign(this, initializer);
        this.w = constants.nodeWidth;
        this.h = constants.nodeHeight;
    }

    @observable
    public title: string;

    @observable
    public url: string;

}