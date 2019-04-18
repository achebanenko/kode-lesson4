import { takeEvery, takeLatest, call, put, select, delay, all } from 'redux-saga/effects'

import * as actions from '../actions'
import { getAllCountries, getHistoryCountries, getStoredHistoryCountries } from '../selectors'

// opening modal
export function* searchCountriesWatcher() {
  yield takeEvery(actions.selectCountryTrigger.toString(), porter)
}
function* porter(action) {
  yield put(actions.changeCountrySearchInput(''))
  yield put(actions.changeCountrySearchStatus('initial'))

  const historyCountries = yield select(getHistoryCountries)
  if (historyCountries.length === 0) {
    const storedHistoryCountries = JSON.parse(localStorage.getItem('exchange-app:historyCountries')) || []
    // the same but from persist archive
    // const storedHistoryCountries = yield select(getStoredHistoryCountries)
    if (storedHistoryCountries.length > 0) {
      yield put(actions.loadHistoryCountries( storedHistoryCountries ))
    }
  }
}

// user typing
export function* countrySearchInputWatcher() {
  yield takeLatest(actions.countrySearchInputTrigger.toString(), worker)
}
function* worker(action) {
  const value = action.payload
  
  if (value.length === 0) {
    yield put(actions.changeCountrySearchStatus('initial'))
  }
  if (value.length === 1) {
    const allCountries = yield select(getAllCountries)
    if (allCountries.length === 0) {
      yield put(actions.downloadCountries())
      
      try {
        const fields = 'name;alpha2Code;alpha3Code;currencies';
        const res = yield call(
          fetch,
          `https://restcountries.eu/rest/v2/all?fields=${fields}`,
        )
        const result = yield call([res, res.json])
        
        if (Array.isArray(result) && result.length > 0) {
          yield put(actions.downloadCountriesSuccess(result))
        } else {
          throw new Error('error')
        }
      } catch (e) {
        yield put(actions.downloadCountriesFailure())
      }
    // simulate call
    } else {
      yield all({
        simulate: put(actions.changeCountrySearchStatus('loading')),
        latency: delay(500)
      })
      yield put(actions.changeCountrySearchStatus(''))
    }
  }

  yield put(actions.changeCountrySearchInput(value))
}

// homework
export function* selectCountryWatcher() {
  yield takeEvery(actions.selectCountry.toString(), keeper)
}
function* keeper(action) {
  // temp history
  yield put(actions.saveSelectedCountry(action.payload))
  const freshHistoryCountries = yield select(getHistoryCountries)
  // persist archive
  yield put(actions.storeHistoryCountries(freshHistoryCountries))
  // localStorage
  localStorage.setItem('exchange-app:historyCountries', JSON.stringify(freshHistoryCountries))
}