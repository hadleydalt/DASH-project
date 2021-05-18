import * as React from 'react';
import { NodeStore } from '../../../stores/NodeStore';
import { pushIframeNode } from '../../nodes/IframeNodeView';
import { pushImageNode } from '../../nodes/ImageNodeView';
import { pushTextNode } from '../../nodes/TextNodeView';
import { TopBar } from '../../nodes/TopBar';
import { pushVideoNode } from '../../nodes/VideoNodeView';
import { nca } from '../Sidebar';
import { MenuLabels } from './MenuLabels';

export const ml = new MenuLabels();
let type: string = "";
export function changeType(x:string){
    type = x;
}

interface MenuProps {
}

export class Menu extends React.Component {

    push1(){
        if (type === "text"){
            pushTextNode(0);
        }
        if (type === "image"){
            pushImageNode(0);
        }
        if (type === "video"){
            pushVideoNode(0);
        }
        if (type === "iframe"){
            pushIframeNode(0);
        }
    }

    push2(){
        if (type === "text"){
            pushTextNode(1);
        }
        if (type === "image"){
            pushImageNode(1);
        }
        if (type === "video"){
            pushVideoNode(1);
        }
        if (type === "iframe"){
            pushIframeNode(1);
        }
    }

    push3(){
        if (type === "text"){
            pushTextNode(2);
        }
        if (type === "image"){
            pushImageNode(2);
        }
        if (type === "video"){
            pushVideoNode(2);
        }
        if (type === "iframe"){
            pushIframeNode(2);
        }
    }

    push4(){
        if (type === "text"){
            pushTextNode(3);
        }
        if (type === "image"){
            pushImageNode(3);
        }
        if (type === "video"){
            pushVideoNode(3);
        }
        if (type === "iframe"){
            pushIframeNode(3);
        }
    }

    push5(){
        if (type === "text"){
            pushTextNode(4);
        }
        if (type === "image"){
            pushImageNode(4);
        }
        if (type === "video"){
            pushVideoNode(4);
        }
        if (type === "iframe"){
            pushIframeNode(4);
        }
    }

    push6(){
        if (type === "text"){
            pushTextNode(5);
        }
        if (type === "image"){
            pushImageNode(5);
        }
        if (type === "video"){
            pushVideoNode(5);
        }
        if (type === "iframe"){
            pushIframeNode(5);
        }
    }

    push7(){
        if (type === "text"){
            pushTextNode(6);
        }
        if (type === "image"){
            pushImageNode(6);
        }
        if (type === "video"){
            pushVideoNode(6);
        }
        if (type === "iframe"){
            pushIframeNode(6);
        }
    }

    push8(){
        if (type === "text"){
            pushTextNode(7);
        }
        if (type === "image"){
            pushImageNode(7);
        }
        if (type === "video"){
            pushVideoNode(7);
        }
        if (type === "iframe"){
            pushIframeNode(7);
        }
    }

    push9(){
        if (type === "text"){
            pushTextNode(8);
        }
        if (type === "image"){
            pushImageNode(8);
        }
        if (type === "video"){
            pushVideoNode(8);
        }
        if (type === "iframe"){
            pushIframeNode(8);
        }
    }

    push10(){
        if (type === "text"){
            pushTextNode(9);
        }
        if (type === "image"){
            pushImageNode(9);
        }
        if (type === "video"){
            pushVideoNode(9);
        }
        if (type === "iframe"){
            pushIframeNode(9);
        }
    }

    render(){
        return (
            <div>
                <div className="atc-menu-wrapper">
                <div className="add-to">Add To:</div>
                <span className="atc-menu" onClick={this.push1} >{ml.c1}</span> 
                <span className="atc-menu" onClick={this.push2}>{ml.c2}</span>
                <span className="atc-menu" onClick={this.push3}>{ml.c3}</span>
                <span className="atc-menu" onClick={this.push4}>{ml.c4}</span>
                <span className="atc-menu" onClick={this.push5}>{ml.c5}</span>
                <span className="atc-menu" onClick={this.push6}>{ml.c6}</span>
                <span className="atc-menu" onClick={this.push7}>{ml.c7}</span>
                <span className="atc-menu" onClick={this.push8}>{ml.c8}</span>
                <span className="atc-menu" onClick={this.push9}>{ml.c9}</span>
                <span className="atc-menu" onClick={this.push10}>{ml.c10}</span>
                </div>
            </div>
        )
    }
}