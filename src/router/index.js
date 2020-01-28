import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Province from "../components/province";
import City from "../components/city";

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: 'Province',
      children:[
        {
          path:'Province',
          name:'Province',
          component:Province,
        },
        {
          path:'City',
          name:'City',
          component:City,
        },
      ]
    }
  ]
})
export default router
