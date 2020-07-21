<template>
    <div>
        <button
            class="supr-btn supr-btn--success supr-btn--md supr-btn--block"
            @click="submitConfig"
        >
            {{ text }}
        </button>
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
            this.$http
                .post(
                    "https://sandbox.supr.com/api/checkout-config",
                    this.config.config,
                    { emulateJSON: true }
                )
                .then(res => console.log(res));
        }
    }
};
</script>

<style lang="scss" scoped></style>
