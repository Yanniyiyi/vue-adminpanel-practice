<template>
    <el-row>
      <el-col :span="4" id="sidebar-container">
          <div id="sidebar">
             <Sidebar></Sidebar>
          </div>
           
      </el-col>
      <el-col :span="20" id="content-container">
         <Navbar></Navbar> 
         <div id="content">
            <transition name="el-fade-in"> 
              <router-view></router-view> 
            </transition>
         </div>
        
      </el-col>
    </el-row>
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

<style scoped>
  .el-row{
    height:100vh;
  }
  #sidebar-container{
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  #sidebar{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -17px; /* Increase/Decrease this value for cross-browser compatibility */
    overflow-y: scroll;
  }
  
  #content-container{
    height: 100vh;
    overflow-y: scroll;
  }

</style>
