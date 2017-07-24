<template>
  <div >
    <el-row>
       <el-col :span='12'>
        <ESchart height="50vh" :option="option1" v-if="option1" id="chart1"></ESchart>
      </el-col> 
      <el-col :span='12'>
        <ESchart height="50vh" :option="option2" v-if="option2" id="chart2"></ESchart>
      </el-col> 
    </el-row>
    <!-- <Linechart id="chart3"></Linechart> -->
  </div>

</template>

<script>
import ESchart from '../../widgets/chart'
import Linechart from '../Components/Linechart'
export default {
  name: 'Home',
  components:{
    'ESchart':ESchart,
    'Linechart': Linechart
  },
  created(){
    var id = setTimeout(()=>{
      this.init();
      clearTimeout(id);
    },1000);
  },
  data() {
      return {
        option1:null,
        option2:null
      }
  },
  methods:{
    getOption1(){
      return {
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
    },
    getOption2(){
      return {
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
    },
  	init(){
      // Generate data
          this.option1 = this.getOption1();
          this.option2 = this.getOption2();
    }

  },
  computed:{
    key(){
      return this.$route.name !== undefined ? this.$route.name + new Date() : this.$route + new Date();
    }
  }
}
</script>

<style scoped>
#sidebar-container{
  height: 100%;
}

</style>
