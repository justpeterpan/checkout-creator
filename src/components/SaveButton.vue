<template>
  <div>
    <button @click="submitConfig">{{ text }}</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["text"],
  data() {
    return {
      config: {}
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
      console.log(this.config);
      
      this.$http
        .post("https://checkout-creator.firebaseio.com/data.json", this.config)
        .then(res => console.log(res));
    }
  }
};
</script>

<style lang="scss" scoped></style>
