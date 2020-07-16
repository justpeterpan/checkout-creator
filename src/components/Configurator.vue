<template>
    <div>
        <h1 class="headline--xl">Configurator</h1>
        <headline-section />
        <body-section />
        <button-section />
        <save-button :text="`${saveButtonText}`" />
    </div>
</template>

<script>
import SaveButton from "./SaveButton";
import HeadlineSection from "./HeadlineSection";
import BodySection from "./BodySection";
import ButtonSection from "./ButtonSection";

import { mapActions, mapGetters } from "vuex";

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
        ...mapGetters(["saveButtonText"])
    },
    methods: {
        ...mapActions(["fetchDataFromApi"])
    },
    created() {
        this.fetchDataFromApi();
        console.log("STORESTATE:", this.storeState);
    }
};
</script>

<style scoped lang="scss"></style>
