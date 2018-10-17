<style lang="scss" scoped src="./landing-02.scss"></style>
<template src="./landing-02.html"></template>

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

