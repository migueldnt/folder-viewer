<template>
    <div class="folder-viewer-item" :class="displayAs" :title="depthItem.name">
        <div class="folder-viewer-item-icon" v-html="iconHtml">
            
        </div>
        <div class="folder-viewer-item-text">{{depthItem.name}}</div>

    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { DepthItemInFolder} from './ItemInFolder';

@Component({})
export default class Item extends Vue {
    @Prop({required:true}) public  depthItem! : DepthItemInFolder;
    @Prop({required:true}) public  displayAs! : "grid" | "list";


    private get iconHtml():string{
        if (this.depthItem.icon!==""){
            return this.depthItem.icon!;
        }

        return this.depthItem.type ==="folder" ? '<span class="fv-folder"></span>' : '<span class="fv-file"></span>';
     }

}
</script>

<style lang="scss">
.folder-viewer-item{
    display: flex;
    color: var(--fv-primary-text-color);
    &:hover{
        background-color: var(--fv-hover-bg-color);
    }

    &.grid{
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 80px;
        .folder-viewer-item-icon{
            >span{
                font-size: 1.3em;
            }
            >*{
                max-height: 1.3em !important;
                max-width: 1.3em !important;
            }
            
        }
        .folder-viewer-item-text{
            overflow: hidden;
            text-overflow: ellipsis;
            //max-height: 4.4em;
            
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }
}

</style>