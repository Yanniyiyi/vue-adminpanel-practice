<template>
	
			<el-menu mode="vertical" theme="dark" :default-active="$route.path">
				<sidebar-item :routes='routes'></sidebar-item>
			</el-menu>

	
</template>
<script>
	import { mapGetters } from 'vuex';
	import SidebarItem from './SidebarItem';
	export default {
		components:{
			'SidebarItem': SidebarItem,
		},
		computed:{
			...mapGetters([
				'routes'
			])
		}
	}
</script>
<style scoped>
	.el-menu {
		min-height: 100%;
	}

</style>