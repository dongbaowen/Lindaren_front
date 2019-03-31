<template>
  <div id="login-container">
    <input id="username" v-model="username" placeholder="username">
    <input id="password" v-model="password" placeholder="password">
    <button @click="login" id="submit-login">登录</button>
  </div>
</template>

<script>
import http from "../../common/http";
import fetchJsonp from "fetch-jsonp";

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
        .post("http://localhost/api/test2/redis", {"id":"ok"})
        .then(data => {
          console.log("res: ", data);
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
</style>
