<template>
  <header>
    <div class="H1-wapper">
      <div class="H1-left">
        <router-link to="/">豆印有限公司</router-link>
      </div>
      <div class="H1-center">
        <router-link to="/">首页</router-link>
        <router-link to="/join">加入我们</router-link>
        <!-- <router-link to="/news">行业咨询</router-link> -->
        <router-link to="/about">关于我们</router-link>
      </div>
      <div class="H1-right">
        <router-link class="H1-register" to="/register">登录</router-link>
        <router-link class="H1-login" to="/login">注册</router-link>
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
    height: 80px;
    box-shadow: 0px 1px 15px -2px #a5a5a5;
    position:relative;
    z-index: 999;
    a {
      color: #333;
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
        transition: color .3s;
        &.router-link-active.router-link-exact-active {
          color: #6064ff;
        }
        &:hover {
          color: #6064ff;
        }
      }
      margin-right: 20px;
    }
    .H1-right {
      text-align: center;
      flex: 2;
      margin-left: 10px;
      a {
        padding: 4px 8px;
        margin-right: 10px;
        border-radius: 8px;
        &.H1-login {
          border: 1px solid #ff3abc;
          color: #ff3abc;
        }
        &.H1-register {
          border: 1px solid #b775ff;
          color: #b775ff;
        }
      }
    }
  }
}
</style>