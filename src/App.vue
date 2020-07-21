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
    grid-template-columns: 320px 1fr;
}

.main {
    background-color: whitesmoke;
    // margin-top: calc((812px - (812px / 1.618)) - 130px);
    display: block;
    position: relative;
}
</style>
