<template>
  <div>
    <a-button class="btn-submit" id="btn-submit-rigister" @click="unfreeze" type="primary">注册</a-button>

  </div>
</template>

<script>
import http from "../../common/http";

export default {
  data() {
    return {};
  },
  methods: {
    unfreeze() {
      let href = window.location.href;
      let token = this.getParam("token");
      console.log(token);

      // http
      //   .get("http://localhost/api/user/unfreeze?token=" + token)
      //   .then(data => {
      //     console.log("res: ", data);
      //   })
      //   .catch(err => console.log(err));
    },
    getParam(paramName) {
      console.log(window.location.href);
        let paramValue = "", isFound = !1;
        if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
            arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0;
            while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++
        }
        return paramValue == "" && (paramValue = null), paramValue
    }
  }
};
</script>

<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
