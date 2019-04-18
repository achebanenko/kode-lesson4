import { all, fork } from 'redux-saga/effects'

import { routerWatcher } from '@store/router/routerWatcher'
import { signInWatcher } from '@store/signIn/sagas'
import { confirmWatcher } from '@store/confirm/sagas'
import { 
  selectionWatcher, countrySearchInputWatcher, selectCountryWatcher, 
  convertationWatcher, exchangeRateWatcher,
} from '@store/exchange/sagas'

const watchers = [
  routerWatcher,
  signInWatcher, 
  confirmWatcher,
  selectionWatcher,
  countrySearchInputWatcher,
  selectCountryWatcher,
  exchangeRateWatcher,
  convertationWatcher,
]

export function* rootSaga() {
  yield all(watchers.map(fork))
}