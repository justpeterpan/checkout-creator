<template>
  <div class="wrapper">
    <h1>Preview</h1>
    <p class="desc" v-bind:style="headlineFontColor">Hello</p>
    {{ headlineFontColor }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      storeState: this.$store.state
    };
  },
  computed: { ...mapGetters(["headlineFontColor"]) }
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  transition: all 0.3s ease-in-out;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &.white {
    box-shadow: 0 0 0 15px #f0f0f0, 0 0 0 20px #fff,
      40px 40px 40px 0 rgba(0, 0, 0, 0.3);
  }

  &.dark {
    box-shadow: 0 0 0 15px #111, 0 0 0 20px #333,
      40px 40px 40px 0 rgba(0, 0, 0, 0.3);
  }

  &.iphone {
    width: 375px;
    height: 812px;
    border-radius: 40px;
  }

  &.ipad {
    width: 1024px;
    height: 768px;
    border-radius: 8px;

    .foo {
      display: none;
    }
  }
}
</style>
