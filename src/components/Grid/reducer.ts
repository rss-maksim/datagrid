import { Action, createAction, handleActions } from 'redux-actions';
import {IStudent} from "../../data/model";

export const actions = {
    setPayloadAction: 'setPayload',
    fetchDataAction: 'fetchData',
    onSortAction: 'onSort'
};

// @todo: types for data
export interface IGridState {
    data: IStudent[]
    received: boolean
    orderBy: string
    desc: boolean
    pagination: {
        perPage: number
        page: number
    }
}

export type PayloadActionType = Action<any>

export const fetchData = createAction(actions.fetchDataAction)
export const setPayload = createAction(actions.setPayloadAction)
export const onSort = createAction(actions.onSortAction)

const defaultState: IGridState = {
    data: [],
    received: false,
    orderBy: 'id',
    desc: true,
    pagination: {
        perPage: 100,
        page: 0
    }
};

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
    },
    defaultState
);
