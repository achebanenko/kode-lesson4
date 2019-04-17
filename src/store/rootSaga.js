import { all, fork } from 'redux-saga/effects'

import { routerWatcher } from '@store/router/routerWatcher'
import { signInWatcher } from '@store/signIn/sagas'
import { confirmWatcher } from '@store/confirm/sagas'
import { 
  countrySearchInputWatcher, searchCountriesWatcher, selectCountryWatcher, 
  convertationWatcher, exchangeRateWatcher,
} from '@store/exchange/sagas'

const watchers = [
  routerWatcher,
  signInWatcher, 
  confirmWatcher,
  countrySearchInputWatcher,
  searchCountriesWatcher,
  selectCountryWatcher,
  exchangeRateWatcher,
  convertationWatcher,
]

export function* rootSaga() {
  yield all(watchers.map(fork))
}