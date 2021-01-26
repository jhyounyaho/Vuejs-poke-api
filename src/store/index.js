import Vue from 'vue';
import Vuex from 'vuex';

import {
   fetchPokeInfo,
   fetchPokeList,
} from '../api/index.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        list: {},
        info: [],
    },
    getters: {

    },
    mutations: {
        GET_POKE_LIST(state, list) {
            state.list = list;
        },
        GET_POKE_INFO(state, info) {
            state.info = info;
        },
    },
    actions: {
        FETCH_POKE_LIST({ commit }, limit) {
            fetchPokeList(limit)
                .then(({ data }) => {
                    data.results.forEach(poke => {
                        const pokeSplit = poke.url.split('/');
                        poke.id = pokeSplit[pokeSplit.length - 2]
                    })
                    commit('GET_POKE_LIST', data.results)
                    return data;
                })
                .catch(err => console.log(err))
        },
        FETCH_POKE_INFO({ commit }, id) {
            fetchPokeInfo(id)
                .then(({ data }) => {
                    commit('GET_POKE_INFO', data)
                    return data;
                })
                .catch(err => console.log(err))
        }
    },
})