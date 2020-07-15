<template>
    <div class="preview" v-bind:style="body">
        <div class="button-group">
            <h5>Viewport</h5>
            <button
                class=""
                v-bind:class="viewport === 'iPhone' ? 'active' : ''"
                @click="viewport = 'iPhone'"
            >
                iPhone
            </button>
            <button
                class=""
                v-bind:class="viewport === 'iPad' ? 'active' : ''"
                @click="viewport = 'iPad'"
            >
                iPad
            </button>
        </div>
        <div
            class="viewport iphone"
            v-bind:class="viewport === 'iPhone' ? 'iphone' : 'ipad'"
        >
            <Tabs>
                <Tab name="Landing Page" selected="true"><Landing /></Tab>
                <Tab name="Checkout Page"><Checkout /></Tab>
                <Tab name="Success Page"><Success /></Tab>
            </Tabs>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Tab from "./Preview/Tab";
import Tabs from "./Preview/Tabs";
import Landing from "./Preview/Landing";
import Checkout from "./Preview/Checkout";
import Success from "./Preview/Success";

export default {
    components: { Tab, Tabs, Landing, Checkout, Success },
    data() {
        return {
            viewport: "iPhone",
            storeState: this.$store.state
        };
    },
    computed: {
        ...mapGetters(["body"])
    }
};
</script>

<style scoped lang="scss">
img {
    max-width: 100%;
}
</style>
