import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import main from '@/components/main'
import community from '@/components/community'
import home from '@/components/home'
import business from '@/components/business'
import expert from '@/components/expert'
import user from '@/components/user'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      redirect: 'main', //重定向 第一次就进入主页
      children:[
        { path:'/main',component:main,name:'主页'},
        { path:'/community',component:community,name:'社区'},
        { path:'/business',component:business,name:'商家'},
        { path:'/expert',component:expert,name:'专家'},
        { path:'/user',component:user,name:'用户'},
      ]
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
  ]
});

