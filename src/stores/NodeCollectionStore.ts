import { computed, observable, action } from "mobx";
import { NodeStore, StoreType } from "./NodeStore";
import { TextNodeStore } from "./TextNodeStore";
import { ImageNodeStore } from "./ImageNodeStore";
import { VideoNodeStore } from "./VideoNodeStore";
import { IframeNodeStore } from "./IframeNodeStore";
import { CollectionNodeStore } from "./CollectionNodeStore";
import { amDisplacedX, amDisplacedY } from "../views/freeformcanvas/FreeFormCanvas";

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

    /*Adds all types of nodes, assigns its ID, and pushes it to the main array of nodes. notNested is true because all nodes pushed to 
    the main array from instantiation by this NodeCollectionStore will not be nested inside a Collection node. */
    
    @action
    public addTextNode(): void {
        this.count += 1;
        let t = new TextNodeStore({ type: StoreType.Text, x: ((Math.random() * 500) - amDisplacedX), y: ((Math.random() * 500) - amDisplacedY), title: "", text: "" });
        t.notNested = true;
        t.nodeID = this.count;
        this.nodes.push(t);
    }

    @action
    public addImageNode(): void {
        this.count += 1;
        let i = new ImageNodeStore({ type: StoreType.Image, x: ((Math.random() * 500) - amDisplacedX), y: ((Math.random() * 500) - amDisplacedY), });
        i.notNested = true;
        i.nodeID = this.count;
        this.nodes.push(i);
    }

    @action
    public addVideoNode(): void {
        this.count += 1;
        let v = new VideoNodeStore({ type: StoreType.Video, x: ((Math.random() * 500) - amDisplacedX), y: ((Math.random() * 500) - amDisplacedY), });
        v.notNested = true;
        v.nodeID = this.count;
        this.nodes.push(v);
    }

    @action
    public addIframeNode(): void {
        this.count += 1;
        let f = new IframeNodeStore({ type: StoreType.Iframe, x: ((Math.random() * 500) - amDisplacedX), y: ((Math.random() * 500) - amDisplacedY), });
        f.notNested = true;
        f.nodeID = this.count;
        this.nodes.push(f);
    }

    @action
    public addCollectionNode(): void {
        this.count += 1;
        let c = new CollectionNodeStore({ type: StoreType.Collection, x: ((Math.random() * 500) - amDisplacedX), y: ((Math.random() * 500) - amDisplacedY), });
        c.notNested = true;
        c.nodeID = this.count;
        this.nodes.push(c);
    }

}