<template>
  <FormularioContactoComponent />
</template>

<script>
import FormularioContactoComponent from "@/components/FormularioContactoComponent.vue";

export default {
  name: "App",
  components: {
    FormularioContactoComponent,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
