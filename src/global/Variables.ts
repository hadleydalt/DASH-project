/* Store global constants, variables, and Enums */

export enum StoreType {
    Text, Video, Image, Iframe, Collection
}

export const constants = {
    nodeWidth: 300,
    nodeHeight: 300,
    collectionHeight: 222,
    collectionVerticalDisplacement: 5,
    collectionMaxCols: 3,
    parentFolderArray: [],
    storeTypes: [StoreType.Text, StoreType.Image, StoreType.Video, StoreType.Iframe, StoreType.Collection],
    storeTypesNames: ['Note', 'Image', 'Video', 'Website', 'Collection']
}

/* The amDisplaced variables gather the amount by which the canvas has been moved, if it is moved. They are later used to ensure that new 
nodes are always instantiated within a 500 pixel radius within the current screen. They are also used to make sure any linked node that 
is clicked on is sent to the 10, 10 position regardless of where the canvas has been moved. */

export let variables = {
    amDisplacedX: 0,
    amDisplacedY: 0
}