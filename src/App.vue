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
@import "./sass/styles.scss";

html {
  box-sizing: border-box;
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  padding: 0;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-template-columns: 400px 1fr;
}

.aside {
  background-color: #fff;
  padding: 24px 48px;
  height: 100vh;
  overflow-y: scroll;
  font-size: 12px;

  & > * + * {
    margin: 24px 0 0 0;
  }
}

.main {
  background-color: whitesmoke;
  // margin-top: calc((812px - (812px / 1.618)) - 130px);
  display: block;
  position: relative;
}
</style>
