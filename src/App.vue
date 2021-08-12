<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <FolderViewer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FolderViewer from "./components/FolderViewer.vue"

@Component({
  components: {
    FolderViewer
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
 
}
</style>
