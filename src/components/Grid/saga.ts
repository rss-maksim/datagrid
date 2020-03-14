import { put, takeEvery, delay } from 'redux-saga/effects'

import { actions, setPayload } from './reducer'
import data from '../../data/payload.json'

export function* fetchWorker() {
    yield delay(2000)
    yield put(setPayload(data))
}

export function* gridSaga() {
    yield takeEvery(actions.fetchDataAction, fetchWorker)
}
