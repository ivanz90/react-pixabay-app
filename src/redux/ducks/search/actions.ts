import { IResults } from './types'
import constants from './constants'

const submitSuccess = (data: IResults) => {
  return {
    type: constants.SUBMIT_SUCCESS,
    payload: {
      ...data,
      searchPending: false
    }
  }
}

const submitError = (error: string) => {
  return {
    type: constants.SUBMIT_ERROR,
    payload: error
  }
}

const submitPending = (status: boolean) => {
  return {
    type: constants.SUBMIT_PENDING,
    payload: status
  }
}

const loadMorePending = (status: boolean) => {
  return {
    type: constants.LOAD_MORE_PENDING,
    payload: status
  }
}

const setPage = (n: number) => {
  return {
    type: constants.SET_PAGE,
    payload: n
  }
}

const updateHits = (data: IResults) => {
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
