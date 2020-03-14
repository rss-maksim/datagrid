import { Action, createAction, handleActions } from 'redux-actions'
import { IStudent } from '../../data/model'

export const actions = {
  setPayloadAction: 'setPayload',
  fetchDataAction: 'fetchData',
  onSortAction: 'onSort',
  onFilterAction: 'onFilter'
}

// @todo: types for data
export interface IGridState {
  data: IStudent[]
  received: boolean
  orderBy: string
  desc: boolean
  filterKey: string | null
  filterValue: string | null
  pagination: {
    perPage: number
    page: number
  }
}

export type PayloadActionType = Action<any>
export type FilterPayloadActionType = Action<{ filterValue: string; key: string }>

export const fetchData = createAction(actions.fetchDataAction)
export const setPayload = createAction(actions.setPayloadAction)
export const onSort = createAction(actions.onSortAction)
export const onFilter = createAction(actions.onFilterAction)

const defaultState: IGridState = {
  data: [],
  received: false,
  orderBy: 'id',
  filterKey: null,
  filterValue: null,
  desc: true,
  pagination: {
    perPage: 100,
    page: 0
  }
}

export const gridReducer = handleActions(
  {
    [actions.setPayloadAction]: (state: IGridState, { payload: data }: PayloadActionType): IGridState => ({
      ...state,
      received: true,
      data
    }),
    [actions.onSortAction]: (state: IGridState, { payload: orderBy }: PayloadActionType): IGridState => {
      if (orderBy) {
        return {
          ...state,
          orderBy,
          desc: state.orderBy === orderBy ? !state.desc : true
        }
      }
      return state
    },
    [actions.onFilterAction]: (state: IGridState, { payload }: FilterPayloadActionType): IGridState => {
      if (payload) {
        return {
          ...state,
          ...payload
        }
      }
      return state
    }
  },
  defaultState
)
