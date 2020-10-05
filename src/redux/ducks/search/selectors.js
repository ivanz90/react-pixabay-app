import { createSelector } from 'reselect'

const selectHits = (state) => state.search.hits
const selectPage = (state) => state.search.page
const selectIsPending = (state) => state.search.searchPending
const selectLoadMorePending = (state) => state.search.loadMorePending

const selectPagePending = createSelector(
  [selectPage, selectLoadMorePending],
  ((page, loadMorePending) => ({
    page,
    loadMorePending
  }))
)

const selectInfinityScrollSettings = state => ({
  page: state.search.page,
  isLoading: state.search.loadMorePending
})

export default {
  selectHits,
  selectPage,
  selectIsPending,
  selectPagePending,
  selectLoadMorePending,
  selectInfinityScrollSettings
}
