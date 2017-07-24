<template>
  <div >
	<el-table
    :data="tableData3"
    border
    fit
    width="100%"
   >
    <el-table-column
      prop="date"
      label="Date"
     >
    </el-table-column>
    <el-table-column label="Post info">
      <el-table-column
        prop="name"
        label="Name"
        width="120">
      </el-table-column>
      <el-table-column label="Address">
        <el-table-column
          prop="state"
          label="State"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="City"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="Address"
          width="300">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="Post"
          width="120">
        </el-table-column>
      </el-table-column>
    </el-table-column>
  </el-table>

  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: 'Hello',
          state: 'VIC',
          city: 'Carnegie',
          address: '19 Jersey Parade',
          zip: 3163
        }, {
          date: '2016-05-02',
          name: 'Hello',
          state: 'VIC',
          city: 'Carnegie',
          address: '19 Jersey Parade',
          zip: 3163
        }, {
          date: '2016-05-04',
          name: 'Hello',
          state: 'VIC',
          city: 'Carnegie',
          address: '19 Jersey Parade',
          zip: 3163
        }, {
          date: '2016-05-01',
          name: 'Hello',
          state: 'VIC',
          city: 'Carnegie',
          address: '19 Jersey Parade',
          zip: 3163
        }, {
          date: '2016-05-08',
          name: 'Hello',
          state: 'VIC',
          city: 'Carnegie',
          address: '19 Jersey Parade',
          zip: 3163
        }, {
          date: '2016-05-06',
          name: 'Hello',
          state: 'VIC',
          city: 'Carnegie',
          address: '19 Jersey Parade',
          zip: 3163
        }, {
          date: '2016-05-07',
          name: 'Hello',
          state: 'VIC',
          city: 'Carnegie',
          address: '19 Jersey Parade',
          zip: 3163
        }]
      }
    }
  }

</script>

<style>

</style>
