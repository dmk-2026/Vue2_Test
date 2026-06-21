import Vue from 'vue'
import Vuex from 'vuex'
import delay from './delay'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        delay
    },
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
        },
        delayCheck(state) {
            setTimeout(() => {
                console.log('执行延迟检查操作 ---')
                state.delayCheckStatus = false
            }, 1000)
        }
    },
    actions: {
        delayCheck(context) {
            setTimeout(() => {
                context.commit('delayCheck')
            }, 1000)
        }
    }
})

export default store