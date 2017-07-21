function hasPermission(roles, route){
	if(route.meta && route.meta.role){
		return roles.some((role) => {
			route.meta.role.indexOf(role) >= 0
		});
	}
	return true;
}

export function filterDynamicRouters(dynamicRouters, roles){
	const allowedDynamicRouters = dynamicRouters.filter(route => {
		if(hasPermission(roles, route)){
			if(route.children && route.children.length) {
				route.children = filterDynamicRouters(route.children, roles);
			}
			return true;
		}
		return false;
	})
	return allowedDynamicRouters;
}