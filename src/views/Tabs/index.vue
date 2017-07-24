<template>
  <div >
	<el-tabs v-model="activeName" @tab-click="handleClick">
	    <el-tab-pane name="first" >
			<span slot="label"><i class="el-icon-document"></i>Manage delivery</span>
	    	 <keep-alive>
	    	 	<Tablecontent v-if="activeName === 'first'"></Tablecontent>
	    	 </keep-alive>
	    </el-tab-pane>
	    <el-tab-pane name="second" >
	    <span slot="label"><i class="el-icon-date"></i>Create activity</span>
	    	 <keep-alive>
	    	 	<Formcontent v-if="activeName === 'second'"></Formcontent>
	    	 </keep-alive>
	    </el-tab-pane>
 	 </el-tabs>
</el-tabs>

  </div>
</template>

<script>
import tablecontent from './tablecontent';
import formcontent from './formcontent';
export default {
  name: 'Tabs',
  components:{
  	'Tablecontent': tablecontent,
  	'Formcontent': formcontent
  },
  data() {
      return {
        activeName: 'first'
      };
   },
   methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style>

</style>
