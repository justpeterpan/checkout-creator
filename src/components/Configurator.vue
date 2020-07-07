<template>
  <div>
    <h1>Branding Configurator</h1>
    <input
      type="color"
      id="headline"
      :value="headlineFontColorValue"
      @change="changeHeadlineFontColor($event)"
    />
    <label for="headline">Change Font Color</label>
    <save-button text="Save Config" />
  </div>
</template>

<script>
import SaveButton from "./SaveButton.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Configurator",
  components: { SaveButton },
  data() {
    return {
      storeState: this.$store.state
    };
  },
  computed: {
    ...mapGetters(["headlineFontColor", "headlineFontColorValue"])
  },
  methods: {
    ...mapActions(["setHeadlineFontColor", "fetchDataFromApi"]),
    changeHeadlineFontColor(e) {
      const color = e.target.value;
      this.setHeadlineFontColor(color);
    }
  },
  created() {
    this.fetchDataFromApi(this.databaseEntryKey);
  }
};
</script>

<style scoped lang="scss"></style>
