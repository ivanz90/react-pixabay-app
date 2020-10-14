import { ISearchState, IRootState } from './types'

const selectHits = (state: IRootState) => state.search.hits
const selectPage = (state: IRootState) => state.search.page
const selectIsPending = (state: IRootState) => state.search.searchPending
const selectLoadMorePending = (state: IRootState) => state.search.loadMorePending

const selectInfinityScrollSettings = (state: IRootState) => ({
  page: state.search.page,
  isLoading: state.search.loadMorePending
})

export default {
  selectHits,
  selectPage,
  selectIsPending,
  selectLoadMorePending,
  selectInfinityScrollSettings
}
