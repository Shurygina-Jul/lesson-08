import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { PersistConfig } from 'redux-persist/es/types'
import { persistReducer, persistStore } from 'redux-persist'
import { RootState } from './types'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from './reducer'

const config: PersistConfig<RootState.State> = {
  key: 'catalog',
  storage
}

const persistedReducer = persistReducer(config, rootReducer)

export const store = createStore(persistedReducer, compose(
  applyMiddleware(thunk),
  window?.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export const persistor = persistStore(store)
