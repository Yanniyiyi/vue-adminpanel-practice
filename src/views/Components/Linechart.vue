<template>
	<el-row>
		<el-col :span="24">
			<div id="components-container">
			  	<ESchart :option="option"></ESchart>
			</div>
		</el-col>
	</el-row>
</template>

<script>
import ESchart from '../../widgets/chart'

export default {
  name: 'Linechart',
  components:{
  	'ESchart' : ESchart
  },
  created(){
    this.initOption();
  },
  data(){
    return {
      option: null,
    }
  },
  methods:{
    initOption(){
      this.option = {
            title: {
                text: 'linechar'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['Email marketing','Phone marketing','Video Advertise','Immediate visit','Search Engine']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'Email marketing',
                    type:'line',
                    stack: 'total',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'Phone marketing',
                    type:'line',
                    stack: 'total',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'Video Advertise',
                    type:'line',
                    stack: 'total',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'Immediate visit',
                    type:'line',
                    stack: 'total',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'Search Engine',
                    type:'line',
                    stack: 'total',
                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };

    }
  }
}
</script>

<style>

</style>
