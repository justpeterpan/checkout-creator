<template>
    <div>
        <h1 class="headline--xl">Branding Configurator</h1>
        <headlines />
        <save-button :text="`${saveButtonText}`" />
    </div>
</template>

<script>
import SaveButton from "./SaveButton";
import Headlines from "./Headlines";

import { mapActions, mapGetters } from "vuex";

export default {
    name: "Configurator",
    components: { SaveButton, Headlines },
    data() {
        return {
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
    }
};
</script>

<style scoped lang="scss"></style>
