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
                color: "#000000"
            },
            headline: {
                "font-family": "'Montserrat', sans-serif",
                color: "#000000",
                "font-weight": "normal",
                "text-transform": "capitalize"
            },
            "text--muted": {
                color: "#000000"
            },
            "supr-btn": {
                "border-radius": "4px"
            },
            "supr-btn--primary": {
                color: "#ffffff",
                "background-color": "#000"
            },
            "supr-btn--secondary": {
                color: "#000000",
                "background-color": "#000000",
                "box-shadow": "none"
            },
            icon: {
                fill: "#000000"
            }
        },
        saveButtonText: "Save Config",
        activeSection: "headline",
        activeTab: "landing"
    },
    getters,
    mutations,
    actions
});
