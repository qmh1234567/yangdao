<template> 
<div>
  <!-- 第一排 -->
   <el-row class="row_all">
    <el-col :span="8" v-for="(o,index) in card_row" :key="index" :offset="index>0?card_row:0" class="card_col">
   <el-card class="box-card1"  shadow="hover" :body-style="{ padding: '10px' }"  >
  <div slot="header" class="card_title clearfix">
    <span style="color:white; flex:1;">{{ o.title }}</span>
    <el-button class="button_more1" type="text"> <b>more</b><i class="el-icon-caret-right"></i></el-button>
  </div>
  <div class="card_content">
    <div class="video_push">
      <el-row style="margin-bottom:10px; margin-left:-30px;">视频推送</el-row>
      <img v-bind:src="o.vd_img1" alt="" class="video_image">
      <img v-bind:src="o.vd_img2" alt="" class="video_image" >
    </div>
    <div class="actv_list">
      <el-row style="margin-bottom:10px;"> 活动列表</el-row>  
       <div v-for="t in o.activity_list" :key="t" class="text item">
        <i class="el-icon-caret-right"></i>
        {{t.title }}
         &nbsp; &nbsp;
         {{t.content }}
       </div>
    </div>
  </div> 
</el-card>
    </el-col>
   </el-row>
   <!-- 第二排 -->
   <el-row class="row_all">
    <el-col :span="8" v-for="(o,index) in card_row" :key="index" :offset="index>0?card_row:0" class="card_col">
   <el-card class=" box-card1"  shadow="hover" :body-style="{ padding: '10px' }"  >
  <div slot="header" class="card_title clearfix">
    <span style="color:white; flex:1;">{{ o.title }}</span>
    <el-button class="button_more1" type="text"> <b>more</b><i class="el-icon-caret-right"></i></el-button>
  </div>
  <div class="card_content">
    <div class="video_push">
      <el-row style="margin-bottom:10px; margin-left:-30px;">视频推送</el-row>
      <img v-bind:src="o.vd_img1" alt="" class="video_image">
      <img v-bind:src="o.vd_img2" alt="" class="video_image" >
    </div>
    <div class="actv_list">
      <el-row style="margin-bottom:10px;"> 活动列表</el-row>  
       <div v-for="t in o.activity_list" :key="t" class="text item">
        <i class="el-icon-caret-right"></i>
        {{t.title }}
         &nbsp; &nbsp;
         {{t.content }}
       </div>
    </div>
  </div> 
</el-card>
    </el-col>
   </el-row>
   <!-- 第三排 -->
   <el-row class="row_all">
    <el-col :span="8" v-for="(o,index) in card_row" :key="index" :offset="index>0?card_row:0" class="card_col">
   <el-card class="box-card1" shadow="hover" :body-style="{ padding: '10px' }"  >
  <div slot="header" class="card_title clearfix">
    <span style="color:white; flex:1;">{{ o.title }}</span>
    <el-button class="button_more1" type="text"> <b>more</b><i class="el-icon-caret-right"></i></el-button>
  </div>
  <div class="card_content">
    <div class="video_push">
      <el-row style="margin-bottom:10px; margin-left:-30px;">视频推送</el-row>
      <img v-bind:src="o.vd_img1" alt="" class="video_image">
      <img v-bind:src="o.vd_img2" alt="" class="video_image" >
    </div>
    <div class="actv_list">
      <el-row style="margin-bottom:10px;"> 活动列表</el-row>  
       <div v-for="t in o.activity_list" :key="t" class="text item">
        <i class="el-icon-caret-right"></i>
        {{t.title }}
         &nbsp; &nbsp;
         {{t.content }}
       </div>
    </div>
  </div> 
</el-card>
    </el-col>
   </el-row>
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
  .row_all{
    display:flex;
    flex-direction:row; 
    margin-bottom:40px;
  }
  .button_more1{
    text-align: right; 
    padding: 2px 0;
    color:white;
    flex:1; 
  }
  .card_col{
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
  .box-card1 {
    /* background-color: #CF3B1C; */
    width: 480px;
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
  .video_image{
    height:80px;
    width:130px; 
    margin-left:30px;
  }
  .el-button--text{
    margin-top: 0px;
  }
</style>

<script>
export default {
    name:'business',
    data(){
      return {
        card_row:[
          { 
            title:'广东药膳',
            vd_img1:require('./../assets/1.jpg'),
            vd_img2:require('./../assets/b_img.jpg'),
            activity_list:[
                {title:'买一送一',content:'养生粥食谱'},
                {title:'四季皆宜',content:'百合粥食谱'},
                {title:'广东药膳',content:'煲汤食谱'},
                {title:'买一送二',content:'养生粥杂粮食谱'},
                {title:'广东药膳',content:'乌鸡汤食谱'}
             ]
          },
          { 
            title:'广东药膳',
            vd_img1:require('./../assets/1.jpg'),
            vd_img2:require('./../assets/b_img.jpg'),
            activity_list:[
                {title:'买一送一',content:'养生粥食谱'},
                {title:'四季皆宜',content:'百合粥食谱'},
                {title:'广东药膳',content:'煲汤食谱'},
                {title:'买一送二',content:'养生粥杂粮食谱'},
                {title:'广东药膳',content:'乌鸡汤食谱'}
             ]
          }
        ]
      
      };
    },
    methods: {
      
    }
  }
</script>

