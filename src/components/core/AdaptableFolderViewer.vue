<template>
    <div class="folder-viewer-body" >
        <Item v-for="item in listItemsInCurrentDir" :key="item.id" 
        :depthItem="item" 
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
        top: 2.5rem;
        left: 0px;
        width: 100%;
        height: calc(100% - 2.5rem);
        padding: .5rem;
    }
</style>