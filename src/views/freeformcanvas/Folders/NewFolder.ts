import { NodeStore } from "../../../stores/NodeStore";

/* A class that is instantiated every time a folder is created. The variables are explained in the CreateFolder class. */

export class NewFolder {

    public folder: NodeStore[];

    public folders: NewFolder[];
    
    public name: string;

    public isNamed: boolean = false;

}