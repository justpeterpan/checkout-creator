import Vue from "vue";
import Vuex from "vuex";

import * as actions from "./actions";
import * as mutations from "./mutations";
import * as getters from "./getters";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    config: {
      headlineFontColor: {
        color: ""
      }
    },
    saveButtonText: "Save Config"
  },
  getters,
  mutations,
  actions
});
