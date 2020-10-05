import types from './types'

const submitSuccess = (data) => {
  return {
    type: types.SUBMIT_SUCCESS,
    payload: {
      ...data,
      searchPending: false
    }
  }
}

const submitError = (error) => {
  return {
    type: types.SUBMIT_ERROR,
    payload: error
  }
}

const submitPending = (status) => {
  return {
    type: types.SUBMIT_PENDING,
    payload: status
  }
}

const setPage = (n) => {
  return {
    type: types.SET_PAGE,
    payload: n
  }
}

const updatePage = () => {
  return {
    type: types.UPDATE_PAGE
  }
}

const updateHits = (data) => {
  return {
    type: types.UPDATE_HITS,
    payload: data.hits
  }
}

export default {
  submitSuccess,
  submitError,
  submitPending,
  setPage,
  updatePage,
  updateHits
}