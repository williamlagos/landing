<style lang="scss" scoped src="./not-found.scss"></style>
<template src="./not-found.html"></template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "not-found-page",
  components: {},
  data() {
    return {
      user: {}
    };
  },
  methods: {
    goRoot() {
    }
  }
};
</script>