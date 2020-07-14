<template>
    <section
        class="config-section"
        v-bind:class="activeSection === 'headline' ? 'active' : ''"
    >
        <h2
            id="headline"
            class="headline--lg"
            @click="changeActiveSection($event)"
        >
            Headlines
        </h2>
        <div class="section__content" v-if="activeSection === 'headline'">
            <form action="" class="form boxed">
                <!-- ICON COLOR -->
                <div class="input-group">
                    <input
                        type="color"
                        id="icon-color"
                        :value="headlineIconColorValue"
                        @change="changeHeadlineIconColor($event)"
                    />
                    <label for="icon-color">Icon Color</label>
                </div>

                <!-- FONT COLOR -->
                <div class="input-group">
                    <input
                        type="color"
                        id="font-color"
                        :value="headlineFontColorValue"
                        @change="changeHeadlineFontColor($event)"
                    />
                    <label for="font-color">Font Color</label>
                </div>

                <!-- FONT FAMILY  -->
                <div class="input-group">
                    <select
                        name=""
                        id="font-family"
                        @change="changeHeadlineFontFamily($event)"
                    >
                        <option
                            value="IBM Plex Sans"
                            :selected="isIbmPlexFont()"
                            >IBM Plex Sans</option
                        >
                        <option
                            value="Montserrat"
                            :selected="isMontserratFont()"
                            >Montserrat</option
                        >
                        <option
                            value="DIN Next LT Pro"
                            :selected="isDinNextFont()"
                            >DIN Next LT Pro</option
                        >
                        <option value="Jost" :selected="isJostFont()"
                            >Jost</option
                        >
                        <option value="Open Sans" :selected="isOpenSansFont()"
                            >Open Sans</option
                        >
                    </select>
                    <span class="select-indicator">
                        <svg
                            width="10"
                            height="10"
                            version="1.1"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g transform="scale(0.833333)">
                                <path
                                    fill="none"
                                    stroke="#000"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1"
                                    d="M0.541,5.627l11.125,12.573l-2.2212e-08,-2.51095e-08c0.182964,0.206831 0.498954,0.226179 0.705785,0.043215c0.0152727,-0.0135103 0.0297047,-0.0279423 0.043215,-0.043215l11.126,-12.573"
                                ></path>
                            </g>
                        </svg>
                    </span>
                    <label for="font-family">font family</label>
                </div>

                <!-- FONT WEIGHT -->
                <fieldset>
                    <legend>Font weight</legend>
                    <div class="control control--radio">
                        <label for="font-weight-light">
                            <input
                                type="radio"
                                value="lighter"
                                name="headline-font-weight"
                                id="font-weight-light"
                                @change="changeHeadlineFontWeight($event)"
                                :checked="headlineFontWeight === 'lighter'"
                            />
                            <span class="control__indicator"></span>
                            light
                        </label>
                    </div>
                    <div class="control control--radio">
                        <label for="font-weight-normal">
                            <input
                                type="radio"
                                value="normal"
                                name="headline-font-weight"
                                id="font-weight-normal"
                                @change="changeHeadlineFontWeight($event)"
                                :checked="headlineFontWeight === 'normal'"
                            />
                            <span class="control__indicator"></span>
                            normal
                        </label>
                    </div>
                    <div class="control control--radio">
                        <label for="font-weight-bold">
                            <input
                                type="radio"
                                value="bold"
                                name="headline-font-weight"
                                id="font-weight-bold"
                                @change="changeHeadlineFontWeight($event)"
                                :checked="headlineFontWeight === 'bold'"
                            />
                            <span class="control__indicator"></span>
                            bold
                        </label>
                    </div>
                </fieldset>

                <!-- TEXT TRANSFORM -->
                <fieldset>
                    <legend>Text transform</legend>
                    <div class="control control--radio">
                        <label for="text-transform-upppercase">
                            <input
                                type="radio"
                                value="uppercase"
                                name="headline-case"
                                id="text-transform-upppercase"
                                @change="changeHeadlineTextTransform($event)"
                                :checked="headlineTextTransform === 'uppercase'"
                            />
                            <span class="control__indicator"></span>
                            uppercase
                        </label>
                    </div>
                    <div class="control control--radio">
                        <label for="text-transform-capitalize">
                            <input
                                type="radio"
                                value="capitalize"
                                name="headline-case"
                                id="text-transform-capitalize"
                                @change="changeHeadlineTextTransform($event)"
                                :checked="
                                    headlineTextTransform === 'capitalize'
                                "
                            />
                            <span class="control__indicator"></span>
                            capitalize
                        </label>
                    </div>
                    <div class="control control--radio">
                        <label for="text-transform-lowercase">
                            <input
                                type="radio"
                                value="lowercase"
                                name="headline-case"
                                id="text-transform-lowercase"
                                @change="changeHeadlineTextTransform($event)"
                                :checked="headlineTextTransform === 'lowercase'"
                            />
                            <span class="control__indicator"></span>
                            lowercase
                        </label>
                    </div>
                </fieldset>
            </form>
        </div>
    </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters([
            "headlineIconColorValue",
            "headlineFontColorValue",
            "headlineFontWeight",
            "headlineTextTransform",
            "activeSection",
            "headlineFontFamily"
        ])
    },
    methods: {
        ...mapActions([
            "setHeadlineFontFamily",
            "setHeadlineFontColor",
            "setHeadlineIconColor",
            "setHeadlineFontWeight",
            "setHeadlineTextTransform",
            "setActiveSection"
        ]),
        changeHeadlineFontColor(e) {
            const color = e.target.value;
            this.setHeadlineFontColor(color);
        },
        changeHeadlineIconColor(e) {
            const color = e.target.value;
            this.setHeadlineIconColor(color);
        },
        changeHeadlineFontWeight(e) {
            const fontWeight = e.target.value;
            this.setHeadlineFontWeight(fontWeight);
        },
        changeHeadlineTextTransform(e) {
            const textTransform = e.target.value;
            this.setHeadlineTextTransform(textTransform);
        },
        changeHeadlineFontFamily(e) {
            const fontFamily = `"${e.target.value}", sans-serif`;
            this.setHeadlineFontFamily(fontFamily);
        },
        changeActiveSection(e) {
            const section = e.target.id;
            this.setActiveSection(section);
        },
        isIbmPlexFont() {
            return this.headlineFontFamily === `"IBM Plex Sans", sans-serif`;
        },
        isMontserratFont() {
            return this.headlineFontFamily === `"Montserrat", sans-serif`;
        },
        isDinNextFont() {
            return this.headlineFontFamily === `"DIN Next LT Pro", sans-serif`;
        },
        isJostFont() {
            return this.headlineFontFamily === `"Jost", sans-serif`;
        },
        isOpenSansFont() {
            return this.headlineFontFamily === `"Open Sans", sans-serif`;
        }
    }
};
</script>

<style lang="scss" scoped></style>
