<template>
  <div id="app">
    <FolderViewer 
      :content="contenido"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ItemInFolder from './components/core/ItemInFolder';
import FolderViewer from "./components/FolderViewer.vue"

const contenido: Array<ItemInFolder> =[
  {name:"Archivo 1"},
  {name:"Archivo 2"},
  {name:"Archivo 4"},
  {name:"miguel.txt"},
  {name:"ok.svg"},
  {name:"Un nombre de un archivo muy grande version final.svg"},
  {name:"Carpeta1",type:"folder",childrens:[
    {name:"archivo2.txt"}
  ]},
  {name:"Carpeta 2",type:"folder",childrens:[
    {name:"carpeta3",type:"folder"},
    {name:"carpeta4",type:"folder",childrens:[
      {name:"archio.yuu"}
    ]}
  ]}
]

@Component({
  components: {
    FolderViewer
  },
})
export default class App extends Vue {
  private contenido: Array<ItemInFolder> = contenido
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
 
}
</style>
