<template>
    <div>
        <Navbar></Navbar>
        <button @click="getNumber">number</button>
        {{number}}
    <router-view></router-view>
    </div>
</template>

<script>
import Navbar from "./Navbar";
export default {
    name: "app",
    components:{
    Navbar
    },
    data(){
      return{
          number: [],
          numbers: ''
      }
    },
    mounted(){
        Echo.channel('player-joined')
        .listen('.Players', e => {
            console.log(e)
            this.number = e.number;
        })
    },
    methods: {
        getNumber(){
            axios.post('/api/players/index', {numbers : this.numbers})
            .then(()=> {})
            .catch(()=>{})
        }
    }
}
</script>

<style scoped>

</style>
