import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'App',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup(prop) {
    const count = ref(0)
    const store = useStore()
    return () => (
      <>
        <h1>{prop.msg}</h1>
        <button onClick={() => {count.value ++}}>count is: { count.value }</button>
        <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
        <h1>{store.state.title}</h1>
      </>
    );
  },
});