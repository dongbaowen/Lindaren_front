<template>
  <div id="login-container">
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout-content>Content</a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>

    <input id="username" v-model="username" placeholder="username">
    <input id="password" v-model="password" placeholder="password">
    <button @click="login" id="submit-login">登录</button>
    <a-button type="primary">Button></a-button>
  </div>
</template>

<script>
import http from "../../common/http";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
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
#login-container {
  text-align: center;
}
#login-container .ant-layout-header,
#login-container .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#login-container .ant-layout-footer {
  line-height: 1.5;
}
#login-container .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#login-container .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#login-container > .ant-layout {
  margin-bottom: 48px;
}
#login-container > .ant-layout:last-child {
  margin: 0;
}
</style>
