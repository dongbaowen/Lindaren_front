<template>
  <div id="main-container">
    <div id="login-container">
      <div id="login-box">
        <div class="form-header"></div>
        <a-form v-show="isShowLogin" :form="form">
          <div class="form-item-container">
            <a-form-item label="邮箱">
              <a-input id="email" v-model="email" class="login-input" placeholder="请填写邮箱"/>
            </a-form-item>
            <a-form-item label="密码">
              <a-input id="password" v-model="password" class="login-input" placeholder="请填写密码"/>
            </a-form-item>
            <a-button class="btn-submit" id="btn-submit-login" @click="login" type="primary">登录</a-button>
          </div>
        </a-form>

        <a-form v-show="isShowRegister" :form="form">
          <div class="form-item-container">
            <a-form-item label="邮箱">
              <a-input id="userEmail" v-model="userEmail" class="login-input" placeholder="请填写邮箱"/>
            </a-form-item>
            <a-form-item label="密码">
              <a-input
                id="userPassword"
                v-model="userPassword"
                class="login-input"
                placeholder="请填写密码"
              />
            </a-form-item>
            <a-form-item label="昵称">
              <a-input
                id="userNickname"
                v-model="userNickname"
                class="login-input"
                placeholder="请填写昵称"
              />
            </a-form-item>
          </div>
          <a-button class="btn-submit" id="btn-submit-rigister" @click="register" type="primary">注册</a-button>
        </a-form>
      </div>
      <div id="switch-box">
        <span v-show="isShowRegister" class="bottom-text">已有账号？</span>
        <span v-show="isShowLogin" class="bottom-text">没有账号？</span>
        <a-button id="btn-switch" @click="doSwitch" type="primary">
          <span v-show="isShowRegister" class="bottom-text">登录</span>
          <span v-show="isShowLogin" class="bottom-text">注册</span>
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../../common/http";

export default {
  data() {
    return {
      form: this.$form.createForm(this),
      email: "",
      password: "",
      userEmail: "",
      userPassword: "",
      userNickname: "",
      isShowRegister: false,
      isShowLogin: true
    };
  },
  methods: {
    login() {
      http
        .post("http://localhost/api/user/login", {
          email: this.email,
          password: this.password
        })
        .then(data => {
          console.log("res: ", data);
        })
        .catch(err => console.log(err));
    },
    register() {
      http
        .post("http://localhost/api/user/register", {
          userEmail: this.userEmail,
          userPassword: this.userPassword,
          userNickname: this.userNickname
        })
        .then(data => {
          console.log("res: ", data);
        })
        .catch(err => console.log(err));
    },
    doSwitch() {
      this.isShowRegister = !this.isShowRegister;
      this.isShowLogin = !this.isShowLogin;
    }
  }
};
</script>

<style scoped>
#login-form {
  display: none;
}
#login-container {
  margin: 0 auto;
  margin-top: 60px;
  border-radius: 2px;
  width: 430px;
}
#login-box {
  min-height: 450px;
  background-color: #fff;
  padding: 0px 50px 20px 50px;
}
.login-input {
  height: 45px;
}
#login-box .form-header {
  padding-top: 30px;
  height: 130px;
}
.btn-submit {
  width: 100%;
  height: 40px;
  border-radius: 0px;
  font-size: 16px;
  margin-top: 20px;
}
.form-item-container {
  text-align: left;
}
#main-container {
  text-align: center;
  height: 100%;
  background-image: url("../../assets/sign_bg.db29b0fb.png");
  background-repeat: no-repeat;
  background-color: #b8e5f8;
  background-size: cover;
  width: 100%;
  height: 100vh;
  overflow: auto;
  padding-right: 15px;
}
#switch-box {
  height: 60px;
  background-color: #f6f6f6;
  padding: 15px;
}
</style>
