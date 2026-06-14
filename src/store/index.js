import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        loginStatus: false
    },
    mutations: {
        increment(state) {
            state.count++
        },
        login(state) {
            console.log('执行登录操作 ---')
            state.loginStatus = true
        },
        logout(state) {
            state.loginStatus = false
        }
    },
    actions: {
        delayIncrement(context) {
            setTimeout(() => {
                context.commit('increment')
            }, 1000)
        }
    }
})

export default store