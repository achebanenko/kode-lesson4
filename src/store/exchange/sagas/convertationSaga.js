import { takeEvery, call, select, put, delay } from 'redux-saga/effects'

import * as actions from '../actions'
import { getCountry1, getCountry2, getExchangeRate } from '../selectors'

export function* exchangeRateWatcher() {
  yield takeEvery(actions.selectCountry.toString(), exchangeRateWorker)
}
function* exchangeRateWorker() {
  const country1 = yield select(getCountry1)
  const country2 = yield select(getCountry2)
  
  if (country1.currencies && country2.currencies) {
    const currency1 = country1.currencies[0].code
    const currency2 = country2.currencies[0].code

    yield put(actions.downloadRate())
    
    try {
      const symbols = `${currency1},${currency2}`;
      const res = yield call(
        fetch,
        `https://api.exchangeratesapi.io/latest?symbols=${symbols}`,
      )
      const result = yield call([res, res.json])
      
      yield delay(1000)

      if (Object.keys(result).length > 0 && !("error" in result)) {
        yield put(actions.downloadRateSuccess(result))
      } else {
        throw new Error('error')
      }
    } catch (e) {
      yield put(actions.downloadRateFailure())
    }
  }
}




export function* convertationWatcher() {
  yield takeEvery(actions.changeValuesTrigger.toString(), convertationWorker)
}
function* convertationWorker(action) {
  const { value, convertDirection } = action.payload
  
  const exchangeRate = yield select(getExchangeRate)
  const input = parseFloat(value)
  if (Number.isNaN(input)) {
    return
  }
  if (convertDirection === 'from') {
    const fromValue = input.toString()
    const toValue = (Math.round(input * exchangeRate * 1000) / 1000).toString()

    yield put(actions.changeFromValue(fromValue))
    yield put(actions.changeToValue(toValue))

  } else if (convertDirection === 'to') {
    const toValue = input.toString()
    const fromValue = (
      Math.round((input / exchangeRate) * 1000) / 1000
    ).toString()

    yield put(actions.changeFromValue(fromValue))
    yield put(actions.changeToValue(toValue))
  }
}

