import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./Main.scss";
import { NodeCollectionStore } from './stores/NodeCollectionStore';
import { StoreType } from './stores/NodeStore';
import { StaticTextNodeStore } from './stores/StaticTextNodeStore';
import { VideoNodeStore } from './stores/VideoNodeStore';
import { ImageNodeStore } from './stores/ImageNodeStore';
import { FreeFormCanvas } from './views/freeformcanvas/FreeFormCanvas';


const mainNodeCollection = new NodeCollectionStore();
ReactDOM.render((
    <div>
        <FreeFormCanvas store={mainNodeCollection} />
    </div>), document.getElementById('root'));

// create a bunch of text and video nodes (you probably want to delete this at some point)
let numNodes = 300;
let maxX = 1000;
let maxY = 1000;
let nodes = []
for (let i = 0; i < 2; i++) {
    nodes.push(new StaticTextNodeStore({ type: StoreType.Text, x: Math.random() * maxX, y: Math.random() * maxY, title: "", text: "" }));
}

for (let i = 0; i < 2; i++) {
    nodes.push(new VideoNodeStore({ type: StoreType.Video, x: Math.random() * maxX, y: Math.random() * maxY, title: "", url: "" }));
}

for (let i = 0; i < 2; i++) {
    nodes.push(new ImageNodeStore({ type: StoreType.Image, x: Math.random() * maxX, y: Math.random() * maxY }));
}
mainNodeCollection.addNodes(nodes);
