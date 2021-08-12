interface ItemInFolder{
    name: String,
    type?: "item"|"folder"
    props?: Object,
    icon?:  String,
    childrens?: Array<ItemInFolder> ,
    options?: ItemInFolderOptions
}

interface ItemInFolderOptions{
    loadChildrens?:Function  // funcion que carga los hijos, debe retornar un Array<ItemInFolder>
    forceLoadChildrenOnEnter?:boolean //define si al entrar a la carpeta se recargaran sus hijos, ideal si hay actualizaciones en el servidor que deban bajarse
}

export default ItemInFolder