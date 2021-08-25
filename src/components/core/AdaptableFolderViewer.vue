<template>
    <div class="folder-viewer-body" :class="viewAs" >
        <Item v-for="item in listItemsInCurrentDir" :key="item.id" 
        :depthItem="item" 
        :displayAs="viewAs"
        @click.native="clickInItem(item)"
        />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import ItemInFolder, { DepthItemInFolder, MappedListOfFolder } from './ItemInFolder';
import Navegation from './Navegation'
import Item from "./Item.vue"

@Component({
    components:{
        Item
    }
})
export default class AdaptableFolderViewer extends Vue {
  @Prop({default:function(){return []}}) private content!: Array<ItemInFolder>;
  @Prop({default:"/"}) public route!: string ;
  @Prop({default:"grid"}) public viewAs!: "grid"|"list"
  
  

  private navegation!:Navegation ;
  private itemsInCurrentDir : MappedListOfFolder = {};

  mounted(){
        this.init()
  }

  init():void{
        console.log(this.content)
        this.navegation = new Navegation(this.content);
        this.itemsInCurrentDir = this.navegation.currentDir==="root" 
        ? this.navegation.rootChildrens 
        : this.navegation.currentDir.depthChildrens;
        this.navegation.onChangeDir((currentPath:string)=>{
            this.onChangeDir()
        })
  }

  onChangeDir():void{
        console.log("algo cambio",this.navegation.currentDir);
        this.itemsInCurrentDir= this.navegation.currentDir==="root" 
        ? this.navegation.rootChildrens 
        : this.navegation.currentDir.depthChildrens;
  }

  clickInItem(item:DepthItemInFolder):void{
        console.log("se dio click",item.id)
        this.navegation.changeDir(item.id!)
  }

  get listItemsInCurrentDir():Array<DepthItemInFolder>{
        return Object.values(this.itemsInCurrentDir)
  }
}
</script>

<style lang="scss">
    .folder-viewer-body{
        position: absolute;
        top: 2.5em;
        left: 0px;
        width: 100%;
        height: calc(100% - 2.5em);
        cursor: pointer;
        display: grid;
        //background-color: var(--fv-primary-bg-color);
        overflow-y: auto;
        &.grid{
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
            //grid-template-rows: repeat(auto-fill, 100px);
            grid-gap: 5px;
            //padding: 1rem .5rem;
        }
    }
</style>