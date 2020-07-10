<template>
  <div>
    <h2>Headlines</h2>

    <!-- ICON COLOR -->
    <div class="input-group">
      <input
        type="color"
        id="icon-color"
        :value="headlineIconColorValue"
        @change="changeHeadlineIconColor($event)"
      />
      <label for="icon-color">Icon Color</label>
    </div>

    <!-- FONT COLOR -->
    <div class="input-group">
      <input
        type="color"
        id="font-color"
        :value="headlineFontColorValue"
        @change="changeHeadlineFontColor($event)"
      />
      <label for="font-color">Font Color</label>
    </div>

    <!-- FONT FAMILY  -->
    <div class="input-group">
      <select name="" id="font-family" @change="changeBodyFontFamily($event)">
        <option value="IBM Plex Sans" selected>IBM Plex Sans</option>
        <option value="Montserrat">Montserrat</option>
        <option value="DIN Next LT Pro">DIN Next LT Pro</option>
        <option value="Jost">Jost</option>
        <option value="Open Sans">Open Sans</option>
      </select>
      <label for="font-family">font family</label>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["headlineIconColorValue", "headlineFontColorValue"]),
  },
  methods: {
    ...mapActions([
      "setHeadlineFontColor",
      "setHeadlineIconColor",
      "setBodyFontFamily",
    ]),
    changeHeadlineFontColor(e) {
      const color = e.target.value;
      this.setHeadlineFontColor(color);
    },
    changeHeadlineIconColor(e) {
      const color = e.target.value;
      this.setHeadlineIconColor(color);
    },
    changeBodyFontFamily(e) {
      const fontFamily = e.target.value + ", sans-serif";
      this.setBodyFontFamily(fontFamily);
    },
  },
};
</script>

<style lang="scss" scoped></style>
