import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import { routerMiddleware } from 'connected-react-router'
import LocalForage from 'localforage'

import { createRootReducer } from './rootReducer'
import { rootSaga } from './rootSaga'

const persistConfig = {
  key: 'artchebanenko-lesson-4-master',
  storage: LocalForage,
  blacklist: ['router'],
}

export const configureStore = history => {
  const composeEnchancers =
    (process.env.NODE_ENV === 'development' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose

  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [routerMiddleware(history), sagaMiddleware, thunk]

  const persistedReducer = persistReducer(
    persistConfig,
    createRootReducer(history),
  )

  const store = createStore(
    persistedReducer,
    composeEnchancers(applyMiddleware(...middlewares)),
  )
  const persistor = persistStore(store)

  sagaMiddleware.run(rootSaga)

  return { store, persistor }
}
