import * as React from 'react';
import mainNodeCollection from '../../../Main';
import { NodeStore } from '../../../stores/NodeStore';
import { atfCollection, pushCollectionNode } from '../../nodes/CollectionNodeView';
import { atfIframe, pushIframeNode } from '../../nodes/IframeNodeView';
import { atfImage, pushImageNode, sbcImage } from '../../nodes/ImageNodeView';
import { addedToFolder, pushTextNode, atfText } from '../../nodes/TextNodeView';
import { TopBar } from '../../nodes/TopBar';
import { atfVideo, pushVideoNode } from '../../nodes/VideoNodeView';
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

export function turnfalse(){
    one = false;
    two = false;
    three = false;
    four = false;
    five = false;
    six = false;
    seven = false;
    eight = false;
    nine = false;
    ten = false;
}

export class Menu extends React.Component {

    push1(){
        if (type === "text"){
            pushTextNode(0);
            atfText();
        }
        if (type === "image"){
            pushImageNode(0);
            atfImage();
            sbcImage();
        }
        if (type === "video"){
            pushVideoNode(0);
            atfVideo();
        }
        if (type === "iframe"){
            pushIframeNode(0);
            atfIframe();
        }
        if (type === "collection"){
            pushCollectionNode(0);
            atfCollection();
        }
        one = true;
    }

    push2(){
        if (type === "text"){
            pushTextNode(1);
            atfText();
        }
        if (type === "image"){
            pushImageNode(1);
            atfImage();
        }
        if (type === "video"){
            pushVideoNode(1);
            atfVideo();
        }
        if (type === "iframe"){
            pushIframeNode(1);
            atfIframe();
        }
        if (type === "collection"){
            pushCollectionNode(1);
            atfCollection();
        }
        two = true;
    }

    push3(){
        if (type === "text"){
            pushTextNode(2);
            atfText();
        }
        if (type === "image"){
            pushImageNode(2);
            atfImage();
        }
        if (type === "video"){
            pushVideoNode(2);
            atfVideo();
        }
        if (type === "iframe"){
            pushIframeNode(2);
            atfIframe();
        }
        if (type === "collection"){
            pushCollectionNode(2);
            atfCollection();
        }

        three = true;
    }

    push4(){
        if (type === "text"){
            pushTextNode(3);
            atfText();
        }
        if (type === "image"){
            pushImageNode(3);
            atfImage();
        }
        if (type === "video"){
            pushVideoNode(3);
            atfVideo();
        }
        if (type === "iframe"){
            pushIframeNode(3);
            atfIframe()
        }
        if (type === "collection"){
            pushCollectionNode(3);
            atfCollection();
        }

        four = true;
    }

    push5(){
        if (type === "text"){
            pushTextNode(4);
            atfText();
        }
        if (type === "image"){
            pushImageNode(4);
            atfImage();
        }
        if (type === "video"){
            pushVideoNode(4);
            atfVideo();
        }
        if (type === "iframe"){
            pushIframeNode(4);
            atfIframe();
        }
        if (type === "collection"){
            pushCollectionNode(4);
            atfCollection();
        }
        five = true;
    }

    push6(){
        if (type === "text"){
            pushTextNode(5);
            atfText();
        }
        if (type === "image"){
            pushImageNode(5);
            atfImage();
        }
        if (type === "video"){
            pushVideoNode(5);
            atfVideo();
        }
        if (type === "iframe"){
            pushIframeNode(5);
            atfIframe();
        }
        if (type === "collection"){
            pushCollectionNode(5);
            atfCollection();
        }

        six = true;
    }

    push7(){
        if (type === "text"){
            pushTextNode(6);
            atfText();
        }
        if (type === "image"){
            pushImageNode(6);
            atfImage();
        }
        if (type === "video"){
            pushVideoNode(6);
            atfVideo();
        }
        if (type === "iframe"){
            pushIframeNode(6);
            atfIframe();
        }
        if (type === "collection"){
            pushCollectionNode(6);
            atfCollection();
        }

        seven = true;
    }

    push8(){
        if (type === "text"){
            pushTextNode(7);
            atfText();
        }
        if (type === "image"){
            pushImageNode(7);
            atfImage();
        }
        if (type === "video"){
            pushVideoNode(7);
            atfVideo();
        }
        if (type === "iframe"){
            pushIframeNode(7);
            atfIframe();
        }
        if (type === "collection"){
            pushCollectionNode(7);
            atfCollection();
        }

        eight = true;
    }

    push9(){
        if (type === "text"){
            pushTextNode(8);
            atfText();
        }
        if (type === "image"){
            pushImageNode(8);
            atfImage();
        }
        if (type === "video"){
            pushVideoNode(8);
            atfVideo();
        }
        if (type === "iframe"){
            pushIframeNode(8);
            atfIframe();
        }
        if (type === "collection"){
            pushCollectionNode(8);
            atfCollection();
        }

        nine = true;
    }

