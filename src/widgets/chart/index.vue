<template>
	<div :id="id" :style="{height:height,width:width}"></div>
</template>
<script>
	import echarts from 'echarts';
	export default {
		name: 'ESLineChart',
		props:{
			id: {
				type: String,
				default: 'es-chart'
			},
			width: {
				 type: String,
				 default: '100%'
			},
			height: {
				 type: String,
				 default: '90vh'
			},
			option: {
				required: true
			}
   		},
   		watch:{
   			'option':'redraw' // it seems that it doesn't work
   		},
		mounted(){
			this.initChart();
		},
		data(){
			return {
				chart:null
			}
		},
		beforeDestroy() {
	      if (!this.chart) {
	        return
	      }
	      this.chart.dispose();
	      this.chart = null;
	      console.log('before destory called');
	    },
		methods:{
			initChart(){
				console.log('initcalled');
				this.chart = echarts.init(document.getElementById(this.id));
				// Generate data
				this.chart.setOption(this.option);
			},
			redraw(){
				if(this.chart){
					this.chart.setOption(this.option);
				}
			}
		}
	}
</script>