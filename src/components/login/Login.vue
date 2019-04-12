<template>
  <div id="login-container">
    <a-row>
      <a-col :span="8"></a-col>
      <a-col :span="8">
        <div id="login-form">
          <div class="form-header"></div>
          <a-form :form="form" @submit="login">
            <div class="form-item-container">
              <a-form-item label="邮箱">
                <a-input id="email" v-model="email" placeholder="请填写邮箱"/>
              </a-form-item>
              <a-form-item label="密码">
                <a-input id="password" v-model="password" placeholder="请填写密码"/>
              </a-form-item>
              <a-button id="btn-submit" type="primary" html-type="submit">登录</a-button>
            </div>
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
      password: ""
    };
  },
  methods: {
    handleSubmit(e) {
      console.log(this.email);
    },
    login() {
      http
        .post("http://127.0.0.1/api/user/login", {
          email: this.email,
          password: this.password
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
  height: 500px;
  margin: 60px 20px;
  background-color: #fff;
  border-radius: 2px;
  padding: 0px 40px;
}
#login-form .form-header {
  padding-top: 30px;
  height: 130px;
}
#btn-submit {
  width: 300px;
  height: 40px;
  border-radius: 0px;
  font-size: 16px;
  margin-top: 20px;
}
.form-item-container {
  text-align: left;
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
