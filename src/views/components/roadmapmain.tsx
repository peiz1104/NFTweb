import { defineComponent, reactive} from 'vue'
import roadDragon from '../../assets/home/road_dragon.png';

export default defineComponent({
    name:'Roadmapmain',
    setup(){
        const state = reactive({
            title:'OUR  PROJECT  ROADMAP',
            des:'Well, reborn dragon come here for a chill time, but we still need a map just in case we get lost in the woods. Once we quack a sale target, we will start to prepare for exciting events for all  dragons on the campsite.',
            list:[{prect:'10%',desc:'Establish an official community and carry out random airdrop within the community'},{prect:'20%',desc:'Announce the proportion of rivises content of all sold dragon families except queen Chrissy, and the player with the highest content will receive 1ETH reward'},{prect:'40%',desc:'Announce the meta universe game plan, and all crypto dragon holders can socialize and interact on the platform and start the journey of territorial hegemony'},{prect:'70%',desc:'The original of crypto dragon will be auctioned, and the profits will be distributed to the holders according to the proportion of rivises'},{prect:'100%',desc:'Announce the proportion of rivesses content of all dragon families, and issue a new customized Dragon Master NFT to players with the highest total rivesses. He will become the first king of metauniverse games, and the holder will receive a 5eth reward from the publisher on December 31 of that year.'}]
        })
        return ()=>(
            <div id="roadmap" class="roadmap-box">
                <div class="main-box">
                    <div class="topbox">
                        <h2 class="bigtitle">{state.title}</h2>
                        <p class="desdragon">{state.des}</p>
                    </div>
                    <div class="maingrid spacxs6">
                        <div class="leftimg">
                            <img src={roadDragon} alt="dragon" class="dragonimg" />
                        </div>
                        <div class="rightdes">
                            {state.list.map((item,index)=>(<div class="listitem" key={index}>
                                <h3 class="precttip">{item.prect}</h3>
                                <p class="precdes">{item.desc}</p>
                            </div>))}
                        </div>
                    </div>
                    <div class="splitline"></div>
                </div>
            </div>
        )
    }
})