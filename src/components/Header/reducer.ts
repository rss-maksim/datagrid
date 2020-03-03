import { Action, createAction, handleActions } from 'redux-actions';

enum languages {
    EN = 'en',
    RU = 'ru'
}

const actions = {
    changeLanguage: 'changeLanguage'
};

interface IHeaderState {
    language: languages
}

export type HeaderPayloadType = Action<languages>

export const changeLanguage = createAction(actions.changeLanguage)

const defaultState: IHeaderState = {
    language: languages.EN
};

export const headerReducer = handleActions(
    {
        [actions.changeLanguage]: (state: IHeaderState, { payload: language }: HeaderPayloadType): IHeaderState => ({
            ...state,
            language
        }),
    },
    defaultState
);
