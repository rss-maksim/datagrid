import { put, takeEvery, all } from 'redux-saga/effects'

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
