import * as React from 'react';
import { NodeStore } from '../../../stores/NodeStore';
import { pushCollectionNode } from '../../nodes/CollectionNodeView';
import { pushIframeNode } from '../../nodes/IframeNodeView';
import { pushImageNode } from '../../nodes/ImageNodeView';
import { addedToFolder, pushTextNode, atf } from '../../nodes/TextNodeView';
import { TopBar } from '../../nodes/TopBar';
import { pushVideoNode } from '../../nodes/VideoNodeView';
import { nca } from '../Sidebar';
import { MenuLabels } from './MenuLabels';

let type: string = "";

export const ml = new MenuLabels();

export function changeType(x:string){
    type = x;
}

let one = false;
let two = false;
let three = false;
let four = false;
let five = false;
let six = false;
let seven = false;
let eight = false;
let nine = false;
let ten = false;

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
        if (type === "collection"){
            pushCollectionNode(0);
        }

        atf();
        one = true;
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
        if (type === "collection"){
            pushCollectionNode(1);
        }

        atf();
        two = true;
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
        if (type === "collection"){
            pushCollectionNode(2);
        }

        atf();
        three = true;
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
        if (type === "collection"){
            pushCollectionNode(3);
        }

        atf();
        four = true;
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
        if (type === "collection"){
            pushCollectionNode(4);
        }

        atf();
        five = true;
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
        if (type === "collection"){
            pushCollectionNode(5);
        }

        atf();
        six = true;
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
        if (type === "collection"){
            pushCollectionNode(6);
        }

        atf();
        seven = true;
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
        if (type === "collection"){
            pushCollectionNode(7);
        }

        atf();
        eight = true;
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
        if (type === "collection"){
            pushCollectionNode(8);
        }

        atf();
        nine = true;
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
        if (type === "collection"){
            pushCollectionNode(9);
        }

        atf();
        ten = true;
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

export class LinkedNodes extends React.Component {
    render(){
        return(
            <div>
                <div className="atc-menu-wrapper">
                <div className="add-to">{one? ml.c1 : two? ml. c2 : three? ml.c3 : four? ml.c4 : five? ml.c5 : six? ml.c6 : seven? ml.c7 : eight? ml.c8 : nine? ml.c9 : ml.c10} Contents</div>
            </div>
            </div>
        )
    }
}