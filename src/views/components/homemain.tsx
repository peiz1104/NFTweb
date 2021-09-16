import {computed, defineComponent, reactive, ref} from 'vue'
import motion from '../../assets/home/motion.gif';
export default defineComponent({
    name:'HomeMain',
    setup(){
        const baseNum = ref(0.05)
        const inputVal = ref(1)
        const state = reactive({
            text:'You can mint up to 50 dragons each time',
            btnText:'Free Claim'
        })
        const total = computed(()=>parseInt(baseNum.value*inputVal.value*100+'')/100)
        const changeInput = (e: any)=>{
            inputVal.value = +e.target.value;
        }
        return ()=>(
            <>
            <div class="home-main-box" id='home'>
                <div class="main-box">
                    <div class="grid-container spacing-xs6">
                        <div class="flex-content">
                            <div class="inner-animation">
                                <div class="inner-shadow">
                                    <img src={motion} class="motion-img" alt="NFT" />
                                </div>
                            </div>
                            <div class="button-content">
                                <p class="countbox">Total Cost: {total.value} ETH</p>
                                <button disabled class="mint-box">Mint</button>
                                <div class="homeinput-box">
                                    <button onClick={()=>{ inputVal.value>1&&inputVal.value --}} class="add-mubtn" >-</button>
                                    <input type="number" max={50} min={1} value={inputVal.value} onChange={changeInput} class="numberinputshow" />
                                    <button onClick={()=>{inputVal.value<50&&inputVal.value ++}} class="add-mubtn" >+</button>
                                </div>
                                <p class="tipbox">{state.text}</p>
                            </div>
                            <button class="free-box" disabled>{state.btnText}</button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
})