const getters = {
    getIsPokeScrap(state, id) {
        console.log('id : ', id)
        return !!state.scrapList
    }
}

export default getters