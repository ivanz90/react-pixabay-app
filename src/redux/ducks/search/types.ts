import constants from "./constants"
import { IHit } from './../../../shared/types'

export interface ISearchState {
  searchPending: boolean
  loadMorePending: boolean
  total?: number
  totalHits?: number
  hits: IHit[]
  error?: null | string
  page: number 
}

export interface ISubmitSuccess {
  type: typeof constants.SUBMIT_SUCCESS
  payload: {
    searchPending: boolean,
    hits: IHit[],
    totalHits: number
  }
}

export interface ISubmitError {
  type: typeof constants.SUBMIT_ERROR
  payload: string
}

export interface ISubmitPending {
  type: typeof constants.SUBMIT_PENDING
  payload: boolean
}

export interface ILoadMorePending {
  type: typeof constants.SUBMIT_PENDING
  payload: boolean
}

export interface ISetPage {
  type: typeof constants.SET_PAGE
  payload: number
}

export interface IUpdatePage {
  type: typeof constants.UPDATE_PAGE
  payload: number
}

export interface IUpdateHits {
  type: typeof constants.UPDATE_HITS,
  payload: IHit[]
}

