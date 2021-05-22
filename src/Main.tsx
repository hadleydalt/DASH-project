import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./Main.scss";
import { NodeCollectionStore } from './stores/NodeCollectionStore';
import { StoreType } from './stores/NodeStore';
import { StaticTextNodeStore } from './stores/StaticTextNodeStore';
import { VideoNodeStore } from './stores/VideoNodeStore';
import { ImageNodeStore } from './stores/ImageNodeStore';
import { IframeNodeStore } from "./stores/IframeNodeStore";
import { FreeFormCanvas } from './views/freeformcanvas/FreeFormCanvas';


const mainNodeCollection = new NodeCollectionStore();

ReactDOM.render((
    <div>
        <FreeFormCanvas store={mainNodeCollection} />
    </div>), document.getElementById('root'));

export default mainNodeCollection;
