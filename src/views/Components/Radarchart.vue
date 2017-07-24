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
          text: 'Radar chart'
      },
      tooltip: {},
      legend: {
          top: 20,
          itemWidth: 12,
          itemHeight: 12,
          data: ['Allocated Budget', 'Actual Spending'],
          textStyle: {
              color: '#fff'
          }
      },
      radar: {
          radius: '60%',
          splitNumber: 8,
          axisLine: {
              lineStyle: {
                  color: '#fff',
                  opacity: .2
              }
          },
          splitLine: {
              lineStyle: {
                  color: '#fff',
                  opacity: .2
              }
          },
          splitArea: {
              areaStyle: {
                  color: 'rgba(127,95,132,.3)',
                  opacity: 1,
                  shadowBlur: 45,
                  shadowColor: 'rgba(0,0,0,.5)',
                  shadowOffsetX: 0,
                  shadowOffsetY: 15,
              }
          },
          indicator: [{
              name: 'Sales',
              max: 6000
          }, {
              name: 'Administration',
              max: 16000
          }, {
              name: 'Information Techology',
              max: 30000
          }, {
              name: 'Customer Support',
              max: 35000
          }, {
              name: 'Development',
              max: 50000
          }, {
              name: 'Marketing',
              max: 25000
          }]
      },
      series: [{
          name: 'Budget vs spending',
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
              normal: {
                  shadowBlur: 13,
                  shadowColor: 'rgba(0,0,0,.2)',
                  shadowOffsetX: 0,
                  shadowOffsetY: 10,
                  opacity: 1
              }
          },
          data: [{
              value: [5000, 7000, 12000, 11000, 15000, 14000],
              name: 'Allocated Budget',
          }, {
              value: [2500, 12000, 8000, 8500, 12000, 12000],
              name: 'Actual Spending',
          }]
      }],
      color: ['#ef4b4c', '#b1eadb'],
      backgroundColor: {
          type: 'radial',
          x: 0.4,
          y: 0.4,
          r: 0.35,
          colorStops: [{
              offset: 0,
              color: '#895355' // 0% 
          }, {
              offset: .4,
              color: '#593640' // 100% 
          }, {
              offset: 1,
              color: '#39273d' // 100% 
          }],
          globalCoord: false //  false
      }
  };

    }
  }
}
</script>

<style>

</style>
