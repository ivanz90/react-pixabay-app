import constants from './constants'
import { ISearchState, TSearchActions } from './types'

const initialState = {
  searchPending: false,
  loadMorePending: false,
  total: 0,
  totalHits: 0,
  hits: [],
  error: null,
  page: 2
}

const searchReducer = (state = initialState, action: TSearchActions )  => {
  switch (action.type) {
    case constants.SUBMIT_SUCCESS:
      return {
        ...state,
        ...action.payload as {}
      }
    case constants.SUBMIT_PENDING:
      return {
        ...state,
        searchPending: action.payload
      }
    case constants.LOAD_MORE_PENDING: 
      return {
        ...state,
        loadMorePending: action.payload
      }
    case constants.SET_PAGE: 
      return {
        ...state,
        page: action.payload
      }
    case constants.UPDATE_HITS:
      return {
        ...state,
        hits: [
          ...state.hits,
          ...action.payload
        ]
      }
    default:
      return state
  }
}

export default searchReducer