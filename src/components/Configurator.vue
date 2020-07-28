<template>
    <div>
        <h1 class="headline--xl">Configurator</h1>
        <div>
            <headline-section />
            <body-section />
            <button-section />
        </div>
        <save-button :text="`${saveButtonText}`" />
        <button
            class="supr-btn supr-btn--danger supr-btn--md supr-btn--block"
            @click="resetConfig"
        >
            Reset Config
        </button>
    </div>
</template>

<script>
import SaveButton from "./SaveButton";
import HeadlineSection from "./HeadlineSection";
import BodySection from "./BodySection";
import ButtonSection from "./ButtonSection";

import { mapActions, mapState } from "vuex";

export default {
    name: "Configurator",

    components: { SaveButton, HeadlineSection, BodySection, ButtonSection },
    data() {
        return {
            activeSection: "",
            storeState: this.$store.state
        };
    },
    computed: {
        ...mapState(["saveButtonText"])
    },
    methods: {
        ...mapActions(["fetchDataFromApi"]),
        resetConfig() {
            this.$http
                .post(
                    "https://sandbox.supr.com/api/checkout-config",
                    {},
                    { emulateJSON: true }
                )
                .then(res => console.log(res));
        }
    },
    created() {
        this.fetchDataFromApi();
        console.log("STORESTATE:", this.storeState);
    }
};
</script>

<style scoped lang="scss"></style>
