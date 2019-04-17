import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { reducer as signIn } from './signIn/reducer'
import { reducer as confirm } from './confirm/reducer'
import { reducer as exchange, archive } from './exchange/reducer'

export const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    signIn,
    confirm,
    exchange, archive,
  })
