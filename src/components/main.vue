<template>
 <div>
      <!-- 走马灯 -->
    <el-carousel :interval="5000" arrow="always" style=" height:400px; margin-right:50px">
    <el-carousel-item v-for="item in imagesbox" :key="item" style=" height:400px;margin-right:50px ">
      <!-- <h3>{{ item }}</h3> -->
      <img v-bind:src="item.url" alt="" class="image" style=" height:400px; width:100%">
    </el-carousel-item>
  </el-carousel>
   <!-- 相关软文 -->
   <!-- <div style="width:100%"> -->
   <el-card class="box-card" style="margin-top:30px; margin-right:50px">
  <div slot="header" class="card_title clearfix">
    <span style="color:white; flex:1;">相关软文</span>
    <el-button type="text" class="more_button1">more<i class="el-icon-caret-right"> </i></el-button>
  </div>
   <!-- 列表内容 -->
  <el-row>
  <el-col  v-for="o in card1" :key="o">
    <el-card :body-style="{ padding: '0px' }">
      <div class="all-card">
      <div class="card-img"><img class="image card-image" v-bind:src="o.url"></div>
      <div class="card-text">
        <el-button type="text" class="button" >{{ o.title }}</el-button>
        <el-col type="text" class="card-content "> {{o.content}} </el-col>
        <div class="bottom clearfix" >
          <time class="time" >{{ o.time }}</time>
        </div>       
      </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</el-card>
 <!-- </div> -->
 <!-- 商家优惠活动 -->
 <div>
 <el-card class="box-card" style="margin-top:30px; margin-right:50px">
  <div slot="header" class="card_title clearfix">
    <span style="color:white; flex:1;">商家优惠活动</span>
    <el-button type="text" class="more_button1">more<i class="el-icon-caret-right"> </i></el-button>
  </div>
   <!-- 列表内容 -->
  <el-row>
  <el-col  v-for="o1 in card2" :key="o1">
    <el-card :body-style="{ padding: '0px' }">
      <div class="all-card">
      <div class="card-img"><img class="image card-image" v-bind:src="o1.url"></div>
      <div class="card-text">
        <el-button type="text" class="button" >{{ o1.title }}</el-button>
        <el-col type="text" class="card-content "> {{o1.content}} </el-col>
        <div class="bottom clearfix" >
          <time class="time" >{{ o1.time }}</time>
        </div>       
      </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</el-card>
</div>
<!-- 专家免费在线 -->
<div>
 <el-card class="box-card" style="margin-top:30px; margin-right:50px">
  <div slot="header" class="card_title clearfix">
    <span style="color:white; flex:1;">专家免费在线</span>
    <el-button type="text" class="more_button1">more<i class="el-icon-caret-right"> </i></el-button>
  </div>
  <!-- 列表内容 -->
  <el-row>
  <el-col  v-for="o2 in card4" :key="o2">
    <el-card :body-style="{ padding: '0px' }">
      <div class="all-card">
      <div class="card-img"><img class="image card-image" v-bind:src="o2.url"></div>
      <div class="card-text">
        <el-col type="text" class="card-content1 "><i>{{o2.patient1}}</i> {{o2.question1}} </el-col>   
        <el-col type="text" class="card-content1 "><i>{{o2.patient2}}</i> {{o2.question2}} </el-col>    
        <el-col type="text" class="card-content1 "><i>{{o2.patient3}}</i> {{o2.question3}} </el-col> 
        <el-col type="text" class="card-content1 "><i>{{o2.patient4}}</i> {{o2.question4}} </el-col>    
      </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</el-card>
</div>
<!-- 限时私人订制 -->
<div>
<el-card class="box-card" style="margin-top:30px; margin-right:50px">
 <div slot="header" class="card_title clearfix">
    <span style="color:white; flex:1;">限时私人订制</span>
    <el-button type="text" class="more_button1">more<i class="el-icon-caret-right"> </i></el-button>
  </div>
  <!-- 列表内容 -->
  <el-row>
  <el-col :span="8" v-for="(o, index) in f_imgs" :key="index" :offset="index > 0 ? f_imgs : 0" style="margin-left:10px">
    <el-card :body-style="{ padding: '0px' }">
      <img v-bind:src="o.url" class="image food-image">
      <div style="margin-top: -10px;">
        <div class="bottom clearfix">
          <el-button type="text" class="button">{{ o.content }}</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</el-card>
