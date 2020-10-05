import actions from './actions'
import { callApi } from '../../../shared/apiCall'

const setPage = actions.setPage

const submitSearch = (params) => async (dispatch) => {
  dispatch(actions.submitPending(true))
  dispatch(actions.setPage(2))
  try {
    const data = await callApi(params)
    dispatch(actions.submitSuccess(data))
    return data
  } catch (err) {
    dispatch(actions.submitError(err.message))
    return err
  }
}

const fetchMore = (params, page) => async (dispatch) => {
  params = params ? `${params}&page=${page}` : `${params}page=${page}`
  dispatch(actions.submitPending(true))
  try {
    const data = await callApi(params)
    dispatch(actions.updateHits(data))
    dispatch(actions.setPage(page + 1))
    setTimeout(() => {
      dispatch(actions.submitPending(false))
    }, 1000)
  } catch (err) {
    setTimeout(() => {
      dispatch(actions.submitPending(false))
    }, 1000)
    return err
  }
  return 'done'
}

export default {
  submitSearch,
  setPage,
  fetchMore
}
