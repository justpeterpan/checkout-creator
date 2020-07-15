<template>
    <div>
        <h1 class="headline--xl">Configurator</h1>
        <headlines />
        <body-section />
        <buttons-section />
        <save-button :text="`${saveButtonText}`" />
    </div>
</template>

<script>
import SaveButton from "./SaveButton";
import Headlines from "./Headlines";
import BodySection from "./BodySection";
import ButtonsSection from "./ButtonsSection";

import { mapActions, mapGetters } from "vuex";

export default {
    name: "Configurator",

    components: { SaveButton, Headlines, BodySection, ButtonsSection },
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
