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
      // http
      //   .post("http://localhost:9090/user/login", {})
      //   .then(data => {
      //     console.log("res: ", data);
      //   })
      //   .catch(err => console.log(err));

      // fetch("./static/data.json")
      //   .then(res => res.json())
      //   .then(data => {
      //     console.log("res:", data);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });

      fetchJsonp("http://localhost:9090/user/login", {name: "zhangsan"})
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          console.log("parsed json", json);
        })
        .catch(function(ex) {
          console.log("parsing failed", ex);
        });
    }
  }
};
</script>

<style scoped>
</style>
