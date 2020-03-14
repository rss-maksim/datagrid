import { combineReducers, compose, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from '../sagas'
import { headerReducer } from '../components/Header'
import { gridReducer } from '../components/Grid'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const rootReducer = combineReducers({
  headerReducer,
  gridReducer
})

export const createAppStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
  const store = createStore(rootReducer, enhancer)
  sagaMiddleware.run(rootSaga)

  return store
}
