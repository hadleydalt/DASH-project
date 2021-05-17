import * as React from 'react';
import { NodeStore } from '../../../stores/NodeStore';
import { nca } from '../Sidebar';
import { MenuLabels } from './MenuLabels';

export const ml = new MenuLabels();

interface MenuProps {
    id: NodeStore;
}

export class Menu extends React.Component<MenuProps> {

    push1(){
        nca.collections[0].collection.push(this.props.id);
    }

    push2(){
        nca.collections[1].collection.push(this.props.id);
    }

    push3(){
        nca.collections[2].collection.push(this.props.id);
    }

    push4(){
        nca.collections[3].collection.push(this.props.id);
    }

    push5(){
        nca.collections[4].collection.push(this.props.id);
    }

    push6(){
        nca.collections[5].collection.push(this.props.id);
    }

    push7(){
        nca.collections[6].collection.push(this.props.id);
    }

    push8(){
        nca.collections[7].collection.push(this.props.id);
    }

    push9(){
        nca.collections[8].collection.push(this.props.id);
    }

    push10(){
        nca.collections[9].collection.push(this.props.id);
    }

    render(){
        return (
            <div>
                <div className="atc-menu-wrapper">
                <div className="add-to">Add To:</div>
                <span className="atc-menu" onClick={this.push1}>{ml.c1}</span> 
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