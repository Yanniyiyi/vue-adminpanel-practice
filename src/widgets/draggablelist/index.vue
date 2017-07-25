<template>
  <el-row>
    <el-col :span="12" >
      
       <div >
        <span style="line-height: 36px;">{{list1Title}}</span>
       </div>
       <draggable v-model="list1" :options="dragOptions" class="dragArea" @end="updateList" > 
          
            <div v-for="element in list1" :key="element.name" class="list-item"> 
              <i class="fa fa-thumb-tack" aria-hidden="true"></i>
              {{element[displayedProperty]}}
            </div> 
         
      </draggable>

    </el-col>

     <el-col :span="12" >
    
       <div>
        <span style="line-height: 36px;">{{list2Title}}</span>
       </div>
        
      <draggable v-model="list2" :options="dragOptions" class="dragArea"  @end="updateList"> 
            
            <div  v-for="element in list2" :key="element.name" class="list-item"> 
              <i class="fa fa-thumb-tack" aria-hidden="true"></i>
              {{element[displayedProperty]}}
            </div> 
      </draggable>
  
    </el-col>
  </el-row>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'draggablelist',
  components: {
    draggable,
  },
  props:{
    displayedProperty:{
        type:String,
        default:'',
        required:true
    },
    list1Title:{
      type:String,
      default:''
    },
    list2Title:{
      type:String,
      deault:''
    },
    initList1:{
      type:Array,
      default:[]
    },
    initList2:{
      type:Array,
      default:[]
    }
  },
  watch:{
    initList1(val){
      this.list1 = this.initList1;
    },
    initList2(val){
      this.list2 = this.initList2;
    },
    isDragging (newValue) {
      if (newValue){
        this.delayedDragging= true
        return
      }
      this.$nextTick( () =>{
           this.delayedDragging =false
      })
    }
  },
  data () {
    return {
      editable:true,
      isDragging: false,
      delayedDragging:false,
      list1:this.initList1,
      list2:this.initList2
    }
  },
  methods:{
    orderList () {
      this.list = this.list.sort((one,two) =>{return one.order-two.order; })
    },
    updateList(){
       this.$emit('update:initList1', this.list1.slice());
        this.$emit('update:initList2', this.list2.slice());
    }
  },
  computed: {
    dragOptions () {
      return  {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost'
      };
    }
  }
}
</script>

<style scoped>
.list-item {
    font-size: 14px;
    padding: 18px 0;
    border-radius: 5px;
    border: 1px solid #000;
    margin-bottom: 10px;
    padding-left: 10px;
  }

.list-item:hover{
  cursor: pointer;
}

.dragArea {
      margin-top: 15px;
      min-height: 50px;
      padding-bottom: 30px;
}


</style>