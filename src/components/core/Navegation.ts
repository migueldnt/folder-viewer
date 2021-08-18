import ItemInFolder, {DepthItemInFolder, MappedListOfFolder} from "./ItemInFolder";

//const path = require('path')

export default class Navegation{
    private _content : MappedListOfFolder;
    private _route  = "/" ;
    private _route_items : Array<string> = [] ;
    private _current_dir : DepthItemInFolder| "root" = "root"

    protected listenerOnChangeDir!:CallbackOnChangeDir;

    constructor(content:Array<ItemInFolder>,initial_route = "/"){
        this._content = Navegation.parseContent(content);
        this.setArbitraryDir(initial_route);
    }

    onChangeDir(callback:CallbackOnChangeDir):void{
        this.listenerOnChangeDir = callback
    }

    public get route():string{
        return this._route
    }

    public set route(route:string){
        this._route = route;
    }

    public get currentDir():DepthItemInFolder | "root"{
        return this._current_dir
    }
    
    public get rootChildrens():MappedListOfFolder{
        return this._content
    }

    
    public changeDir(idItemAvailable:string):void{
        const actualListFolder:MappedListOfFolder = this._current_dir ==="root" 
            ? this._content 
            : this._current_dir.depthChildrens;
        if(idItemAvailable in actualListFolder && actualListFolder[idItemAvailable].type === "folder"){
            //
            this._current_dir = actualListFolder[idItemAvailable];
            this._route_items.push(actualListFolder[idItemAvailable].id!)
            this.route = "/"+this._route_items.join("/")
            this.listenerOnChangeDir(this.route)
        }
        
    }

    private setArbitraryDir(route:string){
        if(route === "/"){
            this._current_dir = "root";
            this._route = "/";
            this._route_items = []
            return
        }
        const pathItems:Array<string> = this.route.split("/");
        const route_items = pathItems.filter(pathitem=>pathitem!=='');
        const route_new_value = "/"+this._route_items.join("/")
        const matchItem = Navegation.getItemFromRoute(this._content,route_items)
        if(matchItem === "root" || matchItem.type ==="folder"){
            this._current_dir = matchItem;
            this._route_items = route_items;
            this._route = route_new_value;
        }
         
        //console.log(this._current_dir)
    }

    /**
     * Prapara el contenido y los rellena con los valores por default si es que el usuario no los lleno
     * @param content 
     * @returns 
     */
    public static parseContent(content:Array<ItemInFolder>,  ): MappedListOfFolder {
        //let content2:Array<DepthItemInFolder> = []
        const content2:MappedListOfFolder = {}
        const defaultItem: ItemInFolder = {
            name:"",
            id:"",
            type:"item",
            props: {},
            icon:"",
            childrens:[],
            options:{
                loadChildrens:undefined,
                forceLoadChildrenOnEnter:false
            }
        }

        content.forEach(itemInFolder=>{
            const parseditem:ItemInFolder = {...Object.assign(defaultItem,itemInFolder)}
            parseditem.id = parseditem.id==="" || parseditem.id == undefined ?parseditem.name:parseditem.id
            const islazy = typeof parseditem.options?.loadChildrens === "function"
            const childrens  = parseditem.childrens;
            parseditem.options = {...Object.assign(defaultItem.options,itemInFolder.options)}
            
            let newChildrens:MappedListOfFolder = {}
            if(childrens && childrens.length>0){
                 newChildrens = Navegation.parseContent(childrens)
            }
            const depthparseditem:DepthItemInFolder = { ...parseditem, lazyLoad: islazy, depthChildrens:newChildrens }
            const id:string =<string> depthparseditem.id
            content2[id] = depthparseditem 
        })
        return content2
    }

    public static getItemFromRoute(mappedListFolders:MappedListOfFolder,route:Array<string>):DepthItemInFolder | "root"{
        //console.log("se obtendra un elemento a partir de la ruta")
        //const pathItems:Array<string> = route.split("/");

        let actualItem:DepthItemInFolder | "root" = "root";
        let actualMappedList = {...mappedListFolders}
        route.forEach(path=>{
            actualItem = { ...actualMappedList[path]}
            actualMappedList = {...actualItem.depthChildrens}
        })
        return actualItem;
    }
    /**
     * A partir de la ruta en string se define el array de la ruta
     */
    private refreshRouteItems(){
        console.log("se refrescara los elementos del araay de la ruta");
        
    }

}

type CallbackOnChangeDir = (current_path:string) => void


