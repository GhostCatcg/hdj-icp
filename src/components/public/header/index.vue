<template>
  <header>
    <div class="H1-wapper">
      <div class="H1-left">
        <router-link to="/">豆印有限公司</router-link>
      </div>
      <div class="H1-center">
        <router-link to="/">首页</router-link>
        <router-link to="/">加入我们</router-link>
        <router-link to="/">行业咨询</router-link>
        <router-link to="/">关于我们</router-link>
      </div>
      <div class="H1-right">
        <span>登录</span>
        <span>注册</span>
      </div>
    </div>
  </header>
</template>


<script>
export default {
  methods: {
    success(res) {
      this.showD = res;
    },
    re(res) {
      this.showR = res;
      console.log(res);
    }
  },
  components: {},
  data() {
    return {
      showD: false,
      dialogCreate: "false",
      showR: false
    };
  }
};
</script>


<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
header {
  .H1-wapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 0 80px;
    height:80px;
    border-bottom:2px solid black;
    a{
        color:#333;
        text-decoration: none;
        display: inline-block;
    }
    .H1-left {
      flex: 6;
      text-align: center;
      a {
        font-size: 30px;
      }
    }
    .H1-center {
      text-align: center;
      flex: 4;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        margin-right: 20px;
        &:hover{
            color:red;
        }
      }
      margin-right:20px;
    }
    .H1-right {
      text-align: center;
      flex: 2;
      margin-left: 10px;
      span {
        border: 1px solid black;
        padding: 4px 8px;
      }
    }
  }
}
</style>