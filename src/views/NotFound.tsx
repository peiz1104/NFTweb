import {defineComponent, reactive} from 'vue'
import '../style/notfound.scss'
export default defineComponent({
    name:'NotFound',
    setup(){
     const state = reactive({text:'sorry notFound'})
     return ()=>(
         <>
         <div class="nofound-box">{state.text}</div>
         </>
     )
    }
})