const selectHits = (state) => state.search.hits
const selectPage = (state) => state.search.page
const selectIsPending = (state) => state.search.searchPending

export default {
  selectHits,
  selectPage,
  selectIsPending
}
