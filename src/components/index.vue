<template>
  <el-container :style="fillHeight">
    <el-aside width="250px">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        :style="fillHeight"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">
          <span slot="title">省统计</span>
        </el-menu-item>
        <el-menu-item index="2">
          <span slot="title">市统计</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        fillHeight: {
          height: document.documentElement.clientHeight -20 + "px",
        }
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        if(key==1){
          this.$router.push({path: '/'});
        }else if(key==2){
          this.$router.push({path: '/City'});
        }
      }
    }
  }
</script>

<style>

  .el-aside {
    line-height: 200px;
  }

  .el-main {
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