    push10(){
        if (type === "text"){
            pushTextNode(9);
            atfText();
        }
        if (type === "image"){
            pushImageNode(9);
            atfImage();
        }
        if (type === "video"){
            pushVideoNode(9);
            atfVideo();
        }
        if (type === "iframe"){
            pushIframeNode(9);
            atfIframe();
        }
        if (type === "collection"){
            pushCollectionNode(9);
            atfCollection();
        }

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
                <div className="add-to" >{one? ml.c1 + " contains " + nca.folders[0].folder.length + " notes": two? ml.c1 + " contains " + nca.folders[1].folder.length + " notes" : three? ml.c1 + " contains " + nca.folders[2].folder.length + " notes" : four? ml.c1 + " contains " + nca.folders[3].folder.length + " notes" : five? ml.c1 + " contains " + nca.folders[4].folder.length + " notes" : six? ml.c1 + " contains " + nca.folders[5].folder.length + " notes" : seven? ml.c1 + " contains " + nca.folders[6].folder.length + " notes" : eight? ml.c1 + " contains " + nca.folders[7].folder.length + " notes" : nine? ml.c1 + " contains " + nca.folders[8].folder.length + " notes" : ml.c1 + " contains " + nca.folders[9].folder.length + " notes"} :</div>
                {one? 
                <div><span className="atc-menu" >{nca.folders[0].folder.length === 0? "": ""}</span> 
                <div className="atc-menu">{nca.folders[0].folder.length > 0? "Note 1": ""}</div>
                <div className="atc-menu">{nca.folders[0].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu">{nca.folders[0].folder.length > 2? "Note 3": ""}</div>
                </div> : 
                two? <div><div className="atc-menu">{nca.folders[1].folder.length === 0? "": ""}</div> 
                <div className="atc-menu">{nca.folders[1].folder.length > 0? "Note 1": ""}</div>
                <div className="atc-menu">{nca.folders[1].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu">{nca.folders[1].folder.length > 2? "Note 3": ""}</div>
                </div> : 
                three? <div><div className="atc-menu">{nca.folders[2].folder.length === 0? "": ""}</div> 
                <div className="atc-menu">{nca.folders[2].folder.length > 0? "Note 1": ""}</div>
                <div className="atc-menu">{nca.folders[2].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu">{nca.folders[2].folder.length > 2? "Note 3": ""}</div>
                </div> : 
                four? <div><div className="atc-menu">{nca.folders[3].folder.length === 0? "": ""}</div> 
                <div className="atc-menu">{nca.folders[3].folder.length > 0 ? "Note 1": ""}</div>
                <div className="atc-menu">{nca.folders[3].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu">{nca.folders[3].folder.length > 2? "Note 3": ""}</div>
                </div> : 
                five? <div><div className="atc-menu">{nca.folders[4].folder.length === 0? "": ""}</div> 
                <div className="atc-menu">{nca.folders[4].folder.length > 0? "Note 1": ""}</div>
                <div className="atc-menu">{nca.folders[4].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu">{nca.folders[4].folder.length > 2? "Note 3": ""}</div>
                </div> : 
                six? <div><div className="atc-menu">{nca.folders[5].folder.length === 0? "": ""}</div> 
                <div className="atc-menu">{nca.folders[5].folder.length > 0? "Note 1": ""}</div>
                <div className="atc-menu">{nca.folders[5].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu">{nca.folders[5].folder.length > 2? "Note 3": ""}</div>
                </div> : 
                seven? <div><div className="atc-menu">{nca.folders[6].folder.length === 0? "": ""}</div> 
                <div className="atc-menu">{nca.folders[6].folder.length > 0? "Note 1": ""}</div>
                <div className="atc-menu">{nca.folders[6].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu">{nca.folders[6].folder.length > 2? "Note 3": ""}</div>
                </div> : 
                eight? <div><div className="atc-menu">{nca.folders[7].folder.length === 0? "": ""}</div> 
                <div className="atc-menu">{nca.folders[7].folder.length > 0? "Note 1": ""}</div>
                <div className="atc-menu">{nca.folders[7].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu">{nca.folders[7].folder.length > 2? "Note 3": ""}</div>
                </div> : 
                nine? <div><div className="atc-menu">{nca.folders[8].folder.length === 0? "": ""}</div> 
                <div className="atc-menu">{nca.folders[8].folder.length > 0? "Note 1": ""}</div>
                <div className="atc-menu">{nca.folders[8].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu">{nca.folders[8].folder.length > 2? "Note 3": ""}</div>
                </div> : 
                <div><div className="atc-menu">{nca.folders[9].folder.length === 0? "": ""}</div> 
                <div className="atc-menu">{nca.folders[9].folder.length > 0? "Note 1": ""}</div>
                <div className="atc-menu">{nca.folders[9].folder.length > 1? "Note 2": ""}</div>
                <div className="atc-menu">{nca.folders[9].folder.length > 2? "Note 3": ""}</div>
                </div>
                }
                <div className="c-note">Please close Folder Contents before creating another note!</div>
            </div>
            </div>
        )
    }
}