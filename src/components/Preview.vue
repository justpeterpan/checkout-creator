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
@import "../sass/styles.scss";
img {
    max-width: 100%;
}

.preview {
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll;
    transition: all 0.3s ease-in-out;

    .button-group {
        position: absolute;
        top: 24px;
        right: 24px;

        button + button {
            margin-left: 8px;
        }
    }

    .viewport {
        background-color: #fff;
        overflow-x: hidden;
        overflow-y: scroll;
        scrollbar-width: none;
        transition: all 0.3s ease-in-out;

        &::-webkit-scrollbar {
            display: none;
        }

        &.iphone {
            width: 375px;
            height: 812px;
            border-radius: 40px;
            box-shadow: 0 0 0 15px #f0f0f0, 0 0 0 20px #fff,
                40px 40px 40px 0 rgba(0, 0, 0, 0.3);
        }

        &.iphone--dark {
            box-shadow: 0 0 0 15px #111, 0 0 0 20px #333,
                40px 40px 40px 0 rgba(0, 0, 0, 0.3);
        }

        &.iphone--light {
            box-shadow: 0 0 0 15px #f0f0f0, 0 0 0 20px #fff,
                40px 40px 40px 0 rgba(0, 0, 0, 0.3);
        }

        &.ipad {
            width: 1024px;
            height: 768px;
            border-radius: 8px;
            box-shadow: 0 0 0 15px #f0f0f0, 0 0 0 20px #fff,
                40px 40px 40px 0 rgba(0, 0, 0, 0.3);
        }

        &.ipad--light {
            box-shadow: 0 0 0 15px #f0f0f0, 0 0 0 20px #fff,
                40px 40px 40px 0 rgba(0, 0, 0, 0.3);
        }

        header {
            width: 100%;
            background-color: rgba(255, 255, 255, 0.9);
            padding: 16px;
            display: flex;
            flex-direction: column;
            place-items: center;
            place-content: center;
            position: sticky;
            top: 0;
        }

        main {
            padding: 16px 48px;
        }
    }
}
</style>
