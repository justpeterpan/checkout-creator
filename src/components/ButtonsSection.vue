<template>
    <section
        class="config-section"
        v-bind:class="activeSection === 'buttons' ? 'active' : ''"
    >
        <h2
            id="buttons"
            class="headline--lg"
            @click="changeActiveSection($event)"
        >
            Buttons
        </h2>
        <!-- TODO split into 1 component and configure via props -->
        <div class="section__content" v-if="activeSection === 'buttons'">
            <form action="" class="form boxed">
                <div>
                    <h3 class="headline--md">Primary Button</h3>
                    <!-- ICON COLOR -->
                    <div class="input-group">
                        <input
                            type="color"
                            id="font-color"
                            :value="suprButtonPrimaryFontColor"
                            @change="changePrimaryButtonFontColor($event)"
                        />
                        <label for="font-color">Font Color</label>
                    </div>

                    <!-- FONT COLOR -->
                    <div class="input-group">
                        <input
                            type="color"
                            id="bg-color"
                            :value="suprButtonPrimaryBackgroundColor"
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
                            :value="suprButtonSecondaryFontColor"
                            @change="changeSecondaryButtonFontColor($event)"
                        />
                        <label for="font-color">Font Color</label>
                    </div>

                    <!-- FONT COLOR -->
                    <div class="input-group">
                        <input
                            type="color"
                            id="bg-color"
                            :value="suprButtonSecondaryBackgroundColor"
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
import { mapActions, mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters([
            "suprButtonPrimary",
            "suprButtonPrimaryFontColor",
            "suprButtonPrimaryBackgroundColor",
            "suprButtonSecondaryFontColor",
            "suprButtonSecondaryBackgroundColor",
            "activeSection"
        ])
    },
    methods: {
        ...mapActions([
            "setSuprButtonPrimaryFontColor",
            "setSuprButtonPrimaryBackgroundColor",
            "setSuprButtonSecondaryFontColor",
            "setSuprButtonSecondaryBackgroundColor",
            "setActiveSection"
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
        }
    }
};
</script>
