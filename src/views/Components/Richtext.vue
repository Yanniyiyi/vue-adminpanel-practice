<template>
			<div id="components-container">
			  	<RichtextEditor id="contentEditor" 
			  	v-model="content"></RichtextEditor>
         
        <div v-html="content"></div>
      
			</div>
  
</template>

<script>
import RichtextEditor from '../../widgets/richtext'

export default {
  name: 'Richtext',
  components:{
  	'RichtextEditor' : RichtextEditor
  },
  data(){
  	return {
  		content: '',
  		html: ''
  	}
  },
  methods:{
  }
}
</script>

<style>

</style>
