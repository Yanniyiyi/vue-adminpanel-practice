<template>
  <el-menu theme="light" mode="horizontal" @select="handleSelect">
	  <el-submenu index="1" style="float:right; margin-right:10px">
	    <template slot="title">{{ name }}</template>
	    <el-menu-item index="1-1">Logout</el-menu-item>
	  </el-submenu>
  </el-menu>
</template>
<script>
	import { mapGetters } from 'vuex';
	export default {
		methods:{
			handleSelect(key, keypath){
				
				if(key === '1-1'){
					 this.$store.dispatch('LogOut').then(() => {
			          	location.reload();// 
			         }).catch(error => {

			         });
				}
			}
		},
		computed:{
			...mapGetters([
				'name',
				'avatar'
			])
		}
	}
</script>
<style scoped>
	.el-menu {
		min-height: 100%;
	}

</style>