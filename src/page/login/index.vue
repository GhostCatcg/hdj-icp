<template>
  <div class="all-wapper">
    <icpHeader />
    <div class="I1-main all-content">
      <div class="login_box">
        <div class="register">
          <div class="res_ipt">
            <span class="res_property">用户名：</span>
            <input placeholder="输入登陆用户名" type="text" v-model="username" />
            <span>请输入登陆的用户名</span>
          </div>
          <div class="res_ipt">
            <span class="res_property">密码：</span>

            <input placeholder="输入登录密码" type="password" v-model="passwod" />
            <span>请输入6-20位的登陆密码</span>
          </div>
          <div class="res_ipt">
            <span class="res_property">确认密码：</span>
            <input placeholder="请再次输入密码" type="password" v-model="confirm" />
            <span>请再次输入密码</span>
          </div>
          <div class="res_ipt">
            <span class="res_property">手机：</span>
            <input placeholder="输入手机号" type="text" v-model="tele" />
            <span>请输入手机号码</span>
          </div>
          <div class="res_ipt">
            <span class="res_property">邮箱：</span>
            <input placeholder="输入邮箱账号" type="email" />
            <span>请输入电子邮箱账号</span>
          </div>
          <div class="res_ipt">
            <span class="res_property">验证码:</span>
            <input type="text" />
            <span></span>
          </div>
          <div class="res_ipt1">
            <input type="checkbox" name="item" />我已仔细阅读并接受
            <a href>注册许可协议</a>
          </div>
          <button class="btn">立即注册</button>
        </div>
      </div>
    </div>
    <icpFooter />
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      passwod: "",
      confirm: "",
      tele: ""
    };
  }
};
</script>
<style lang="scss" scoped>
.I1-main {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
        box-shadow: 0px 0px 15px -2px rgb(219, 219, 219);

}
.login_box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .register {
    background-color: #fff;
    width: 800px;
    height: 500px;
    padding-top: 30px;
    .res_ipt {
      margin-left: 20%;
      input {
        width: 222px;
        height: 41px;
        margin: 10px;
        text-indent: 1rem;
        border-radius: 5px;
        border: 1px solid #e8e8e8;
      }
      .res_property {
        display: inline-block;
        width: 80px;
        text-align: justify;
        text-align-last: justify;
      }
    }
    .res_ipt1 {
      margin-left: 30%;
      display: flex;
      align-items: center;
      input {
        width: 20px;
        height: 20px;
      }
    }
    .btn {
      width: 230px;
      height: 40px;
      border: 1px solid #417f41;
      background-color: #66b8c3;
      margin-left: 30%;
      margin-top: 20px;
      color: #fff;
    }
  }
}
</style>