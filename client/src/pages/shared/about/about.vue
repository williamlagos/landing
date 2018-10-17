<style lang="scss" scoped src="./about.scss"></style>
<template src="./about.html"></template>

<script>
export default {
  name: "about-page",
  components: {},
  data() {
    return {};
  },
  methods: {
    goTo(url) {
      window.open(url, "_blank");
    }
  }
};
</script>

