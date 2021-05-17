import * as React from 'react';
import { nca } from '../Sidebar';
import { MenuLabels } from './MenuLabels';

export const ml = new MenuLabels();

export class Menu extends React.Component {

    push1(){
        nca.collections[0].collection.push()
    }

    render(){
        return (
            <div>
                <div className="atc-menu-wrapper">
                <div className="add-to">Add To:</div>
                <span className="atc-menu" >{ml.c1} - </span> 
                <span className="atc-menu">{ml.c2} - </span>
                <span className="atc-menu">{ml.c3} - </span>
                <span className="atc-menu">{ml.c4} - </span>
                <span className="atc-menu">{ml.c5} - </span>
                <span className="atc-menu">{ml.c6} - </span>
                <span className="atc-menu">{ml.c7} - </span>
                <span className="atc-menu">{ml.c8} - </span>
                <span className="atc-menu">{ml.c9} - </span>
                <span className="atc-menu">{ml.c10}</span>
                </div>
            </div>
        )
    }
}