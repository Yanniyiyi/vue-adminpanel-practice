import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index'
import Home from '@/views/Homepage/Home'
import Permission from '@/views/Permission'
import NoPermission from '@/views/ErrorPages/NoPermission'
import NotFound from '@/views/ErrorPages/NotFound'
import Frame from '@/views/layout/Frame'

// import components
import Markdown from '@/views/Components/Markdown'
import Linechart from '@/views/Components/Linechart'
import Barchart from '@/views/Components/Barchart'
import Radarchart from '@/views/Components/Radarchart'


// import tabs
import Tabs from '@/views/Tabs'

// import tables
import inlineedit from '@/views/Tables/inlineedit'



Vue.use(Router)


export const staticRouters = [
    {
      path: '/',
      noDropdown:true,
      redirect:'/index',
      component: Frame,
      icon:'fa fa-home fa-lg',
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
    icon: 'fa fa-unlock fa-lg',
    meta: { role: ['admin'] },
    noDropdown: false,
    children: [{ path: 'index', component: Permission, name: 'Permission Test', meta: { role: ['admin'] } }]
  },
  {
    path: '/components',
    component: Frame,
    name: 'Components',
    icon: 'fa fa-cogs fa-lg',
    meta: { role: ['admin'] },
    children: [{ path: 'markdown', component: Markdown, name: 'Markdown Editor' },       
    ]
    },
    {
    path: '/tables',
    component: Frame,
    name: 'Tables',
    icon: 'fa fa-table fa-lg',
    meta: { role: ['admin'] },
    children: [{ path: 'inlineedit', component: inlineedit, name: 'Inline edit' },       
    ]
    },
    {
    path: '/charts',
    component: Frame,
    name: 'Charts',
    icon: 'fa fa-bar-chart fa-lg',
    meta: { role: ['admin'] },
    children: [{ path: 'linechart', component: Linechart, name: 'Line chart' },
               { path: 'barchart', component: Barchart, name: 'Bar chart' },
               { path: 'radarchart', component: Radarchart, name: 'Radar chart' },
               
    ]
    },
    {
    path: '/tabs',
    component: Frame,
    icon: 'fa fa-window-restore fa-lg',
    redirect:'index',
    noDropdown:true,
    meta: { role: ['admin'] },
    children: [{ path: 'index', component: Tabs, name: 'Tabs' }]
    },
    {
    path: '/errorpages',
    component: Frame,
    name: 'Error Pages',
    icon: 'fa fa-exclamation-triangle fa-lg',
    meta: { role: ['admin'] },
    children: [{ path: '401', component: NoPermission, name: 'NoPermission 401' },
               { path: '404', component: NotFound, name: 'NotFound 404' }
    ]
    },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  routes: staticRouters
});
