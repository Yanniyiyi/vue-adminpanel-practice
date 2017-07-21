<template>
  <div >
    this is homepage
    <button @click="changePermission"></button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods:{
  	changePermission(){
  		this.$store.dispatch('ChangePermission');
  	}
  }
}
</script>

<style>

</style>
