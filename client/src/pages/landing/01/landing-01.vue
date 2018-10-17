<style lang="scss" scoped src="./landing-01.scss"></style>
<template src="./landing-01.html"></template>

<script>
export default {
  name: "landing-page",
  components: {},
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

