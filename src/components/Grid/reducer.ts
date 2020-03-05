import { Action, createAction, handleActions } from 'redux-actions';

export const actions = {
    setPayloadAction: 'setPayload',
    fetchDataAction: 'fetchData'
};

// @todo: types for data
export interface IGridState {
    data: any
}

export type PayloadActionType = Action<any>

export const fetchData = createAction(actions.fetchDataAction)
export const setPayload = createAction(actions.setPayloadAction)

const defaultState: IGridState = {
    data: []
};

export const gridReducer = handleActions(
    {
        [actions.setPayloadAction]: (state: IGridState, { payload: data }: PayloadActionType): IGridState => ({
            ...state,
            data
        }),
    },
    defaultState
);
