import { Component, Prop, Vue,  } from 'vue-property-decorator';
import ItemInFolder from './ItemInFolder';

@Component({
})
export default class MainFolderViewer extends Vue {
    @Prop() public content: Array<ItemInFolder> = [];
    @Prop() public defautlView: "grid"| "list" = "grid"
    @Prop() public showViewOptions: boolean= true

  
}