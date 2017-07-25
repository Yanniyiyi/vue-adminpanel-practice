<template>
  <div id="richtext-container">
    <textarea :id="id"></textarea>
  </div>
</template>

<script>

// Import TinyMCE
import tinymce from 'tinymce/tinymce';
// A theme is also required
import 'tinymce/themes/modern/theme';
// require.context(
//   'file-loader?name=[path][name].[ext]&context=node_modules/tinymce!tinymce/skins', 
//   true, 
//   /.*/
// );
import 'tinymce/skins/lightgray/skin.min.css'
import 'tinymce/skins/lightgray/content.min.css'
// Any plugins you want to use has to be imported
import 'tinymce/plugins/paste';
import 'tinymce/plugins/link';
import 'tinymce/plugins/table'; 
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/image';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/print';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/pagebreak';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/wordcount';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/visualchars';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/media';
import 'tinymce/plugins/save';
import 'tinymce/plugins/hr';
import 'tinymce/plugins/code';
import 'tinymce/plugins/contextmenu';
import 'tinymce/plugins/directionality';
import 'tinymce/plugins/template';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/textcolor';
import 'tinymce/plugins/textpattern';
import 'tinymce/plugins/imagetools';





export default {
  name: 'MarkdownEditor',
  props:{
  	value: String,
  	id: {
  		type: String,
  		default:'richtext-editor'
  	},
    toolbar: {
            type: Array,
            required: false,
            default() {
              return ['removeformat undo redo |  bullist numlist | outdent indent | forecolor | fullscreen code', 'bold italic blockquote | h2 p  media link | alignleft aligncenter alignright']
            }
    },
    menubar
  },
  mounted(){
    let _this = this;
  	tinymce.init({
        selector: '#' + this.id,
        selector: 'textarea',
        height: 500,
        theme: 'modern',
        plugins: [
          'advlist autolink lists link image charmap print preview hr anchor pagebreak',
          'searchreplace wordcount visualblocks visualchars code fullscreen',
          'insertdatetime media save table contextmenu directionality',
          'template paste textcolor  textpattern imagetools'
        ],
        toolbar1: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
        toolbar2: 'print preview media | forecolor backcolor emoticons',
        image_advtab: true,
        templates: [
          { title: 'Test template 1', content: 'Test 1' },
          { title: 'Test template 2', content: 'Test 2' }
        ],
        setup: function(editor) {
          editor.on('NodeChange Change KeyUp', function() {
           //   _this.value = e.target.getContent();
              _this.$emit('input', editor.getContent({ format: 'raw' }));
        });
    }
    });
  },
  data(){
  	return {
  		simplemde: null,
  	}
  },
  // watch:{
  // 	value(val) {
  // 		if( val === this.simplemde.value()){
  // 			return;
  // 		}
  // 		this.simplemde.value(val);
  // 	}
  // },
  destroyed() {
      this.simplemde = null;
  }
}
</script>

<style>

</style>
