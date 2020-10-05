import actions from './actions'
import { callApi } from '../../../shared/apiCall'
import { batch } from 'react-redux'

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
    batch(() => {
      dispatch(actions.updateHits(data))
      dispatch(actions.setPage(page + 1))
      dispatch(actions.submitPending(false))
    })
    
  } catch (err) {
    dispatch(actions.submitPending(false))
    return err
  }
  return 'done'
}

export default {
  submitSearch,
  setPage,
  fetchMore
}
