import { computed, observable, action } from "mobx";
import { NodeStore, StoreType } from "./NodeStore";
import { StaticTextNodeStore } from "./StaticTextNodeStore";

export class NodeCollectionStore extends NodeStore {

    @observable
    public nodes: NodeStore[] = new Array<NodeStore>();

    @computed
    public get transform(): string {
        return "translate(" + this.x + "px, " + this.y + "px)"; // for CSS trnsform property
    }

    @action
    public addNodes(stores: NodeStore[]): void {
        this.nodes.push(new StaticTextNodeStore({ type: StoreType.Text, x: Math.random() * 500, y: Math.random() * 500, title: "", text: "" }));
        //this.nodes.push(...stores); // This is equivalent to: stores.forEach(store => this.nodes.push(store));

    }
}