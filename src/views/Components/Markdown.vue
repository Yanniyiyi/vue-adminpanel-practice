<template>
	<el-row>
		<el-col :span="24">
			<div id="components-container">
			  	<MarkdownEditor id="contentEditor" 
			  	 :height="300" :zIndex="20" v-model="content"></MarkdownEditor>
			</div>
		</el-col>
		<el-col :span="24">
			<el-button type="primary" @click="markdown2Html">Convert to html</el-button>
		</el-col>
		<el-col :span="24">
			<div v-html="html"></div>
		</el-col>
	</el-row>
  
</template>

<script>
import MarkdownEditor from '../../widgets/markdown'

export default {
  name: 'Markdown',
  components:{
  	'MarkdownEditor' : MarkdownEditor
  },
  data(){
  	return {
  		content: '',
  		html: ''
  	}
  },
  methods:{
  	markdown2Html(){
  		import('showdown').then(showdown => {
          const converter = new showdown.Converter();
          this.html = converter.makeHtml(this.content)
        });
  	}
  }
}
</script>

<style>

</style>
