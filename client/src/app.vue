<style lang="scss" scoped src="./app.scss"></style>
<template src="./app.html"></template>

<script>
import Vue from "vue";

import constants from "./config/constants";
import locales from "./config/locales";

import Logo from "./components/logo/logo.vue";
import Footer from "./components/footer/footer.vue";

import "./app.scss";

Vue.mixin({
  data: function() {
    return {
      constants,
      locales
    };
  }
});

Vue.component("logo", Logo);
Vue.component("app-footer", Footer);

export default {
  name: "app",
  computed: {},
  data() {
    return {
      tabs: [],
      currentPage: "home-page"
    };
  },
  components: {},
  methods: {
    goTo(routeName) {
      this.$router.push({ name: routeName });
    }
  }
};
</script>
