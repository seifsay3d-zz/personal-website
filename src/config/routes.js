import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/spa/Home/Home';
import About from '@/spa/About/About';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});
