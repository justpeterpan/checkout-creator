import Vue from "vue";
import Vuex from "vuex";

import * as actions from "./actions";
import * as mutations from "./mutations";
import * as getters from "./getters";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        config: {
            body: {
                "font-family": "'Montserrat', sans-serif",
                color: "#000"
            },
            headline: {
                "font-family": "'Montserrat', sans-serif",
                color: "#000",
                "font-weight": "normal",
                "text-transform": "capitalize"
            },
            "text--muted": {
                color: "#000"
            },
            "supr-btn--primary": {
                color: "#fff",
                "background-color": "#000",
            },
            "supr-btn--secondary": {
                color: "#000",
                "background-color": "#000",
                "box-shadow": "none",
            },
            icon: {
                fill: "#000"
            }
        },
        saveButtonText: "Save Config",
        activeSection: "headline"
    },
    getters,
    mutations,
    actions
});
