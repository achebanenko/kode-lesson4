import { all, fork } from 'redux-saga/effects'

import { routerWatcher } from '@store/router/routerWatcher'
import { signInWatcher } from '@store/signIn/sagas'
import { confirmWatcher } from '@store/confirm/sagas'
import { 
  convertationWatcher, 
  searchCountriesTrigger, searchCountriesWatcher, selectCountryWatcher, 
} from '@store/exchange/sagas'

const watchers = [
  routerWatcher,
  signInWatcher, 
  confirmWatcher, 
  convertationWatcher,
  searchCountriesTrigger,
  searchCountriesWatcher,
  selectCountryWatcher,
]

export function* rootSaga() {
  yield all(watchers.map(fork))
}