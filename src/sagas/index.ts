import { all } from 'redux-saga/effects';
import { headerSaga } from '../components/Header';

export function* rootSaga() {
    yield all([
        headerSaga()
    ])
}
