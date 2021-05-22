import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./Main.scss";
import { NodeCollectionStore } from './stores/NodeCollectionStore';
import { FreeFormCanvas } from './views/freeformcanvas/FreeFormCanvas';


const mainNodeCollection = new NodeCollectionStore();

ReactDOM.render((
    <div>
        <FreeFormCanvas store={mainNodeCollection} />
    </div>), document.getElementById('root'));

export default mainNodeCollection;
