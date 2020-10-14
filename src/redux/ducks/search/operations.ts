import actions from './actions'
import { callApi } from '../../../shared/apiCall'
import { batch } from 'react-redux'
import { Dispatch } from 'redux'

const setPage = actions.setPage

const submitSearch = (params: string) => async (dispatch: Dispatch, getState: Function) => {
  dispatch(actions.submitPending(true))
  if (getState().search.page > 2) dispatch(actions.setPage(2))
  try {
    const data = await callApi(params)
    dispatch(actions.submitSuccess(data))
    return data
  } catch (err) {
    dispatch(actions.submitError(err.message))
    return err
  }
}

const fetchMore = (params: string, page: number) => async (dispatch: Dispatch) => {
  params = params ? `${params}&page=${page}` : `${params}page=${page}`
  dispatch(actions.loadMorePending(true))
  try {
    const data = await callApi(params)
    batch(() => {
      dispatch(actions.updateHits(data))
      dispatch(actions.setPage(page + 1))
      dispatch(actions.loadMorePending(false))
    })
    
  } catch (err) {
    dispatch(actions.loadMorePending(false))
    return err
  }
  return 'done'
}

export default {
  submitSearch,
  setPage,
  fetchMore
}
