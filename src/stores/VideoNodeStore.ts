import { observable } from "mobx";
import { NodeStore } from "./NodeStore";
import { constants } from "../global/Variables"

export class VideoNodeStore extends NodeStore {

    /*Set upon instantiation and determines whether the Store is nested inside a collection or not. */
    public nested;

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