<template>
    <div>
        soy  [{{depthItem.name}}]

    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { DepthItemInFolder} from './ItemInFolder';

@Component({})
export default class Item extends Vue {
    @Prop({required:true}) public  depthItem! : DepthItemInFolder;


}
</script>