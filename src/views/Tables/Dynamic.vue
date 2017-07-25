<template>
  <div>
    <el-button type="primary" @click="dialogFormVisible = true" style="margin-bottom:10px">Add Company</el-button>
    <el-dialog title="Company" :visible.sync="dialogFormVisible">
      <el-form :model="company">
        <el-form-item label="Company Name" >
          <el-input v-model="company.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="State">
          <el-select v-model="company.state" placeholder="Please select state">
            <el-option label="VIC" value="VIC"></el-option>
            <el-option label="NSW" value="NSW"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="City">
          <el-input v-model="company.city" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Address">
          <el-input v-model="company.address" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Post">
          <el-input v-model="company.post" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handelCreateCancel">Cancel</el-button>
        <el-button type="primary" @click="handelCreateConfrim">Create</el-button>
      </div>
    </el-dialog>
    <el-table
    :data="tableData3"
    border
    fit  
    >
    </el-table-column>
    <el-table-column
      prop="name"
      label="name"
      >
    </el-table-column>
    <el-table-column
      prop="state"
      label="State"
      >
    </el-table-column>
    <el-table-column
      prop="city"
      label="City"
     >
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address"
      width="300">
    </el-table-column>
    <el-table-column
      prop="post"
      label="Post"
     >
    </el-table-column>
  </el-table>
  </div>
  
</template>

<script>
import { deepClone } from '../../utils'
  export default {
    data() {
      return {
        dialogFormVisible: false,
        company:{
          name:'',
          state:'',
          city:'',
          address:'',
          post:''
        },
        tableData3: [{
          name: 'Company',
          state: 'VIC',
          city: 'Carnegie',
          address: '19 Jersey Parade',
          post: 3163
        }, {
          name: 'Company',
          state: 'VIC',
          city: 'Carnegie',
          address: '19 Jersey Parade',
          post: 3163
        }, {
          name: 'Company',
          state: 'VIC',
          city: 'Carnegie',
          address: '19 Jersey Parade',
          post: 3163
        }, {
          name: 'Company',
          state: 'VIC',
          city: 'Carnegie',
          address: '19 Jersey Parade',
          post: 3163
        }, {
          name: 'Company',
          state: 'VIC',
          city: 'Carnegie',
          address: '19 Jersey Parade',
          post: 3163
        }, {
          name: 'Company',
          state: 'VIC',
          city: 'Carnegie',
          address: '19 Jersey Parade',
          post: 3163
        }, {
          name: 'Company',
          state: 'VIC',
          city: 'Carnegie',
          address: '19 Jersey Parade',
          post: 3163
        }]
      }
    },
    methods:{
      clearPreviousInput(){
        for(let key in this.company){
          this.company[key] = '';
        }
      },
      hideCreateDialog(){
        this.clearPreviousInput();
        this.dialogFormVisible = false;
      },
      handelCreateCancel(){
        this.hideCreateDialog();
        this.$message({
              type: 'info',
              message: 'Canceled'
        }); 
      },
      handelCreateConfrim(){
        this.createCompany().then( (response) => {
            this.hideCreateDialog();
            this.$message({
              type: 'success',
              message: 'Company created'
            }); 
        }).catch( (error) => {
           this.$message({
              type: 'success',
              message: error.message
            }); 
        });
      },
      createCompany(){
        return new Promise((resolve,reject) => {
          this.tableData3.splice(0,0,deepClone(this.company));
          resolve();
        });
      }
    }
  }
</script>