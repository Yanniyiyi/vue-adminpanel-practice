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


function hasPermission(roles, allowedRoles){
	console.log(roles);
	console.log(allowedRoles);

	if(roles.indexOf('admin') >= 0){
		return true;
	}

	if(!allowedRoles){
		return true;
	}

	if(roles.some((role) => allowedRoles.indexOf(role) >= 0)){
		return true;
	}

	return false;
}

// config router
router.beforeEach((to, from, next) => {
	NProgress.start();
	if(store.getters.token){
		// already logedin then redirect to home page
		if(to.path === '/login'){
			next({path: '/'});
		} else {
			// user info hasn't been fetched
			if(store.getters.roles.length === 0){
				// get user info
				store.dispatch('GetInfo').then((response) => {
					// based on user info, generate dynamic routers
					store.dispatch('GenerateDynamicRoutes', response).then((response) => {

							router.addRoutes(store.getters.dynamicRouters);
							next({ ...to });
					}).cathc((error) => {

					});
				}).catch((error) => {
				
				});
			} else {
				console.log('else called');
				if(hasPermission(store.getters.roles, to.meta.role)){
					console.log('permission check passed');
					next();
				} else{
					next({path: '/401', query:{ noGoBack: true } });
				}
			} 
		}
	}else {
		if(whiteList.indexOf(to.path) !== -1){
			next();
		}else{
			next({path:'/login'});
		}
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
