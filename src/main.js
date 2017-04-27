// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VeeValidate);


Vue.filter('time', timestamp => {
  return new Date(timestamp).toLocaleTimeString()
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
