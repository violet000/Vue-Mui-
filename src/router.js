import Vue from 'vue'
import Router from 'vue-router'
import Home from '../src/components/Home.vue'
import Message from '../src/components/Message.vue'
import Contact from '../src/components/Contact.vue'
import Set from '../src/components/Set.vue'

Vue.use(Router)



export default new Router({
  linkActiveClass:'mui-active',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/message',
      name: 'message',
      component:Message
    },
    {
        path: '/Contact',
        name: 'contact',
        component:Contact
    },
    {
      path: '/Set',
      name: 'set',
      component:Set
    }
  ]
})
