<template>
  <div id="app">
    <configurator class="aside" />
    <preview class="main" />
  </div>
</template>

<script>
import Configurator from "./components/Configurator.vue";
import Preview from "./components/Preview.vue";

export default {
  name: "App",
  components: {
    Configurator,
    Preview
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-template-columns: 480px 1fr;

  &.layout {
    grid-template-columns: 1fr;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    overflow-y: scroll;
  }
}

$base-unit: 16px;

.aside {
  background-color: #fff;
  padding: $base-unit * 2;
  height: 100vh;
  overflow-y: scroll;
  font-size: 12px;

  & > * + * {
    margin: $base-unit 0 0 0;
  }
}

.main {
  // margin-top: calc((812px - (812px / 1.618)) - 130px);
  display: block;
  position: relative;
}
</style>
