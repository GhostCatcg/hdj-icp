import Vue from 'vue'
import VueRouter from 'vue-router'


// 路由页面
import index from '../page/index/index'




Vue.use(VueRouter)


const routes = [
    // 设置路由路径
    { path: '/', name: 'index', component: index },
    { path: '*', redirect: '/' },
]

const router = new VueRouter({
    routes,
    mode: 'hash'
})


export default router