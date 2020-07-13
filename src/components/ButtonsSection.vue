<template>
  <div>
    <h2>Buttons</h2>
    <!-- TODO split into 1 component and configure via props -->
    <div>
      <h2>Primary Button</h2>

      <!-- ICON COLOR -->
      <div class="input-group">
        <input
          type="color"
          id="font-color"
          :value="suprButtonPrimaryFontColor"
          @change="changePrimaryButtonFontColor($event)"
        />
        <label for="font-color">Font Color</label>
      </div>

      <!-- FONT COLOR -->
      <div class="input-group">
        <input
          type="color"
          id="bg-color"
          :value="suprButtonPrimaryBackgroundColor"
          @change="changePrimaryButtonBackgroundColor($event)"
        />
        <label for="bg-color">Background Color</label>
      </div>
    </div>

    <div>
      <h2>Secondary Button</h2>

      <!-- ICON COLOR -->
      <div class="input-group">
        <input
          type="color"
          id="font-color"
          :value="suprButtonSecondaryFontColor"
          @change="changeSecondaryButtonFontColor($event)"
        />
        <label for="font-color">Font Color</label>
      </div>

      <!-- FONT COLOR -->
      <div class="input-group">
        <input
          type="color"
          id="bg-color"
          :value="suprButtonSecondaryBackgroundColor"
          @change="changeSecondaryButtonBackgronudColor($event)"
        />
        <label for="bg-color">Background Color</label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "suprButtonPrimary",
      "suprButtonPrimaryFontColor",
      "suprButtonPrimaryBackgroundColor",
      "suprButtonSecondaryFontColor",
      "suprButtonSecondaryBackgroundColor",
    ]),
  },
  methods: {
    ...mapActions([
      "setSuprButtonPrimaryFontColor",
      "setSuprButtonPrimaryBackgroundColor",
      "setSuprButtonSecondaryFontColor",
      "setSuprButtonSecondaryBackgroundColor",
    ]),
    changePrimaryButtonFontColor(e) {
      const color = e.target.value;
      this.setSuprButtonPrimaryFontColor(color);
    },
    changePrimaryButtonBackgroundColor(e) {
      const color = e.target.value;
      this.setSuprButtonPrimaryBackgroundColor(color);
    },
    changeSecondaryButtonFontColor(e) {
      const color = e.target.value;
      this.setSuprButtonSecondaryFontColor(color);
    },
    changeSecondaryButtonBackgronudColor(e) {
      const color = e.target.value;
      this.setSuprButtonSecondaryBackgroundColor(color);
    },
  },
};
</script>
