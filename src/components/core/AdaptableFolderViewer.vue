<template>
    <div class="folder-viewer-body" >
        Aqui va el grid o lista segun esten los datos
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ItemInFolder from './ItemInFolder';

@Component
export default class AdaptableFolderViewer extends Vue {
  @Prop({default:function(){return []}}) private content!: Array<ItemInFolder>;
  @Prop({default:"/"}) public route!: string ;
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