<template>
    {{count}}
<div><button class="btn" @click="$store.commit('INCREMENT')">Increment</button></div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "test",
    computed: {
        ...mapState({
            count:state => state.count
        })
    }
}
</script>

<style scoped>

</style>
