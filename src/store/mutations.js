export default {
    // SET 포켓몬 리스트
    SET_POKE_LIST(state, list) {
        state.list = [...state.list, ...list];
    },
    // SET 포켓몬 정보
    SET_POKE_INFO(state, info) {
        state.info = info;
        state.showDetail = true;
    },
    // SET 스크랩 포켓몬 리스트
    SET_SCRAP_POKE_LIST(state, { offset, limit }) {
        const scrapList = localStorage.scraplist ? JSON.parse(localStorage.scraplist) : [];
        const sliceScrapList = scrapList.slice(offset, offset + limit)
        if (sliceScrapList.length > 0) {
            state.list = [...state.list, ...sliceScrapList];
        }
    },
    // 포켓몬 상세 정보 노출
    SHOW_DETAIL_INFO(state, show) {
        state.showDetail = show;
    },
    // 스크랩 여부 체크
    CHANGE_IS_SCRAP(state) {
        state.isScrap = !state.isScrap
    },
    // RESET 리스트 정보
    RESET_POKE_LIST(state) {
        state.list = []
    },
}