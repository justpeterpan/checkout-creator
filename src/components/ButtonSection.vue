<template>
    <section
        class="config-section"
        v-bind:class="activeSection === 'buttons' ? 'active' : ''"
    >
        <div
            id="buttons"
            class="config-section__header"
            @click="changeActiveSection($event)"
        >
            <h2 class="headline--lg">
                Buttons
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
                    v-if="activeSection != 'buttons'"
                    x1="12"
                    y1="9"
                    x2="12"
                    y2="15"
                />
            </svg>
        </div>

        <!-- TODO split into 1 component and configure via props -->
        <div class="config-section__content" v-if="activeSection === 'buttons'">
            <form action="" class="form boxed">
                <div>
                    <div class="input-group">
                        <input
                            type="number"
                            min="0"
                            name="border radius"
                            id="btn-border-radius"
                            :value="getBorderRadiusValue"
                            @change="changeSuprButtonoBorderRadius($event)"
                        />
                        <label for="btn-border-radius">Border Radius</label>
                    </div>
                </div>
                <div>
                    <h3 class="headline--md">Primary Button</h3>
                    <!-- ICON COLOR -->
                    <div class="input-group">
                        <input
                            type="color"
                            id="font-color"
                            :value="config['supr-btn--primary'].color"
                            @change="changePrimaryButtonFontColor($event)"
                        />
                        <label for="font-color">Font Color</label>
                    </div>

                    <!-- FONT COLOR -->
                    <div class="input-group">
                        <input
                            type="color"
                            id="bg-color"
                            :value="
                                config['supr-btn--primary']['background-color']
                            "
                            @change="changePrimaryButtonBackgroundColor($event)"
                        />
                        <label for="bg-color">Background Color</label>
                    </div>
                </div>

                <div>
                    <h3 class="headline--md">Secondary Button</h3>

                    <!-- ICON COLOR -->
                    <div class="input-group">
                        <input
                            type="color"
                            id="font-color"
                            :value="config['supr-btn--secondary'].color"
                            @change="changeSecondaryButtonFontColor($event)"
                        />
                        <label for="font-color">Font Color</label>
                    </div>

                    <!-- FONT COLOR -->
                    <div class="input-group">
                        <input
                            type="color"
                            id="bg-color"
                            :value="
                                config['supr-btn--secondary'][
                                    'background-color'
                                ]
                            "
                            @change="
                                changeSecondaryButtonBackgronudColor($event)
                            "
                        />
                        <label for="bg-color">Background Color</label>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
    computed: {
        ...mapState(["config", "activeSection"]),
        ...mapGetters(["borderRadiusValue"]),
        getBorderRadiusValue() {
            return this.config["supr-btn"]["border-radius"].replace(
                /[^\d.-]/g,
                ""
            );
        }
    },
    methods: {
        ...mapActions([
            "setSuprButtonPrimaryFontColor",
            "setSuprButtonPrimaryBackgroundColor",
            "setSuprButtonSecondaryFontColor",
            "setSuprButtonSecondaryBackgroundColor",
            "setActiveSection",
            "setSuprButtonBorderRadius"
        ]),
        changePrimaryButtonFontColor(e) {
            const color = e.target.value;
            this.setSuprButtonPrimaryFontColor(color);
        },
        changePrimaryButtonBackgroundColor(e) {
            const color = e.target.value;
            this.setSuprButtonPrimaryBackgroundColor(color);
        },
        changeSecondaryButtonFontColor(e) {
            const color = e.target.value;
            this.setSuprButtonSecondaryFontColor(color);
        },
        changeSecondaryButtonBackgronudColor(e) {
            const color = e.target.value;
            this.setSuprButtonSecondaryBackgroundColor(color);
        },
        changeActiveSection(e) {
            const section = e.target.id;
            this.setActiveSection(section);
        },
        changeSuprButtonoBorderRadius(e) {
            const radius = `${e.target.value}px`;
            this.setSuprButtonBorderRadius(radius);
        }
    }
};
</script>
