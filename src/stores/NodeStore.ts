import { computed, observable } from "mobx";
import { Utils } from "../Utils";
import { StoreType } from "../global/Variables"

export class NodeStore {

    public nodeID: number;

    public Id: string = Utils.GenerateGuid();

    public type: StoreType = null;

    public nodeName = "";

    /*Set upon instantiation and determines whether the Store is nested inside a collection or not. */
    public nested;

    @observable
    public x: number = 0;

    @observable
    public y: number = 0;

    @observable
    public w: number = 0;

    @observable
    public h: number = 0;

    @computed
    public get transform(): string {
        return "translate(" + this.x + "px, " + this.y + "px)";
    }
}