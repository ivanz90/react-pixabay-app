import constants from './constants'

const submitSuccess = (data) => {
  return {
    type: constants.SUBMIT_SUCCESS,
    payload: {
      ...data,
      searchPending: false
    }
  }
}

const submitError = (error) => {
  return {
    type: constants.SUBMIT_ERROR,
    payload: error
  }
}

const submitPending = (status) => {
  return {
    type: constants.SUBMIT_PENDING,
    payload: status
  }
}

const loadMorePending = (status) => {
  return {
    type: constants.LOAD_MORE_PENDING,
    payload: status
  }
}

const setPage = (n) => {
  return {
    type: constants.SET_PAGE,
    payload: n
  }
}

const updatePage = () => {
  return {
    type: constants.UPDATE_PAGE
  }
}

const updateHits = (data) => {
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