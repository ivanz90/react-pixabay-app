import types from './types'

const initialState = {
  searchPending: false,
  total: 0,
  totalHits: 0,
  hits: [],
  error: null,
  page: 2
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUBMIT_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case types.SUBMIT_PENDING:
      return {
        ...state,
        searchPending: action.payload
      }
    case types.SET_PAGE: 
      return {
        ...state,
        page: action.payload
      }
    case types.UPDATE_HITS:
      return {
        ...state,
        hits: [
          ...state.hits,
          ...action.payload
        ]
      }
    case types.UPDATE_PAGE:
      return {
        ...state,
        page: state.page + 1
      }
    default:
      return state
  }
}

export default searchReducer