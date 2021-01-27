import axios from "axios";

const config = {
    baseUrl : 'https://pokeapi.co/api/v2/pokemon',
}

function fetchPokeList(offset) {
    return axios.get(`${config.baseUrl}?offset=${offset}limit=20`)
}

function fetchPokeInfo(id) {
    return axios.get(`${config.baseUrl}/${id}`)
}

export {
    fetchPokeList,
    fetchPokeInfo,
}