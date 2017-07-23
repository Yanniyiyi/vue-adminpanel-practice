<template>
  <div >
      this is homepage
      <button @click="changePermission"></button>
  </el-row>
   
    
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods:{
  	changePermission(){
  		this.$store.dispatch('ChangePermission');
  	}
  },
  computed:{
    key(){
      return this.$route.name !== undefined ? this.$route.name + new Date() : this.$route + new Date();
    }
  }
}
</script>

<style scoped>
#sidebar-container{
  height: 100%;
}

</style>
