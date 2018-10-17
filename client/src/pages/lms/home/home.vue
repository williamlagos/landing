<style lang="scss" scoped src="./home.scss"></style>
<template src="./home.html"></template>

<script>
export default {
  name: "home-page",
  components: {},
  data() {
    return {};
  },
  methods: {
    goTo(routeName) {
      this.$router.push({ name: routeName });
    }
  }
};
</script>

