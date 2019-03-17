<template>
<div>
  <!-- 一问一答 -->
 <el-col>
   <el-col>
  <el-row :span="8" v-for="(o, index) in talk1" :key="o" :offset="index > 0 ? talk1 : 0">
    <div class="question">
    <img v-bind:src="o.url" class="image profile">
   <el-card :body-style="{ padding: '0px' }" style="flex:4" >   
      <div  style="padding: 14px;">
        <span style="text-align:left; display: block;">{{o.name}}</span>
        <div >
           <time class="time">{{ o.date }}</time>
           <el-col type="text" class="card-content1 "> {{o.content}} </el-col>   
        </div>
      </div>
    </el-card>
    </div>
  </el-row>
</el-col>
  <el-button class="replay">共40条回复</el-button>
 </el-col>
  <!-- 一问一答 -->
  <el-col>
   <el-col>
  <el-row :span="8" v-for="(o, index) in talk1" :key="o" :offset="index > 0 ? talk1 : 0">
    <div class="question">
    <img v-bind:src="o.url" class="image profile">
   <el-card :body-style="{ padding: '0px' }" style="flex:4" >   
      <div  style="padding: 14px;">
        <span style="text-align:left; display: block;">{{o.name}}</span>
        <div >
           <time class="time">{{ o.date }}</time>
           <el-col type="text" class="card-content1 "> {{o.content}} </el-col>   
        </div>
      </div>
    </el-card>
    </div>
  </el-row>
</el-col>
  <el-button class="replay">共40条回复</el-button>
  </el-col>
   <!-- 分页 -->
    <el-col>
<div class="block">
  <el-pagination
    layout="prev, pager, next"
    :total="1000">
  </el-pagination>
</div>
 </el-col>
  </div>
  
 
</template>

<style>
  .time {
    font-size: 13px;
    color: #999;
    float:left;
  }
  .question{
    display: flex;
    flex-direction: row;
    height: 150px;
  }
  .image {
    display: block;
    flex:1;
  }
  .profile{
    width: 120px;
    height: 120px;
  }
   .card-content1{
    font-size: 15px;
    padding-right: 18px;
    float:left;
    margin: 5px;
    text-align:left;
    display: block;
  }
  .replay{
    background-color: red;
    float:right;
    border: none;
    color: white;
    margin-top: -18px;
    margin-bottom: 20px;
  }
</style>


<script>
export default {
    name:'community',
    data(){
      return {
       
       talk1:[
          {url:require('../assets/community/patient.jpg'),name:'病人',content:'各位老师好，我是一名在校生，自己患有慢性胃炎',date:'2019-01-03 14:00'},
          {url:require('../assets/community/doctor.jpg'),name:'医生',content:'你好，请服用治肚子疼的药',date:'2019-01-05 22:00'}
        ],
      };
    },
    methods: {
     
    }
  }
</script>
