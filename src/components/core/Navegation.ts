import ItemInFolder, {DepthItemInFolder, ItemInFolderOptions} from "./ItemInFolder";

//const path = require('path')

class Navegation{
    private _content : Array<DepthItemInFolder> = [];
    private _route : String ;
    private _route_items : Array<String> = [] ;
    private _current_dir : DepthItemInFolder| "root" = "root"

    protected listenerOnChangeDir!:Function ;

    constructor(content:Array<ItemInFolder>,initial_route:String = "/"){
        this._content = Navegation.parseContent(content);
        this._route = initial_route;
        this.setInitialDir();
    }

    onChangeDir(callback:Function=()=>{}){
        this.listenerOnChangeDir = callback
    }

    public get route():String{
        return this._route
    }

    public set route(route:String){
        this._route = route;
    }

    public changeDir(){

    }

    private setInitialDir(){
        if(this.route === "/"){
            this._current_dir = "root";
            return
        }
        let pathItems:Array<String> = this.route.split("/");
        actual
        pathItems.forEach(folder=>{
            this._content.
        })
    }

    /**
     * Prapara el contenido y los rellena con los valores por default si es que el usuario no los lleno
     * @param content 
     * @returns 
     */
    public static parseContent(content:Array<ItemInFolder> ): any {
        //let content2:Array<DepthItemInFolder> = []
        let content2:any = {}
        let defaultItem: ItemInFolder = {
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
            let parseditem:ItemInFolder = {...Object.assign(defaultItem,itemInFolder)}
            parseditem.id = parseditem.id==="" || parseditem.id == undefined ?parseditem.name:parseditem.id
            let islazy = typeof parseditem.options?.loadChildrens === "function"
            let childrens  = parseditem.childrens;
            parseditem.options = {...Object.assign(defaultItem.options,itemInFolder.options)}
            
            let newChildrens:any = {}
            if(childrens && childrens.length>0){
                 newChildrens = Navegation.parseContent(childrens)
            }
            let depthparseditem:DepthItemInFolder = { ...parseditem, lazyLoad: islazy, depthChildrens:newChildrens }
            let id:string =<string> depthparseditem.id
            content2[id] = depthparseditem 
        })
        return content2
    }

    /**
     * A partir de la ruta en string se define el array de la ruta
     */
    private refreshRouteItems(){

    }

}