type ItemInFolder = {
    name: string;
    id? : string;   //el id del elemento, por default es lo mismo que el nombre, 
                    //si el usuario lo define, puede poner name="Nombre/raro", id="nombre_raro"
    type?: "item"|"folder";
    props?: Object;
    icon?:  string;
    childrens?: Array<ItemInFolder> ;
    options?: ItemInFolderOptions;
    
}

type ItemInFolderOptions = {
    loadChildrens?:Function ; // funcion que carga los hijos, debe retornar un Array<ItemInFolder>
    forceLoadChildrenOnEnter?:boolean ;//define si al entrar a la carpeta se recargaran sus hijos, ideal si hay actualizaciones en el servidor que deban bajarse
}

interface DepthItemInFolder extends ItemInFolder {
    lazyLoad: boolean ;
    depthChildrens: MappedListOfFolder;
}

type MappedListOfFolder = {
    [key : string] :DepthItemInFolder
}

export default ItemInFolder

export {ItemInFolderOptions,DepthItemInFolder, MappedListOfFolder}