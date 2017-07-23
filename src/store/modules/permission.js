import {staticRouters, dynamicRouters } from '../../router';
import {filterDynamicRouters} from '../../utils/dynamicRouterFilter';
import {deepClone} from '../../utils/index';

const permission = {
	state:{
		// for debug
		allRouters: staticRouters,
		dynamicRouters:''
	},
	mutations:{
		GENERATE_DYNAMIC_ROUTERS(state,allowedRouters){
			state.dynamicRouters = deepClone(allowedRouters);
			state.allRouters = deepClone(staticRouters.concat(allowedRouters));
		}	
	},
	actions:{
		GenerateDynamicRoutes({commit} , data){
			return new Promise((resolve, reject) => {
				let roles = data.roles;
				let allowedRouters = [];
				if(roles.indexOf('admin') >= 0){
					allowedRouters = dynamicRouters;
					// console.log(allowedRouters);
				} else {
					allowedRouters = filterDynamicRouters(dynamicRouters, roles);
				}
				commit('GENERATE_DYNAMIC_ROUTERS',allowedRouters);
				resolve();
			}).catch((error) => {

			});	
		}
	}
}

export default permission;