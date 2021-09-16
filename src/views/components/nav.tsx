import { defineComponent, reactive, watch} from 'vue'
import Logo from '../../assets/home/duckLogo.svg';
export default defineComponent({
    name:'NavBox',
    props:{
        fixedStatus:{
            type:Boolean,
            default:false
        },
        viewStatus:{
            type:Object,
            default:{
                homeView:false,
                collView:false,
                roadView:false,
                teamView:false
            }
        }
    },
    setup(prop){
        const navList = reactive({
            activeIndex:11,
            list:[{id:11,name:'Home',eleId:'home'},{id:22,name:'Collections',eleId:'collection'},{id:33,name:'Roadmap',eleId:'roadmap'},{id:44,name:'Team',eleId:'team'}]
        })
        watch([()=>prop.viewStatus],([newval])=>{
            if(newval.homeView){
                navList.activeIndex = 11
            }else if(newval.collView){
                navList.activeIndex = 22
            }else if(newval.roadView){
                navList.activeIndex = 33
            }else if(newval.teamView){
                navList.activeIndex = 44
            }
        },{deep:true})
        const scrollIntoview = (item: { id: number; name: string; eleId: string; }) => {
            document.getElementById(item.eleId)?.scrollIntoView()
            navList.activeIndex = item.id
        }
        return ()=>(
         <header>
            <nav class="home-nav">
              <div class={prop.fixedStatus? "navcontent-box flexnav":"navcontent-box"}>
                <a class="logo"><img src={Logo} alt="logo" /></a>
                <ul class="nav-list">
                  {navList.list.map((item)=>(<li onClick={()=>{scrollIntoview(item)} } key={item.id} class="list-item">
                    <a href="javascript:void(0)" class={navList.activeIndex===item.id?'active':''}>{item.name}</a>
                  </li>))}
                </ul>
                <button class='connect-box'><span class="connect-text">Connect</span></button>
              </div>
            </nav>
          </header>
        )
    }
})