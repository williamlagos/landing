import Vue from "vue";

import AboutPage from "pages/about/about.vue";
import AuthenticationPage from "pages/authentication/authentication.vue";
import HomePage from "pages/home/home.vue";
import FirstLandingPage from "pages/landing/01/landing-01.vue";
import SecondLandingPage from "pages/landing/02/landing-02.vue";
import NotFoundPage from "pages/not-found/not-found.vue";

const routes = [
  { name: 'landing', path: '/', component: FirstLandingPage },
  { name: 'landing-subscribe', path: '/subscribe', component: SecondLandingPage },
  { name: 'home', path: '/app', component: HomePage },
  { name: 'about', path: '/about', component: AboutPage },
  { name: 'authentication', path: '/authentication', component: AuthenticationPage }
];

routes.push({ name: 'not-found', path: '*', component: NotFoundPage });

routes.map((route) => { Vue.component(route.component.name, route.component) });

export default routes;
