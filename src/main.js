// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Layout, Row, Col, Form, Input, Menu, Icon } from 'ant-design-vue'

Vue.use(Button)
Vue.use(Layout)
Vue.use(Row)
Vue.use(Col)
Vue.use(Form)
Vue.use(Input)
Vue.use(Menu)
Vue.use(Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
