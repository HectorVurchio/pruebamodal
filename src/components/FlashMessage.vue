<template>
  <div
    class="alert alert-success"
    role="alert"
    v-if="this.$store.state.yellowMessage"
  >
    {{ this.$store.state.yellowMessage }}
  </div>
  <div
    class="alert alert-danger"
    role="alert"
    v-if="this.$store.state.redMessage"
  >
    {{ this.$store.state.redMessage }}
  </div>
</template>
<script>
export default {
  name: "FlashMessage",
};
</script>
<style scoped></style>
