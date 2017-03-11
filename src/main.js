// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App';
import routes from './config/routes';

// We want to apply VueResource and VueRouter
// to our Vue instance
Vue.use(VueResource);
Vue.use(VueRouter);

const router = routes;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
