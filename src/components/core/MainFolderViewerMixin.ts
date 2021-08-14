import { Prop, Vue,  } from 'vue-property-decorator';
import Component, {mixins} from 'vue-class-component'
import ItemInFolder from './ItemInFolder';

@Component({
})
export default class MainFolderViewer extends Vue {
    @Prop({default:function(){return []}}) public content!: Array<ItemInFolder> ;
    @Prop({default:"/"}) public route!: string ;
    @Prop({default:"grid"}) public defautlView!: "grid"| "list" 
    @Prop({default:true}) public showViewOptions!: boolean;

  
}