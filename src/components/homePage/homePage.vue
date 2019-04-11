<template>
  <div id="home-page-container">
    home page
  </div>
</template>

<script>
import http from "../../common/http";

export default {
  data() {
    return {
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
    }
  }
};
</script>

<style scoped>

</style>
