import { ISetPage, IResults, TSearchActions } from './types'
import constants from './constants'

const submitSuccess = (data: IResults): TSearchActions => {
  return {
    type: constants.SUBMIT_SUCCESS,
    payload: {
      ...data,
      searchPending: false
    }
  }
}

const submitError = (error: string): TSearchActions => {
  return {
    type: constants.SUBMIT_ERROR,
    payload: error
  }
}

const submitPending = (status: boolean): TSearchActions => {
  return {
    type: constants.SUBMIT_PENDING,
    payload: status
  }
}

const loadMorePending = (status: boolean): TSearchActions => {
  return {
    type: constants.LOAD_MORE_PENDING,
    payload: status
  }
}

const setPage = (n: number): ISetPage => {
  return {
    type: constants.SET_PAGE,
    payload: n
  }
}

const updateHits = (data: IResults): TSearchActions => {
  return {
    type: constants.UPDATE_HITS,
    payload: data.hits
  }
}

export default {
  submitSuccess,
  submitError,
  submitPending,
  setPage,
  updateHits,
  loadMorePending
}
