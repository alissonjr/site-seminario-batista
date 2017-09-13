import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/views/Hello';
import VueFlexboxgrid from 'vue-flexboxgrid';

Vue.use(Router);
Vue.use(VueFlexboxgrid);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
});
