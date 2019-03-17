<template>
<div id="app">
  <el-container>
    <el-header style="height:80px">
  <el-row :gutter="20">
  <el-col :span="8">
    <div class="icon_text" style="height:90px; margin-left:60px;">
      <img class="image" style="height:90px; flex:1; " src="./../assets/logo.png" > 
      <span style="margin-left:20px; margin-top:15px; font-size:30px;text-align:left; display: block; flex:2;">养道</span>
    </div> 
  </el-col>
  <el-col :span="11" style="padding-top:15px">
    <el-input
    width= 100px;
    placeholder="请输入内容"
    prefix-icon="el-icon-search"
    
    >
  </el-input>
    </el-col>
  <el-col :span="3" style="float:right; padding-top:15px">
    <el-button type="text" style="font-size: 18px; color:red;" v-text="btnText" @click="Gotologin"></el-button>
  </el-col>
</el-row>
    </el-header>
  <el-container>
    
  <el-aside width="300px" style="margin-left:50px; margin-top:20px;">
    <!-- 导航栏 -->
    <el-row class="tac">
     <el-col :span="12">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
      background-color="#CF3B1C"
      text-color="#ffff"
      active-text-color="#ffd04b">
       <el-menu-item index="1" style="font-size:18px">
        <span slot="title">主页</span>
      </el-menu-item>
      <el-menu-item index="2" style="font-size:18px">
        <span slot="title">社区</span>
      </el-menu-item>
      <el-menu-item index="3" style="font-size:18px">
        <span slot="title">商家</span>
      </el-menu-item>
       <el-menu-item index="4" style="font-size:18px">
        <span slot="title">专家在线</span>
      </el-menu-item>
      <el-menu-item index="5" style="font-size:18px">
        <span slot="title">用户</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
  </el-aside>
    <el-main class="home_main" style="margin-right:50px">  <!--使用全局route-->
     <!-- 主窗口 -->
     <div style="margin-top:20px; margin-left:20px">
      <router-view></router-view>  <!-- 最重要的标签，用来显示跳转的页面 -->
     </div>
    </el-main>
  </el-container>
    <el-footer>
      <el-row style="margin:0px;height:10px;">版权所有: 大医精诚科技有限公司</el-row>
      <el-row style="margin-top:10px;height:10px;">地址：中国.成都中医院大学温江校区&nbsp;邮编：611137</el-row>
    </el-footer>
</el-container>
</div>
</template>

<style>
/* 导航栏 */
 .icon_text{
   display: flex;
   flex-direction: row;
 }
.el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

/* 容器 */
 .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  /* 导航栏 */
  .tac{
    margin-top: 20px;
  }
  .el-col-12{
    width: 100%;
    height: 100%;
  }
  .el-menu-item{
    height: 100px;
    /* width: 100px; */
  }
  
</style>

<script>
export default {
    name:'/',
    data(){
      return {
        // currentDate: new Date()
        btnText:'登录',
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key,keyPath){
          switch(key){
              case '1':
                this.$router.push('/main');
                break;
              case '2':
                this.$router.push('/community');
                break;
              case '3':
                this.$router.push('/business');
                break;
              case '4':
                this.$router.push('/expert');
                break;
              case '5':
                this.$router.push('/user');
                break;
          }
      },
      Gotologin(){
          this.$router.push('/login');
      },
    }
  }
</script>
