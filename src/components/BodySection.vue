<template>
    <div>
        <h2>Body</h2>
        <form action="" class="form boxed">
            <!-- FONT FAMILY  -->
            <div class="input-group">
                <select
                    name=""
                    id="font-family"
                    @change="changeBodyFontFamily($event)"
                >
                    <option value="IBM Plex Sans" selected
                        >IBM Plex Sans</option
                    >
                    <option value="Montserrat">Montserrat</option>
                    <option value="DIN Next LT Pro">DIN Next LT Pro</option>
                    <option value="Jost">Jost</option>
                    <option value="Open Sans">Open Sans</option>
                </select>
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
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(["bodyFontColor", "textMutedFontColor"])
    },
    methods: {
        ...mapActions([
            "setBodyFontFamily",
            "setBodyFontColor",
            "setTextMutedFontColor"
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
        }
    }
};
</script>
