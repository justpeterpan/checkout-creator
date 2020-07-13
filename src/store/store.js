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
        "background-color": "#000",
        color: "#000",
      },
      headline: {
        color: "#000",
        "font-weight": "normal",
        "text-transform": "capitalize",
      },
      "text--muted": {
        color: "#000",
      },
      "supr-button--primary": {
        color: "#000",
      },
      "supr-button--secondary": {
        color: "#000",
      },
      icon: {
        fill: "#000",
      },
    },
    saveButtonText: "Save Config",
  },
  getters,
  mutations,
  actions,
});
