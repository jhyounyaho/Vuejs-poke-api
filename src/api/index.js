import axios from "axios";

const config = {
    baseUrl : 'https://pokeapi.co/api/v2/pokemon',
}

function fetchPokeList(limit) {
    return axios.get(`${config.baseUrl}?limit=${limit}`)
}

function fetchPokeInfo(id) {
    return axios.get(`${config.baseUrl}/${id}`)
}

export {
    fetchPokeList,
    fetchPokeInfo,
}