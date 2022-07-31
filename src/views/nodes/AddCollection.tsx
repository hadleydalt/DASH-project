import * as React from 'react'
import { constants, StoreType } from '../../global/Variables'
import { CollectionNodeStore } from '../../stores/CollectionNodeStore'
import { NodeCollectionView } from './NodeCollectionView'
import { ResizeIcon } from './ResizeIcon'

/* Handles the styling of a Collection note's default content */

export default function AddCollection(props) {
    const store = props.store

    return (
        <>
            <div className="collection-name">COLLECTION →</div>
            <div className="node-atc">ADD NEW:</div>
            <div className="node-button-wrapper">
                {constants.storeTypes.map((type, index) => {
                    <button key={index} className={type === StoreType.Collection ? "node-button-c" : "node-button-each"} onClick={() => props.addNode}>{constants.storeTypesNames[index]}</button>
                })}
            </div>
            <div className = "rb-wrapper">
                <button className ="rainbow-button">After adding, move or resize the collection to view the addition.</button>
            </div>
            <NodeCollectionView store = {store as CollectionNodeStore}/>
            <ResizeIcon store={store}></ResizeIcon>
        </>
    )
}