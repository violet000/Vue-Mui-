import Vue from 'vue'
import App from './App.vue'
import Home from '../src/components/Home.vue'
import router from './router'
import './plugins/element.js'
//导入mint-ui的css文件
import 'mint-ui/lib/style.min.css';
//导入mint-ui组件对象
import mintui from 'mint-ui'
//在Vue中全局使用mintui
Vue.use(mintui);
//注册mui的css样式
import '../statics/mui/css/mui.css';

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
