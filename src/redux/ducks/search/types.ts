import { IHit } from './../../../shared/types'
import actions from './actions'

type TInferValue<T> = T extends {[key: string]: infer U} ? U : never
export type TAction = ReturnType<TInferValue<typeof actions>>

export interface IRootState {
  search: ISearchState
}

export interface ISearchState {
  searchPending: boolean
  loadMorePending: boolean
  total?: number
  totalHits?: number
  hits: IHit[]
  error?: null | string
  page: number
}

export interface IResults {
  hits: IHit[]
  total: number
  totalHits: number
}

export interface ISuccess {
  searchPending: boolean
  total: number
  hits: IHit[]
  totalHits: number
}
