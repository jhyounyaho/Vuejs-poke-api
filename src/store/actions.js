import {
    fetchPokeInfo,
    fetchPokeList,
} from '../api/index.js'

export default {
    // 포켓몬 리스트
    FETCH_POKE_LIST({ commit }, { offset, limit }) {
        return fetchPokeList(offset, limit)
            .then(({ data }) => {
                data.results.forEach(poke => {
                    const pokeSplit = poke.url.split('/')
                    poke.id = pokeSplit[pokeSplit.length - 2]
                })
                commit('SET_POKE_LIST', data.results)
            })
            .catch(err => console.log(err))
    },
    // 포켓몬 정보
    FETCH_POKE_INFO({ commit }, id) {
        return fetchPokeInfo(id)
            .then(res => res.status === 200 && commit('SET_POKE_INFO', res.data))
            .catch(err => {
                console.log(err)
                throw err
            })
    },
}