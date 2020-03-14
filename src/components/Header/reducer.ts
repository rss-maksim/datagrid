import { createAction, handleActions } from 'redux-actions'

const actions = {
  toggleVirtualize: 'toggleVirtualize'
}

interface IHeaderState {
  virtualizeOn: boolean
}

export const toggleVirtualize = createAction(actions.toggleVirtualize)

const defaultState: IHeaderState = {
  virtualizeOn: true
}

export const headerReducer = handleActions(
  {
    [actions.toggleVirtualize]: (state: IHeaderState): IHeaderState => ({
      ...state,
      virtualizeOn: !state.virtualizeOn
    })
  },
  defaultState
)
