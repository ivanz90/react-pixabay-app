import {
  ISubmitError,
  ISubmitPending,
  ILoadMorePending,
  ISetPage,
  IUpdatePage,
  IResults,
  ISubmitSuccess,
  IUpdateHits
} from './types'
import constants from './constants'

const submitSuccess = (data: IResults): ISubmitSuccess => {
  return {
    type: constants.SUBMIT_SUCCESS,
    payload: {
      ...data,
      searchPending: false
    }
  }
}

const submitError = (error: string): ISubmitError => {
  return {
    type: constants.SUBMIT_ERROR,
    payload: error
  }
}

const submitPending = (status: boolean): ISubmitPending => {
  return {
    type: constants.SUBMIT_PENDING,
    payload: status
  }
}

const loadMorePending = (status: boolean): ILoadMorePending => {
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

const updatePage = (): IUpdatePage => {
  return {
    type: constants.UPDATE_PAGE
  }
}

const updateHits = (data: IResults): IUpdateHits => {
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
  updatePage,
  updateHits,
  loadMorePending
}