</div>
</div>
</template>

<style>
  /* 走马灯 */
   .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  /* 卡片 */
  .text_title{
    float:left;
    color:white;
    font-weight: 400;
    font-size: 15px;
    padding-top: 5px;
  }
  
  /* .more_button1{
    float: right;
    border: none;
    font-size: 18px;
    padding-top: 5px;
    color:white;
    background-color: #CF3B1C;
  } */
   .more_button1{
    text-align: right; 
    padding: 2px 0;
    color:white;
    flex:1; 
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
  
  .all-card {
    display: flex;
    flex-direction: row;
  }
  .card-img {
    flex: 1;
  }
  .card-text {
    flex: 3;
  }
  .card-image{
    width: 180px;
    height: 140px;
    margin: 20px;
  }
  .card-content{
    font-size: 15px;
    padding-right: 18px;
    float:left;
    margin-bottom: 18px;
  }
   .card-content1{
    font-size: 15px;
    padding-right: 18px;
    float:left;
    margin: 10px;
  }
  /* .el-button--text{
    font-size: 18px;
    margin-top: 10px;
  } */
  .time{
    color:#999; 
    font-size:13px;
    float: right;
    padding-right: 18px;
    padding-top:20px;
  }
  /* 专家推荐 */
   .bottom {
    margin-top: 3px;
    line-height: 12px;
  }
  
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
   .food-image{
     padding: 10px;
     height: 150px;
   }
</style>

<script>
export default {
    name:'main',
    data(){
      return {
        bannerHeight:"",
        imagesbox:[{id:0,url:require('../assets/advertise/b_img1.jpg')},
         {id:1,url:require('../assets/advertise/b_img2.jpg')},
         {id:2,url:require('../assets/advertise/b_img3.png')},
        ],
        card1:[
          {url:require('../assets/1.jpg'),title:'第一篇文章',content:'十大类药物用药介绍 - 十大类药物用药介绍 一、《青霉素类药物》 1、 常用的品种:青霉素、氨苄青霉素(氨苄西林)、',time:'2019-03-12'},
          {url:require('../assets/advertise/b_img2.jpg'),title:'第二篇文章',content:'关注点药品底价曝光药物是用以预防、治疗及诊断疾病的物质。在理论上，药物是指凡能影响机体器官生理功能及细胞代谢活动的化学物质都属于药物的范畴，也包括避孕药。',time:'2019-03-12'},
          {url:require('../assets/advertise/b_img1.jpg'),title:'第三篇文章',content:'文章内容',time:'2019-03-12'},
         ],
        card2:[
          {url:require('../assets/b_img.jpg'),title:'第一篇文章',content:'文章内容',time:'2019-03-12'},
          ],
        card3:[
          {url:require('../assets/t.jpg'),title:'第一篇文章',content:'文章内容',time:'2019-03-12'},
          {url:require('../assets/advertise/b_img2.jpg'),title:'第二篇文章',content:'文章内容',time:'2019-03-12'},
          {url:require('../assets/advertise/b_img1.jpg'),title:'第三篇文章',content:'文章内容',time:'2019-03-12'},
        ],
        card4:[
          {url:require('../assets/question.jpg'),question1:'您好！老师，我想配点治疗肚子疼的药',patient1:'甲方',question2:'请问经常肚子疼是怎么回事？',patient2:'乙方',question3:'??',patient3:'丙',question4:'？？？',patient4:'丁'},
        ],
        f_imgs:[
          {url:require('../assets/t.jpg'),content:'汉堡包$5'},
          {url:require('../assets/1.jpg'),content:'汉堡包$5'}
        ],
      };
    },
    methods: {
        
    },
    
  }
</script>
