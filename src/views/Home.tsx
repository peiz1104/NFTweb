import { computed, defineComponent, onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import NavBox from './components/nav';
import HomeMain from './components/homemain';
import CollectionMain from './components/collectionmain';
import RoadmapMain from './components/roadmapmain';
import TeamMain from './components/teammain';
import '../style/home.scss';
let timeId: NodeJS.Timeout
let inThrottle = false
let lastTime: number
export default defineComponent({
  name: 'App',
  setup() {
    const scrollHeight = ref(0)
    const viewStatus = reactive({homeView:false,collView:false,roadView:false,teamView:false});
    const funscroll = () => {
      if (!inThrottle) {
       scrollHeight.value = document.documentElement.scrollTop
        inThrottle = true;
        lastTime = Date.now();
    } else {
        clearTimeout(timeId);
        timeId = setTimeout(() => {
            if (Date.now() - lastTime >= 500) {
              scrollHeight.value = document.documentElement.scrollTop
              lastTime = Date.now();
              viewStatus.homeView = isInViewPort(document.getElementById('home'))
              viewStatus.collView = isInViewPort(document.getElementById('collection'))
              viewStatus.roadView = isInViewPort(document.getElementById('roadmap'))
              viewStatus.teamView = isInViewPort(document.getElementById('team'))
            }
        }, Math.max(500 - (Date.now() - lastTime), 0));
    }
    }
    function isInViewPort(element:HTMLElement|null) {
        if(!element) return false
        const offset = element.getBoundingClientRect();
        const offsetTop = offset.top;
        const offsetBottom = offset.bottom;
        const offsetHeight = offset.height;
        const status = offsetHeight + offsetTop > 10;
       return status &&offsetTop <= window.innerHeight && offsetBottom >= 0
    }
    const headFixed = computed(()=>scrollHeight.value>60)
    onMounted(()=>{
      window.addEventListener('scroll',funscroll,false);
    })
    onBeforeUnmount(()=>{
      window.removeEventListener('scroll',funscroll,false)
    })
    return () => (
      <>
        <NavBox fixedStatus={headFixed.value} viewStatus={{...viewStatus}}></NavBox>
        <main>
          <section>
            <HomeMain></HomeMain>
            <CollectionMain></CollectionMain>
            <RoadmapMain></RoadmapMain>
            <TeamMain></TeamMain>
          </section>
        </main>
      </>
    );
  }
});