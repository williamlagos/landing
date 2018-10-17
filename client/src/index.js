import Vue from 'vue';
import VueRouter from 'vue-router';
import app from './app.vue';
import routes from './routes';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  base: window.location.href,
  routes: routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(app),
  components: { app }
})