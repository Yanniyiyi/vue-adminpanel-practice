<template>
	<div>
		<template v-for='item in routes'>
			<router-link v-if="!item.hidden&&item.noDropdown&&item.children.length>0" :to="item.path === '/' ? item.path + item.children[0].path : item.path + '/' + item.children[0].path">
				<el-menu-item :index="item.path === '/' ? item.path + item.children[0].path : item.path + '/' + item.children[0].path">
					<i :class="item.icon" v-if="item.icon"></i><span class="sidebar-item-name">{{item.children[0].name}}</span>
				</el-menu-item>
			</router-link>
			<el-submenu :index="item.name" v-if="!item.noDropdown
			&& !item.hidden ">
				<template slot="title">
					<i :class="item.icon" v-if="item.icon"></i><span class="sidebar-item-name">{{item.name}}  </span>
				</template>
				<template v-for="child in item.children" v-if="!child.hidden">
					<sidebar-item v-if="child.children &&child.children.length > 0" :routes="[child]"
					</sidebar-item>
					<router-link v-if="!child.children" :to="item.path + '/' + child.path">
						<el-menu-item :index="item.path + '/' + child.path">
							{{ child.name }}
						</el-menu-item>
					</router-link>	
				</template>
			</el-submenu>
		</template>
	</div>
</template>
<script>
	export default {
		name:'SidebarItem',
		props:{
			routes:{
				type: Array
			}
		}
	}
</script>
<style scoped>
	.sidebar-item-name{
		margin-left:10px;
	}
</style>