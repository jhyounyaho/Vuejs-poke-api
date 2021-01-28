import Vue from 'vue';
import Vuex from 'vuex';
import actions from "@/store/actions";
import mutations from "@/store/mutations";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        list: [],
        info: [],
        showDetail: false,
        isScrap: false,
    },
    mutations,
    actions,
})