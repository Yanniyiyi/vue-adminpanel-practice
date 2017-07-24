<template>
  <el-table
    :data="tableData"
    border
    fit
    style="width: 100%">
    <el-table-column
      label="Date"
     >
      <template scope="scope">
        <el-icon name="time"></el-icon>
        <span style="margin-left: 10px" v-show="!scope.row.editing">{{ scope.row.date }}</span>
        <el-date-picker
	      v-model="scope.row.date"
	      format="yyyy-MM-dd"
	      align="right"
	      type="date"
	      placeholder="Select date"
	      :picker-options="pickerOptions1"
	      v-show="scope.row.editing">
    	</el-date-picker>
      </template>
    </el-table-column>
    <el-table-column
      label="Name"
     >
      <template scope="scope">
          <p v-show="!scope.row.editing">{{ scope.row.name }}</p>
		  <el-input v-model="scope.row.name"  v-show="scope.row.editing"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      label="Address"
      >
      <template scope="scope">
          <p v-show="!scope.row.editing">{{ scope.row.address }}</p>
		  <el-input v-model="scope.row.address"  v-show="scope.row.editing"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="Options">
      <template scope="scope">
        
         <el-button
          size="small"
          @click="handleSave(scope.$index, scope.row)"
          type="info"
          v-show="scope.row.editing">Save</el-button> 
           <el-button
          size="small"
          @click="handleCancelEdit(scope.$index, scope.row)" v-show="scope.row.editing">Cancel Edit</el-button>
          <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)" v-show="!scope.row.editing">Edit</el-button>
                 <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)" v-show="!scope.row.editing">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  import {deepClone} from '../../utils' 
  export default {
    data() {
      return {
      	editingItemCopies:[],
        tableData: [{

          date: '2016-05-02',
          id: '1',
          name: 'Test',
          address: '19 Jersey Parade',
          editing:false
        }, {
          date: '2016-05-04',
          id: '2',
          name: 'Test',
          address: '19 Jersey Parade',
          editing:false
        }, {
          date: '2016-05-01',
          id: '3',
          name: 'Test',
          address: '19 Jersey Parade',
          editing:false
        }, {
          date: '2016-05-03',
          id: '4',
          name: 'Test',
          address: '19 Jersey Parade',
          editing:false
        }],
        pickerOptions1: {
          shortcuts: [{
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: 'One week ago',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
      }
    },
    methods: {
      handleEdit(index, row) {
      	this.tableData[index].editing = true;
      	this.editingItemCopies[index] = deepClone(this.tableData[index]);
      },
      handleSave(index, row) {
		this.editingItemCopies.slice(index,1);
		if(typeof this.tableData[index].date != 'string'){
			let date = this.tableData[index].date;
	      	let month = date.getMonth() + 1;
	      	let strMonth = month > 9? month + '' : '0'+ month;
	      	let day = date.getDate();
	      	let strDay = day > 9? day + '' : '0'+ day;
	      	let strDate = date.getFullYear() + "-" + strMonth + "-" + strDay;
	      	this.tableData[index].date = strDate;
		}
      	this.tableData[index].editing = false;
      	this.$message({
            type: 'success',
            message: 'Success!'
        });
      },
      handleCancelEdit(index, row){
      	this.tableData.splice(index,1,this.editingItemCopies[index]);
      	this.editingItemCopies[index] = null;
      	this.tableData[index].editing = false;
      	this.$message({
            type: 'info',
            message: 'Cancel'
          }); 
      },
      handleDelete(index, row){
      	this.$confirm('Are you sure delete this row', 'Confirm', {
          confirmButtonText: 'Yes',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          this.tableData.splice(index,1);	
          this.$message({
            type: 'success',
            message: 'Success!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Cancel'
          });          
        });
      	
      } 
    }
  }
</script>