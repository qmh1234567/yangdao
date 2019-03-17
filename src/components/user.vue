<template>
<div>
  <!-- 个人资料 -->
    <el-col class="row_all">
    <el-row :span="8" v-for="(o,index) in card_row" :key="o" :offset="index>0?card_row:0" class="card_col">
   <el-card class="box-card" shadow="hover" :body-style="{ padding: '10px' }"  >
  <div slot="header" class="card_title clearfix">
    <span style="color:white; ">个人资料</span>
  </div>
  <el-row class="expert_intrd">
    <!-- 用户信息 -->
  <div class="card_content">
    <div class="video_push">
      <img v-bind:src="o.my_img" alt="" class="my_image">
      <div class="health_info" type="primary">亚健康</div>
    </div>
    <div class="info_list">
      <el-row style="margin-bottom:10px;">&nbsp; </el-row>  
       <div v-for="t in o.my_info" :key="t" class="text item">
        <i class="el-icon-caret-right"></i>
        {{t.title }}
         &nbsp; &nbsp;
         {{t.content }}
       </div>
       <div class="text item" style="color:#CF3B1C"> <i class="el-icon-caret-right" style="color:#CF3B1C"></i>修改资料</div>
    </div>
  </div> 
  <!-- 菜单按钮  -->
   <el-col class="menu_list">
      <el-row style="margin-bottom:10px;">&nbsp; </el-row>  
       <div v-for="t in o.menu" :key="t" class="menu_button">
         <a href="#">{{t.content }}</a>
       </div>
       <div class="menu_button">
         <a href="#">进入健康树系统>></a>
       </div>
    </el-col>
  </el-row>
</el-card>
    </el-row>
   </el-col>
   <!-- 中医体质鉴定表 -->
    <el-col class="row_all">
    <el-row :span="8" v-for="(o,index) in card_row" :key="o" :offset="index>0?card_row:0" class="card_col">
   <el-card class="box-card" shadow="hover" :body-style="{ padding: '10px' }"  >
  <div slot="header" class="card_title clearfix">
    <span style="color:white; ">中医体质鉴定表</span>
  </div>
  <span style="float:left; color:grey; padding-left:10px;">气虚质&nbsp;&nbsp;&nbsp;(R型)</span>
   <!-- 表格 -->
    <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="question"
      label="请根据近一年的体验和感觉，回答以下问题"
      width="350">
    </el-table-column>
    <el-table-column
      prop="none"
      label="没有">
    </el-table-column>
    <el-table-column
      prop="little"
      label="很少">
    </el-table-column>
    <el-table-column
      prop="some"
      label="有些">
    </el-table-column>
    <el-table-column
      prop="often"
      label="经常">
    </el-table-column>
    <el-table-column
      prop="always"
      label="总是">
    </el-table-column> 
  </el-table>
  <span style="float:left;margin:10px;height:30px;">判断结果：<i class="el-icon-circle-check-outline">是</i> &nbsp;&nbsp;&nbsp;<i class="el-icon-circle-check-outline">倾向是</i>&nbsp;&nbsp;&nbsp; <i class="el-icon-circle-check-outline">否</i></span>
</el-card>
    </el-row>
   </el-col>
  <!-- 保健方案推荐 -->
  <el-col class="row_all">
    <el-row :span="8" v-for="(o,index) in card_row" :key="o" :offset="index>0?card_row:0" class="card_col">
   <el-card class="box-card" shadow="hover" :body-style="{ padding: '10px' }"  >
  <div slot="header" class="card_title clearfix">
    <span style="color:white; ">保健方案推荐</span>
  </div>
   <!-- 方案内容 -->
     <div v-for="o in plans" :key="o" class="text item">
    {{ o.content }}
  </div>

</el-card>
    </el-row>
   </el-col>
   </div>
</template>

<style>
 .row_all{
    display:flex;
    flex-direction:column; 
    margin-bottom:40px;
  }
  .button_more{
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
    margin-bottom: 20px;
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
    /* background-color: red; */
  }
  .el-card__header{
    background-color: #CF3B1C;
    padding-bottom: 10px;
    padding-top: 10px;
  }
  .box-card {
    width: 100%;
  }
  .card_content{
    display: flex;
    flex-direction: row;
  }
  .video_push{
    flex: 1;
  }
  .info_list{
    flex:2 ;
  }
  .menu_list{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: -20px;
    flex: 3;
  }
  .my_image{
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
  .health_info{
    width:150px;
    height: 40px;
    text-align: center;
    margin-bottom:10px;
    margin-left:10px;
    background-color: #CF3B1C;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    border: none;
  }
  .menu_button{
    width:150px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom:10px;
    background-color: #CF3B1C;
    /* margin-bottom:10px; */
    margin-left:10px;
    /* color: white; */
    font-size: 16px;
    border: none;
  }
  .menu_button a:hover{
    color: orange;
  }
  .menu_button a{
    text-decoration: none;
    color: white;
  }
  .health_sys{
    background-color: #CF3B1C; 
    float:right; 
    width:200px; 
    height:20px;
    padding-top: 5px; 
  }
</style>

<script>
export default {
    name:'user',
    data(){
      return {
         card_row:[
          { 
            title:'中医专家',
            my_img:require('./../assets/1.jpg'),
            my_info:[
                {title:'姓名',content:'张三'},
                {title:'年龄',content:'20'},
                {title:'等级',content:'高级用户'},
                {title:'手机',content:'1838241958'},
             ],
            menu:[
                {content:'订单中心'},
                {content:'我的收藏'},
                {content:'我的评价'},
                {content:'我的反馈'},
             ]
          }
        ],
         tableData: [{
          question: '（1）您容易疲乏吗？',
          none: '1',
          little: '2',
          some:'3',
          often:'4',
          always:'5',
        }, {
          question: '（2）您容易气短(呼吸短促，喘不上气)吗？',
          none: '1',
          little: '2',
          some:'3',
          often:'4',
          always:'5',
        }, {
          question: '（3）您容易心慌吗？',
          none: '1',
          little: '2',
          some:'3',
          often:'4',
          always:'5',
        }, {
          question: '（4）您容易头晕或站起来时眩晕吗？',
          none: '1',
          little: '2',
          some:'3',
          often:'4',
          always:'5',
        },
        {
          question: '（5）您比别人容易患感冒吗？',
          none: '1',
          little: '2',
          some:'3',
          often:'4',
          always:'5',
        },
        {
          question: '（6）您喜欢安静，懒得说话吗？',
          none: '1',
          little: '2',
          some:'3',
          often:'4',
          always:'5',
        },
        {
          question: '（7）您说话声音低弱无力吗？',
          none: '1',
          little: '2',
          some:'3',
          often:'4',
          always:'5',
        },
        {
          question: '（8）您活动量稍大就容易出虚汗吗？',
          none: '1',
          little: '2',
          some:'3',
          often:'4',
          always:'5',
        },
        ],
        plans:[
          {content:'1、医外治 (推拿按摩、针灸、拔罐、足疗、药浴熏蒸)'},
          {content:'2、体疗法 (根据不同人的体质指导功能锻炼如：太极拳、网球运动、保龄球运动、慢跑、器械运动等)'},
          {content:'3、物理疗法 (红外线、高压氧仓、电磁疗法)'},
          {content:'4、艺术疗法(养生指导、音乐疗法)'},
          {content:'5、中医内治(中草药、中成药)'}
        ]
      };
    },
    methods: {
      
    }
  }
</script>

