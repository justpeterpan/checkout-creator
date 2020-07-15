<template>
    <section
        class="config-section"
        v-bind:class="activeSection === 'body' ? 'active' : ''"
    >
        <div
            id="body"
            class="config-section__header"
            @click="changeActiveSection($event)"
        >
            <h2 class="headline--lg">
                Body
            </h2>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-circle-plus"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="var(--action-color)"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="12" r="9" />
                <line x1="9" y1="12" x2="15" y2="12" />
                <line
                    v-if="activeSection !== 'body'"
                    x1="12"
                    y1="9"
                    x2="12"
                    y2="15"
                />
            </svg>
        </div>
        <div class="config-section__content" v-if="activeSection === 'body'">
            <form action="" class="form boxed">
                <!-- FONT FAMILY  -->
                <div class="input-group">
                    <select
                        name=""
                        id="font-family"
                        @change="changeBodyFontFamily($event)"
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

                <!-- FONT COLOR -->
                <div class="input-group">
                    <input
                        type="color"
                        id="font-color"
                        :value="bodyFontColor"
                        @change="changeBodyFontColor($event)"
                    />
                    <label for="font-color">Font Color</label>
                </div>

                <!-- MUTED FONT COLOR -->
                <div class="input-group">
                    <input
                        type="color"
                        id="muted-font-color"
                        :value="textMutedFontColor"
                        @change="changeBodyMutedFontColor($event)"
                    />
                    <label for="muted-font-color">Text Muted Color</label>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters([
            "bodyFontColor",
            "textMutedFontColor",
            "activeSection",
            "bodyFontFamily"
        ])
    },
    methods: {
        ...mapActions([
            "setBodyFontFamily",
            "setBodyFontColor",
            "setTextMutedFontColor",
            "setActiveSection"
        ]),
        changeBodyFontFamily(e) {
            const fontFamily = `"${e.target.value}", sans-serif`;
            this.setBodyFontFamily(fontFamily);
        },
        changeBodyFontColor(e) {
            const color = e.target.value;
            this.setBodyFontColor(color);
        },
        changeBodyMutedFontColor(e) {
            const color = e.target.value;
            this.setTextMutedFontColor(color);
        },
        changeActiveSection(e) {
            const section = e.target.id;
            this.setActiveSection(section);
        },
        isIbmPlexFont() {
            return this.bodyFontFamily === `"IBM Plex Sans", sans-serif`;
        },
        isMontserratFont() {
            return this.bodyFontFamily === `"Montserrat", sans-serif`;
        },
        isDinNextFont() {
            return this.bodyFontFamily === `"DIN Next LT Pro", sans-serif`;
        },
        isJostFont() {
            return this.bodyFontFamily === `"Jost", sans-serif`;
        },
        isOpenSansFont() {
            return this.bodyFontFamily === `"Open Sans", sans-serif`;
        }
    }
};
</script>
