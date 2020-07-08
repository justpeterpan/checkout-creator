<template>
  <div>
    <h2>Headlines</h2>
    <div class="input-group">
      <input
        type="color"
        id="icon-color"
        :value="headlineIconColorValue"
        @change="changeHeadlineIconColor($event)"
      />
      <label for="icon-color">Icon Color</label>
    </div>
    <div class="input-group">
      <input
        type="color"
        id="font-color"
        :value="headlineFontColorValue"
        @change="changeHeadlineFontColor($event)"
      />
      <label for="font-color">Font Color</label>
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
    ...mapActions(["setHeadlineFontColor", "setHeadlineIconColor"]),
    changeHeadlineFontColor(e) {
      const color = e.target.value;
      this.setHeadlineFontColor(color);
    },
    changeHeadlineIconColor(e) {
      const color = e.target.value;
      this.setHeadlineIconColor(color);
    },
  },
};
</script>

<style lang="scss" scoped></style>
