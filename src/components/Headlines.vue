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

    <!-- FONT WEIGHT -->
    <fieldset>
      <legend>Font weight</legend>
      <div class="control control--radio">
        <label for="font-weight-light">
          <input
            type="radio"
            value="lighter"
            name="headline-font-weight"
            id="font-weight-light"
            @change="changeHeadlineFontWeight($event)"
            :checked="headlineFontWeight === 'lighter'"
          />
          <span class="control__indicator"></span>
          light
        </label>
      </div>
      <div class="control control--radio">
        <label for="font-weight-normal">
          <input
            type="radio"
            value="normal"
            name="headline-font-weight"
            id="font-weight-normal"
            @change="changeHeadlineFontWeight($event)"
            :checked="headlineFontWeight === 'normal'"
          />
          <span class="control__indicator"></span>
          normal
        </label>
      </div>
      <div class="control control--radio">
        <label for="font-weight-bold">
          <input
            type="radio"
            value="bold"
            name="headline-font-weight"
            id="font-weight-bold"
            @change="changeHeadlineFontWeight($event)"
            :checked="headlineFontWeight === 'bold'"
          />
          <span class="control__indicator"></span>
          bold
        </label>
      </div>
    </fieldset>

    <!-- TEXT TRANSFORM -->
    <fieldset>
      <legend>Text transform</legend>
      <div class="control control--radio">
        <label for="text-transform-upppercase">
          <input
            type="radio"
            value="uppercase"
            name="headline-case"
            id="text-transform-upppercase"
            @change="changeHeadlineTextTransform($event)"
            :checked="headlineTextTransform === 'uppercase'"
          />
          <span class="control__indicator"></span>
          uppercase
        </label>
      </div>
      <div class="control control--radio">
        <label for="text-transform-capitalize">
          <input
            type="radio"
            value="capitalize"
            name="headline-case"
            id="text-transform-capitalize"
            @change="changeHeadlineTextTransform($event)"
            :checked="headlineTextTransform === 'capitalize'"
          />
          <span class="control__indicator"></span>
          capitalize
        </label>
      </div>
      <div class="control control--radio">
        <label for="text-transform-lowercase">
          <input
            type="radio"
            value="lowercase"
            name="headline-case"
            id="text-transform-lowercase"
            @change="changeHeadlineTextTransform($event)"
            :checked="headlineTextTransform === 'lowercase'"
          />
          <span class="control__indicator"></span>
          lowercase
        </label>
      </div>
    </fieldset>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "headlineIconColorValue",
      "headlineFontColorValue",
      "headlineFontWeight",
      "headlineTextTransform",
    ]),
  },
  methods: {
    ...mapActions([
      "setHeadlineFontColor",
      "setHeadlineIconColor",
      "setHeadlineFontWeight",
      "setHeadlineTextTransform",
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
    changeHeadlineFontWeight(e) {
      const fontWeight = e.target.value;
      this.setHeadlineFontWeight(fontWeight);
    },
    changeHeadlineTextTransform(e) {
      const textTransform = e.target.value;
      this.setHeadlineTextTransform(textTransform);
    },
    changeBodyFontFamily(e) {
      const fontFamily = `'${e.target.value}', sans-serif`;
      console.log(fontFamily);
      this.setBodyFontFamily(fontFamily);
    },
  },
};
</script>

<style lang="scss" scoped></style>
