import { all } from 'redux-saga/effects'
import { gridSaga } from '../components/Grid'

export function* rootSaga() {
  yield all([gridSaga()])
}
