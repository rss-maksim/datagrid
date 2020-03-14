import { put, takeEvery } from 'redux-saga/effects'

// @todo: update
const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export function* incrementAsync() {
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* headerSaga() {
    console.log('Hello Sagas!')
}
