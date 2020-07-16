<template>
    <div class="preview" v-bind:style="body">
        <div class="button-group">
            <h5>Page</h5>
            <div class="tab-group">
                <button
                    class="tab-button supr-btn supr-btn--sm supr-btn--block"
                    :class="{ 'is-active': activeTab === 'landing' }"
                    @click="changeActiveTab('landing')"
                >
                    Landing
                </button>
                <button
                    class="tab-button supr-btn supr-btn--sm supr-btn--block"
                    :class="{ 'is-active': activeTab === 'checkout' }"
                    @click="changeActiveTab('checkout')"
                >
                    Checkout
                </button>
                <button
                    class="tab-button supr-btn supr-btn--sm supr-btn--block"
                    :class="{ 'is-active': activeTab === 'success' }"
                    @click="changeActiveTab('success')"
                >
                    Success
                </button>
            </div>
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
            <Landing v-show="activeTab === 'landing'" />
            <Checkout v-show="activeTab === 'checkout'" />
            <Success v-show="activeTab === 'success'" />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Landing from "./Preview/Landing";
import Checkout from "./Preview/Checkout";
import Success from "./Preview/Success";

export default {
    components: { Landing, Checkout, Success },
    data() {
        return {
            viewport: "iPhone",
            storeState: this.$store.state
        };
    },
    computed: {
        ...mapGetters(["body", "activeTab"])
    },
    methods: {
        ...mapActions(["setActiveTab"]),
        changeActiveTab(tabName) {
            this.setActiveTab(tabName);
        }
    }
};
</script>

<style scoped lang="scss">
img {
    max-width: 100%;
}
.tab-group {
    display: flex;
}
.tab-button {
    background-color: gray !important;
    &.is-active {
        background-color: #2983fb !important;
    }
}
</style>
