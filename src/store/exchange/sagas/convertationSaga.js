import { takeEvery, select, put } from 'redux-saga/effects'

import * as actions from '../actions'
import { getExchangeRate } from '../selectors'

function* worker(action) {
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

export function* convertationWatcher() {
  yield takeEvery(actions.changeValuesTrigger.toString(), worker)
}
