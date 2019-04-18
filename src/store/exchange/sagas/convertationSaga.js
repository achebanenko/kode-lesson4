import { takeEvery, call, select, put, delay } from 'redux-saga/effects'

import * as actions from '../actions'
import { getCountry1, getCountry2, getExchangeRate } from '../selectors'

export function* exchangeRateWatcher() {
  yield takeEvery(actions.selectCountry.toString(), exchangeRateWorker)
}
function* exchangeRateWorker() {
  yield put(actions.changeFromValue(''))
  yield put(actions.changeToValue(''))

  const country1 = yield select(getCountry1)
  const country2 = yield select(getCountry2)

  if (country1.currencies && country2.currencies) {
    const currency1 = country1.currencies[0].code
    const currency2 = country2.currencies[0].code

    yield put(actions.downloadRate())
    try {
      const res = yield call(
        fetch,
        `https://api.exchangeratesapi.io/latest?base=${currency1}`,
      )

      const result = yield call([res, res.json])
      yield delay(1000)

      if (Object.keys(result).length > 0 && !("error" in result)) {
        if(currency2 in result.rates) {
          yield put(actions.downloadRateSuccess(result))
        } else if (currency1 === currency2) {
          const similar = {"base":currency1, "rates":{[currency2]:1}}
          yield put(actions.downloadRateSuccess(similar))
        }
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

  const country2 = yield select(getCountry2)
  const currency2 = country2.currencies[0].code
  const exchangeRate = yield select(getExchangeRate)
  const currencyRate = exchangeRate.rates[currency2]

  const input = value === '' ? 0 : parseFloat(value)
  if (Number.isNaN(input)) {
    return 
  }
  
  if (convertDirection === 'from') {
    yield put(actions.changeFromValue(value.toString()))
    //yield put(actions.changeFromValue( input.toString() ))
    const toValue = (Math.round(input * currencyRate * 1000) / 1000).toString()
    yield put(actions.changeToValue(toValue))

  } else if (convertDirection === 'to') {
    yield put(actions.changeToValue(value.toString()))
    //yield put(actions.changeToValue( input.toString() ))
    const fromValue = (Math.round((input / currencyRate) * 1000) / 1000).toString()
    yield put(actions.changeFromValue(fromValue))
  }
}
