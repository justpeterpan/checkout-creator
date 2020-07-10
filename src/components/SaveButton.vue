<template>
  <div>
    <button @click="submitConfig">{{ text }}</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { convertJsonToCss } from "../utils/json-to-css";

export default {
  props: ["text"],
  data() {
    return {
      config: {},
    };
  },
  mounted() {
    if (this.state) {
      this.config = this.state;
    }
  },
  computed: { ...mapGetters({ state: "state" }) },
  methods: {
    submitConfig() {
      const cssFile = convertJsonToCss(this.config.config);

      fetch("http://localhost:4000/", {
        method: "POST",
        headers: {
          "Content-Type": "plain/text",
        },
        body: cssFile,
      });

      // this.$http
      //   .post("https://checkout-creator.firebaseio.com/data.json", this.config)
      //   .then((res) => console.log(res));
    },
  },
};
</script>

<style lang="scss" scoped></style>
