<template>
  <div id="app">
    <el-row  v-if="token">
      <el-col :span="4" id="sidebar-container">
         <Sidebar></Sidebar>
      </el-col>
      <el-col :span="20" id="content-container">
         <Navbar></Navbar>  
         <router-view></router-view> 
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import {mapGetters} from 'vuex';
export default {
  name: 'app',
  computed:{
    ...mapGetters([
      'token'
    ])
  },
  components:{
    'Sidebar':Sidebar,
    'Navbar':Navbar
  },
}
</script>

<style>
a{
  text-decoration: none;
}

.el-row, .el-row #sidebar-container, .el-row #ontent-container{
  height: 100vh;
}
</style>
