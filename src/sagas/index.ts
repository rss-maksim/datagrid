import { all } from 'redux-saga/effects';
import { headerSaga } from '../components/Header';
import { gridSaga } from '../components/Grid';

export function* rootSaga() {
    yield all([
        headerSaga(),
        gridSaga()
    ])
}
