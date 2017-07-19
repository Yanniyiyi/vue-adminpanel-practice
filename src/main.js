// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import NProgress from 'nprogress'; // Progress
import 'nprogress/nprogress.css';// Progress css


// import Element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI);

import store from './store';

Vue.config.productionTip = false;

const whiteList = ['/login'];
// config router
router.beforeEach((to, from, next) => {
	NProgress.start();
	if(store.getters.token){
		if(to.path === '/login'){
			next({path: '/'});
		}
		next();
	}
	else if(whiteList.indexOf(to.path) !== -1){
		next();
	}
	else{
		next({path:'/login'});
	}
	

});

router.afterEach(() => {
	NProgress.done();
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
