import { computed, observable, action } from "mobx";
import { NodeStore } from "./NodeStore"
import { StoreType, variables } from "../global/Variables";
import { TextNodeStore } from "./TextNodeStore";
import { ImageNodeStore } from "./ImageNodeStore";
import { VideoNodeStore } from "./VideoNodeStore";
import { IframeNodeStore } from "./IframeNodeStore";
import { CollectionNodeStore } from "./CollectionNodeStore";
import { random500 } from "../global/Methods"

export class NodeCollectionStore extends NodeStore {

    /*Starts the count which increments every time a new node is instantiated so that it can be assigned an ID number.  */
    public count: number = 0;

    /*Creates the main array of nodes */
    @observable
    public nodes: NodeStore[] = new Array<NodeStore>();

    @computed
    public get transform(): string {
        return "translate(" + this.x + "px, " + this.y + "px)"; // for CSS trnsform property
    }

    /*Adds all types of nodes, assigns its ID, and pushes it to the main array of nodes. nested is false because all nodes pushed to 
    the main array from instantiation by this NodeCollectionStore will not be nested inside a Collection node. */

    @action
    public addNode(type: StoreType): void {
        this.count ++;
        const x = random500() - variables.amDisplacedX;
        const y = random500() - variables.amDisplacedY;
        let n;
        switch (type) {
            case StoreType.Text: 
                n = new TextNodeStore({ type: type, x: x, y: y, title: "", text: "" });
            case StoreType.Image:
                n = new ImageNodeStore({ type: type, x: x, y: y });
            case StoreType.Video:
                n = new VideoNodeStore({ type: type, x: x, y: y });
            case StoreType.Iframe:
                n = new IframeNodeStore({ type: type, x: x, y: y });
            case StoreType.Collection:
                n = new CollectionNodeStore({ type: type, x: x, y: y });
        };
        n.nested = false;
        n.nodeID = this.count;
        this.nodes.push(n);
    }
}