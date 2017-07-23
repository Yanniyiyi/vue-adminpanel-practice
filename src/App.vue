<template>
  <div id="app">    
       <router-view></router-view>
  </div> 
</template>

<script>
import Sidebar from './views/layout/Sidebar';
import Navbar from './views/layout/Navbar';
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
html{
  height: 100%;
}
body{
  margin:0;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a{
  text-decoration: none;
}

.el-row, .el-row #sidebar-container, .el-row #ontent-container{
  height: 100vh;
}
</style>
