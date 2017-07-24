<template>
	<el-row>
		<el-col :span="24">
			<div id="components-container">
			  	<ESchart :option="option" :id="id" v-if="option"></ESchart>
			</div>
		</el-col>
	</el-row>
</template>

<script>
import ESchart from '../../widgets/chart'

export default {
  props:['id'],
  name: 'Barchart',
  components:{
  	'ESchart' : ESchart
  },
  created(){
    setTimeout(()=>{
      this.initOption();
    },1000);
  },
  data(){
    return {
      option: null,
    }
  },
  methods:{
    initOption(){
    this.option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            
            type : 'shadow'       
        }
    },
    legend: {
        data: ['Immediate visit', 'Email marketing','Phone marketing','Video advertise','Search engine']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    },
    series: [
        {
            name: 'Immediate visit',
            type: 'bar',
            stack: 'total',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: 'Email marketing',
            type: 'bar',
            stack: 'total',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'Phone marketing',
            type: 'bar',
            stack: 'total',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'Video advertise',
            type: 'bar',
            stack: 'total',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
            name: 'Search engine',
            type: 'bar',
            stack: 'total',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320]
        }
    ]
};

    }
  }
}
</script>

<style>

</style>
