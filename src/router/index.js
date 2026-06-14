import Vue from 'vue'
import VueRouter from 'vue-router'
import Foo from '@/components/Foo.vue'
import Home from '@/components/Home.vue'
import Video from '@/components/Video.vue'
import Comment from '@/components/comment/Comment.vue'
// import Bar from '@/components/Bar.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'Home', component: Home, meta: { keepAlive: true } },
    { path: '/foo', name: 'foo', component: Foo },
    { path: 
        '/video/:id', 
        name: 'video', 
        component: Video, 
        props: true,
        children: [
            { 
                path: 'comment', 
                name: 'comment', 
                component: Comment,
                beforeEnter(to, from, next) {
                    console.log('beforeEnter comment', to, from)
                    next()
                }
            }
        ] 
    },
//   { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    mode: 'history',
    routes // (缩写) 相当于 routes: routes
})

router.beforeEach((to, from, next) => {
    if (to.name === 'Home') {
        console.log('to name is ---', to.name)
        console.log('from name is ---', from.name)
    }
    next()
})

export default router