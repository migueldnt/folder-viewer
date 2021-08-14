<template>
    <div class="folder-viewer">
        <Toolbar />
        <AdaptableFolderViewer :content="content" :route="route" />
    </div>
</template>


<script lang="ts">
import Component, {mixins} from 'vue-class-component'
import AdaptableFolderViewer from "./core/AdaptableFolderViewer.vue"
import Toolbar from "./core/Toolbar.vue"
import MainFolderViewer from "./core/MainFolderViewerMixin"

@Component({
    components:{
        AdaptableFolderViewer,Toolbar
    }
})
export default class FolderViewer extends mixins( MainFolderViewer) {}
</script>

<style lang="scss">
.folder-viewer{
    position: relative;
    //border: 1px solid transparent;
    min-height: 300px;
    border-radius: 5px;
    box-shadow: 0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.02);
}
</style>