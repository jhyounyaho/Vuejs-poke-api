export default {
    GET_POKE_LIST(state, list) {
        state.list = [...state.list, list];
        console.log('after : ', state.list)
    },
    GET_POKE_INFO(state, info) {
        state.info = info;
        state.showDetail = true;
    },
    SHOW_DETAIL_LIST(state, show) {
        state.showDetail = show;
    },
}