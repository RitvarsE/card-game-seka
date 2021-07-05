require('./bootstrap');

import {createApp} from "vue";
import {createStore} from 'vuex'
import router from './router'
const store = new createStore({
    state: {
        count: 0,
    },
    mutations: {
        INCREMENT(state) {
            state.count++
        }
    },
    actions: {}
})

import App from "./components/App"

const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')
