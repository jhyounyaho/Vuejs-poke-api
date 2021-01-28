import axios from "axios";

const config = {
    baseUrl : 'https://pokeapi.co/api/v2/pokemon',
}
// 포켓몬 리스트 API
function fetchPokeList(offset, limit) {
    return axios.get(`${config.baseUrl}?offset=${offset}limit=${limit}`)
}

// 포켓몬 정보 API
function fetchPokeInfo(id) {
    return axios.get(`${config.baseUrl}/${id}`)
}

export {
    fetchPokeList,
    fetchPokeInfo,
}