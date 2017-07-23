import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index'
import Home from '@/views/Homepage/Home'
import Permission from '@/views/Permission'
import NoPermission from '@/views/ErrorPages/NoPermission'
import NotFound from '@/views/ErrorPages/NotFound'
import Frame from '@/views/layout/Frame'


Vue.use(Router)


export const staticRouters = [
    {
      path: '/',
      noDropdown:true,
      redirect:'/index',
      component: Frame,
      children: [{ path: 'index', component: Home, name: 'Home' }]
    },
    {
      path: '/login',
      name: 'Login',
      hidden:true,
      noDropdown:true,
      component: Login
    },
    {
      path: '/404',
      name: '404',
      hidden:true,
      noDropdown:true,
      component: NotFound
    },
    {
      path: '/401',
      name: '401',
      hidden:true,
      noDropdown:true,
      component: NoPermission
    }
];

export const dynamicRouters = [
  {
    path: '/permission',
    component: Frame,
    redirect: '/permission/index',
    name: 'Permission',
    icon: '',
    meta: { role: ['admin'] },
    children: [{ path: 'index', component: Permission, name: 'Permission Test', meta: { role: ['admin'] } }]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  routes: staticRouters
});
