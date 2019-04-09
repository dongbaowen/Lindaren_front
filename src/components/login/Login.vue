<template>
  <div id="login-container">
    <a-row>
      <a-col :span="8"></a-col>
      <a-col :span="8">
        <div id="login-box">
          <div class="form-header"></div>

          <a-form id="login-form" :form="form">
            <a-form-item label="邮箱" :label-col="{ span: 6 }" :wrapper-col="{ span: 13 ,offset: 1}">
              <a-input id="email" v-model="email"/>
            </a-form-item>
            <a-form-item label="密码" :label-col="{ span: 6 }" :wrapper-col="{ span: 13 ,offset: 1}">
              <a-input id="password" v-model="password"/>
            </a-form-item>
            <a-button class="btn-submit" id="btn-submit-login" @click="login" type="primary">登录</a-button>
          </a-form>

          <a-form id="register-form" :form="form">
            <a-form-item label="邮箱" :label-col="{ span: 6 }" :wrapper-col="{ span: 13 ,offset: 1}">
              <a-input id="userEmail" v-model="userEmail"/>
            </a-form-item>
            <a-form-item label="密码" :label-col="{ span: 6 }" :wrapper-col="{ span: 13 ,offset: 1}">
              <a-input id="userPassword" v-model="userPassword"/>
            </a-form-item>
            <a-form-item label="昵称" :label-col="{ span: 6 }" :wrapper-col="{ span: 13 ,offset: 1}">
              <a-input id="userNickname" v-model="userNickname"/>
            </a-form-item>
            <a-button class="btn-submit" id="btn-submit-rigister" @click="register" type="primary">注册</a-button>
          </a-form>
        </div>

      </a-col>
      <a-col :span="8"></a-col>
    </a-row>
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
      userNickname: ""
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
    }
  }
};
</script>

<style scoped>
#login-form {
  display: none;
}
#login-box {
  height: 500px;
  margin: 60px 20px;
  background-color: #fff;
  border-radius: 2px;
}
#login-box .form-header {
  padding-top: 30px;
  height: 130px;
}
.btn-submit {
  width: 300px;
  height: 45px;
  border-radius: 0px;
  font-size: 16px;
}

#login-container {
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
#login-container .ant-row {
  height: 100%;
}
</style>
