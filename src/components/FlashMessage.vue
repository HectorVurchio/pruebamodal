<template>
  <div id="yellowMessage" v-if="this.$store.state.yellowMessage">
    {{ this.$store.state.yellowMessage }}
  </div>
  <div id="redMessage" v-if="this.$store.state.redMessage">
    {{ this.$store.state.redMessage }}
  </div>
</template>
<script>
export default {
  name: "FlashMessage",
};
</script>
<style scoped>
@keyframes yellowfade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}
#yellowMessage {
  animation-name: yellowfade;
  animation-duration: 6s;
  height: 60px;
  font-size: 40px;
  color: #786868;
  box-shadow: 0px 0px 30px 0px #878737;
}
@keyframes redfade {
  from {
    background: red;
  }
  to {
    background: transparent;
  }
}
#redMessage {
  animation-name: redfade;
  animation-duration: 6s;
  height: 60px;
  font-size: 40px;
  color: yellow;
  box-shadow: 0px 0px 30px 0px #483434;
}
</style>
