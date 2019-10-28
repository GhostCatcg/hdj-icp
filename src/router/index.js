import Vue from 'vue';
import VueRouter from 'vue-router';


// 路由页面
import index from '../page/index/index.vue';
import join from '../page/join/index.vue';
import news from '../page/news/index.vue';
import about from '../page/about/index.vue';
import login from '../page/login/index.vue'
Vue.use(VueRouter);

// 设置路由路径

const routes = [
  { path: '/', name: 'index', component: index },
  { path: '/join', name: 'join', component: join },
  { path: '/news', name: 'news', component: news },
  { path: '/about', name: 'about', component: about },
  { path: '/login', name: 'login', component: login },
  { path: '*', redirect: '/' },
];


const router = new VueRouter({
  routes,
  mode: 'hash',
});


export default router