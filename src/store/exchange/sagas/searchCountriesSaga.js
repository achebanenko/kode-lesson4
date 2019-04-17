import { take, takeEvery, takeLatest, call, put, select, delay, all } from 'redux-saga/effects'

import * as actions from '../actions'
import { getAllCountries, getCountrySearchInputValue, getHistoryCountries } from '../selectors'

// opening modal
export function* searchCountriesTrigger() {
  yield takeEvery(actions.searchCountriesTrigger.toString(), porter)
}
function* porter(action) {
  yield put(actions.changeCountrySearchInput(''))

  const historyCountries = yield select(getHistoryCountries)
  const storedHistoryCountries = JSON.parse(localStorage.getItem('exchange-app:historyCountries')) || []
  if (historyCountries.length === 0 && storedHistoryCountries.length > 0) {
    yield put(actions.loadHistoryCountries( storedHistoryCountries ))
  }
}

// user typing
export function* searchCountriesWatcher() {
  yield takeEvery(actions.changeCountrySearchInput.toString(), worker)
}
function* worker(action) {
  const countrySearchInput = yield select(getCountrySearchInputValue)
  const allCountries = yield select(getAllCountries)

  if (countrySearchInput.length === 0) {
    yield put(actions.changeCountrySearchStatus('initial'))
  } else if (countrySearchInput.length === 1) {
    // download countries
    if (allCountries.length === 0) {
      yield put(actions.downloadCountries())
      
      try {
        const fields = 'name;alpha2Code;currencies';
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
        latency: delay(1000)
      })
      yield put(actions.changeCountrySearchStatus(''))
    }

  }
}

// homework
export function* selectCountryWatcher() {
  yield takeEvery(actions.selectCountry.toString(), keeper)
}
function* keeper(action) {
  yield put(actions.saveSelectedCountry(action.payload))
  const freshHistoryCountries = yield select(getHistoryCountries)
  localStorage.setItem('exchange-app:historyCountries', JSON.stringify(freshHistoryCountries))
}