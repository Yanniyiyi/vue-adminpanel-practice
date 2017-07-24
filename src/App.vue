<template>
  <div id="app">  
     <transition name="el-fade-in">  
       <router-view></router-view>
     </transition> 
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
html, body {margin:0;padding:0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

a{
  text-decoration: none;
}

</style>
