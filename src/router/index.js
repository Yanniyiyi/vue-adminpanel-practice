import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index'
import Home from '@/views/Home'
import Permission from '@/views/Permission'
import NoPermission from '@/views/ErrorPages/NoPermission'
import NotFound from '@/views/ErrorPages/NotFound'


Vue.use(Router)


export const staticRouters = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
    {
      path: '/401',
      name: '401',
      component: NoPermission
    }
];

export const dynamicRouters = [
  {
    path: '/permission',
    component: Permission,
    redirect: '/permission/index',
    name: 'permission',
    icon: '',
    meta: { role: ['admin'] },
    children: [{ path: 'index', component: Home, name: 'permission_test', meta: { role: ['admin'] } }]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  routes: staticRouters
});
