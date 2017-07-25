<template>
			<div id="components-container">
			  	<Draggablelist id="contentEditor" 
			  	:init-list1.sync="list1" :init-list2.sync="list2" list1-title="Top 3 customers"
          list2-title="Other customers" displayedProperty="name"></Draggablelist>
          <el-col :span="4">
          <el-button type="primary" @click="updateChange">Update</el-button>
          </el-col>
          <el-col :span="4"><el-button type="primary" @click="reset">Reset</el-button>
          </el-col>
			</div>
      
</template>

<script>
import Draggablelist from '../../widgets/draggablelist'

export default {
  name: 'Draglist',
  components:{
  	'Draggablelist' : Draggablelist
  },
  created(){
    this.cloneLists();
  },
  data(){
  	return {
      list1Copy:[],
      list2Copy:[],
  		list1: [{
          name: "John"
        }, {
          name: "Joao"
        }, {
          name: "Jean"
        }],
      list2: [{
        name: "Juan"
      }, {
        name: "Edgard"
      }, {
        name: "Johnson"
      },
      {
        name: "Juan"
      }, {
        name: "Edgard"
      }, {
        name: "Johnson"
      },{
        name: "Juan"
      }, {
        name: "Edgard"
      }, {
        name: "Johnson"
      }]
  	}
  },
  methods:{
    cloneLists(){
      this.list1Copy = this.list1.slice();
      this.list2Copy = this.list2.slice();
    },
    updateChange(){
      // send change request to backend
      this.cloneLists();
    },
    reset(){
      this.list1 = this.list1Copy.slice();
      this.list2 = this.list2Copy.slice();
    }
  }
}
</script>

<style>

</style>
