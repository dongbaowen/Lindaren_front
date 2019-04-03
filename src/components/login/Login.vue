<template>
  <div id="login-container">
    <a-row>
      <a-col :span="8"></a-col>
      <a-col :span="8">
        <div id="login-form">
          <div class="form-header"></div>
          <a-form :form="form" @submit="handleSubmit">
            <a-form-item label="账号" :label-col="{ span: 6 }" :wrapper-col="{ span: 13 ,offset: 1}">
              <a-input/>
            </a-form-item>  
            <a-form-item label="密码" :label-col="{ span: 6 }" :wrapper-col="{ span: 13 ,offset: 1}">
              <a-input/>
            </a-form-item>
            <a-button id="btn-submit" type="primary" html-type="submit">登录</a-button>
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
      form: this.$form.createForm(this)
    };
  },
  methods: {
    handleSubmit(e) {
      alert(123);
    },
    login() {
      http
        .post("http://localhost/api/user/login", { id: "ok" })
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
}
#login-form .form-header {
  padding-top: 30px;
  height: 130px;
}
#btn-submit {
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
