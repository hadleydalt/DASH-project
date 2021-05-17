import { NodeStore } from "../../../stores/NodeStore";

export class NewCollection {

    public collection: NodeStore[];

    public collections: NewCollection[];
    
    public name: string;

    public isNamed: boolean = false;

}