<template>
  <div >
     <!-- 第一排 -->
   <el-col class="row_all1">
    <el-row :span="8" v-for="(o,index) in card_row" :key="index" :offset="index>0?card_row:0" class="card_col">
      <div style="width:100%">
   <el-card class="box-card"  shadow="hover" :body-style="{ padding: '10px' }"  >
  <div slot="header" class="card_title clearfix">
    <span style="color:white; flex:1;">{{ o.title }}</span>
    <el-button class="button_more1" type="text"> <b>more</b><i class="el-icon-caret-right"></i></el-button>
  </div>
  <el-row class="expert_intrd">
    <!-- 第一个专家 -->
  <el-col style="flex:1">
  <div class="card_content">
    <div class="video_push">
      <el-row class="expert_info">专家信息</el-row>
      <img v-bind:src="o.exp_img1" alt="" class="expert_image">
    </div>
    <div class="actv_list">
      <el-row style="margin-bottom:10px;">&nbsp; </el-row>  
       <div v-for="t in o.exp_info1" :key="t" class="text item">
        <i class="el-icon-caret-right"></i>
        {{t.title }}
         &nbsp; &nbsp;
         {{t.content }}
       </div>
    </div>
  </div> 
  </el-col>
  <!-- 第二个专家 -->
  <el-col style="flex:1">
  <div class="card_content">
    <div class="video_push">
      <el-row class="expert_info">专家信息</el-row>
      <img v-bind:src="o.exp_img2" alt="" class="expert_image">
    </div>
    <div class="actv_list">
      <el-row style="margin-bottom:10px;">&nbsp; </el-row>  
       <div v-for="t in o.exp_info2" :key="t" class="text item">
        <i class="el-icon-caret-right"></i>
        {{t.title }}
         &nbsp; &nbsp;
         {{t.content }}
       </div>
    </div>
  </div> 
  </el-col>
  </el-row>
</el-card>
</div>
    </el-row>
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
  .row_all1{
    display:flex;
    flex-direction:column; 
    margin-bottom:40px;
  }
  .button_more1{
    text-align: right; 
    padding: 2px 0;
    color:white;
    flex:1; 
  }

  .text {
    font-size: 14px;
    text-align: left;
    margin-left: 50px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .card_title{
    text-align: left;
    display: flex;
    flex-direction: row;
    /* background-color: red; */
  }
   .el-card__header{
    background-color: #CF3B1C;
    padding-bottom: 10px;
    padding-top: 10px;
  }
  .card_content{
    display: flex;
    flex-direction: row;
  }
  .video_push{
    flex: 1;
  }
  .actv_list{
    flex:2 ;
  }
  .expert_image{
    height:180px;
    width:150px; 
    margin-left:10px;
  }
  .el-button--text{
    margin-top: 0px;
  }
  .expert_intrd{
    display: flex;
    flex-direction: row;
  }
  .expert_info{
    margin-bottom:10px;
    margin-left:10px;
  }
</style>

<script>
export default {
    name:'expert',
    data(){
      return {
         card_row:[
          { 
            title:'中医专家',
            exp_img1:require('./../assets/1.jpg'),
            exp_img2:require('./../assets/b_img.jpg'),
            exp_info1:[
                {title:'姓名',content:'张璐'},
                {title:'级别',content:'副教授'},
                {title:'主治',content:'月经不调，食欲不振'},
                {title:'执业地点',content:'中医大省医院'},
             ],
            exp_info2:[
                {title:'姓名',content:'张璐'},
                {title:'级别',content:'副教授'},
                {title:'主治',content:'月经不调，食欲不振'},
                {title:'执业地点',content:'中医大省医院'},
             ]
          },
          { 
            title:'养生保健专家',
            exp_img1:require('./../assets/1.jpg'),
            exp_img2:require('./../assets/b_img.jpg'),
            exp_info1:[
                {title:'姓名',content:'张璐'},
                {title:'级别',content:'副教授'},
                {title:'主治',content:'月经不调，食欲不振'},
                {title:'执业地点',content:'中医大省医院'},
             ],
            exp_info2:[
                {title:'姓名',content:'张璐'},
                {title:'级别',content:'副教授'},
                {title:'主治',content:'月经不调，食欲不振'},
                {title:'执业地点',content:'中医大省医院'},
             ]
          },
          { 
            title:'心理专家',
            exp_img1:require('./../assets/1.jpg'),
            exp_img2:require('./../assets/b_img.jpg'),
            exp_info1:[
                {title:'姓名',content:'张璐'},
                {title:'级别',content:'副教授'},
                {title:'主治',content:'月经不调，食欲不振'},
                {title:'执业地点',content:'中医大省医院'},
             ],
            exp_info2:[
                {title:'姓名',content:'张璐'},
                {title:'级别',content:'副教授'},
                {title:'主治',content:'月经不调，食欲不振'},
                {title:'执业地点',content:'中医大省医院'},
             ]
          },
          
        ]
      };
    },
    methods: {
      
    }
  }
</script>

