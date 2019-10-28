import Vue from 'vue';

import router from './router'


import App from './App.vue';


import icpHeader from "./components/public/header/index";
import icpFooter from "./components/public/footer/footer";



// 引入全局组件
Vue.component('icpHeader',icpHeader)
Vue.component('icpFooter',icpFooter)






Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
