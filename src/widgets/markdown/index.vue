<template>
  <div id="makrdonw-container">
    <textarea :id="id"></textarea>
  </div>
</template>

<script>
import 'simplemde/dist/simplemde.min.css';
import SimpleMDE from 'simplemde';
export default {
  name: 'MarkdownEditor',
  props:{
  	value: String,
  	id: {
  		type: String,
  		default:'markdown-editor'
  	},
  	autofocus: {
  		type: Boolean,
  		default: false
  	},
  	spellChecker: {
  		type: Boolean,
  		default: false
  	},
  	placeholder: {
  		type: String,
  		default: ''
  	},
  	height:{
  		type: Number,
  		default: 50
  	},
  	zIndex: {
  		type: Number,
  		default: 10
  	},
  	toolbar: {
  		type: Array
  	}
  },
  mounted(){
  	this.simplemde = new SimpleMDE({
  		element: document.getElementById(this.id),
  		autofocus: this.autofocus,
  		toolbar: this.toolbar,
  		spellChecker: this.spellChecker,
  		blockStyles: {
			bold: "__",
			italic: "_"
		},
  		insertTexts: {
			horizontalRule: ["", "\n\n-----\n\n"],
			image: ["![](http://", ")"],
			link: ["[", "](http://)"],
			table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
		},
		placeholder: this.placeholder
  	});
  	if (this.value) {
        this.simplemde.value(this.value);
    }
    this.simplemde.codemirror.on('change', () => {
        this.$emit('input', this.simplemde.value());
    });
  },
  data(){
  	return {
  		simplemde: null,
  	}
  },
  watch:{
  	value(val) {
  		if( val === this.simplemde.value()){
  			return;
  		}
  		this.simplemde.value(val);
  	}
  },
  destroyed() {
      this.simplemde = null;
  }
}
</script>

<style>

</style>
