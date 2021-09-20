import {defineComponent, reactive} from 'vue'
import dragon1 from '../../assets/home/dragon_team1.png';
import dragon2 from '../../assets/home/dragon_team2.png';
import dragon3 from '../../assets/home/dragon_team3.png';

export default defineComponent({
    name:'TeamMain',
    setup(){
        const state = reactive({
            title:'THE TEAM',
            des:'The Reborn Dragon Campsite is created by five friends who want to have a new life in the metaverse. All NFT lovers are welcome to join us and explore the metaverse together.',
            list:[{name:'Adam',src:dragon1},{name:'Eve',src:dragon2},{name:'Queen Chrissy',src: dragon3}],
            des1:'It is said that Adam and Eve left a blessing Necklace named Riviere in the blessland continent before they left. It has super dimensional power. Whoever obtains it can become the ruler of all dragon families. In 15533, a blue dragon named Chrissy found Reviere and unified the dragon family to establish the Carmen Dynasty.',
            des2:"3000 years later, the bored Chrissy chose to fly to the universe to find the trace of Adam and Eve. Before leaving, she chose to take out half of Riviere's power crystal to make hundreds of replica necklaces containing Riviere fragments, which were scattered anywhere on the mainland. She told all the dragon people that whoever can have a higher level replica necklace can rule the Dragon world. Then she spread her wings and rushed to the sky, disappeared into the universe and never appeared again. Since then, the dragon people have entered the era of "+'"big disaster fighting"'+" in which they fight against each other's Riviere fragments.",
            copy:'Reborn Dragon Campsite © 2021  All rights reserved'
        })
        const preventDefa= (event:DragEvent) => {
            event.preventDefault();
            return false;
        }
        return ()=>(
            <div id="team" class="team-box">
                <div class="main-content">
                    <div class="tiptop-box">
                        <h2 class="h2title">{state.title}</h2>
                        <p class="pdes">{state.des}</p>
                    </div>
                    <div class="team-desbox">
                        {state.list.map((item,index)=>(
                            <div class="des-item" key={index}>
                                <div class="item-title">{item.name}</div>
                                <div class="img-box">
                                    <img
                                     onDragstart={preventDefa}
                                     src={item.src} 
                                     alt="NFT" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <p class="pdes marginmax">{state.des1}</p>
                    <p class="pdes">{state.des2}</p>
                    <div class="splitline"></div>
                    <p class="footerboox">{state.copy}</p>
                </div>
            </div>
        )
    }
})