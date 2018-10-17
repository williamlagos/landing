<style lang="scss" scoped src="./authentication.scss"></style>
<template src="./authentication.html"></template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "authentication-page",
  components: {},
  created: () => {},
  data() {
    return {
      user: {}
    };
  },
  methods: {
    goToSignupPage() {
      let role = this.$route.query.role || "customer";
      this.$router.push({ name: `${role}-signup` });
    },
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  }
};
</script>