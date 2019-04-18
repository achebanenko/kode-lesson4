import { createReducer } from 'redux-act'

import * as actions from './actions'

const initialState = {
  terms: false,
  fromTime: '',
  toTime: '',
  fromValue: '',
  toValue: '',
  countrySearchInput: '',
  countrySearchStatus: 'initial',
  allCountries: [],
  historyCountries: [],
  country1: {},
  country2: {},
  exchangeRate: {},
  exchangeRateStatus: '',
}

export const archive = createReducer({
  [actions.storeHistoryCountries]: (state, payload) => ({
    ...state,
    countries: payload,
  })
},
{
  countries: [],
})

export const reducer = createReducer(
  {
    [actions.changeTerms]: state => ({
      ...state,
      terms: !state.terms,
    }),
    [actions.changeFromTime]: (state, payload) => ({
      ...state,
      fromTime: payload,
    }),
    [actions.changeToTime]: (state, payload) => ({
      ...state,
      toTime: payload,
    }),
    [actions.changeFromValue]: (state, payload) => ({
      ...state,
      fromValue: payload,
    }),
    [actions.changeToValue]: (state, payload) => ({
      ...state,
      toValue: payload,
    }),
    
    [actions.changeCountrySearchInput]: (state, payload) => ({
      ...state,
      countrySearchInput: payload,
    }),
    [actions.changeCountrySearchStatus]: (state, payload) => ({
      ...state,
      countrySearchStatus: payload,
    }),
    [actions.selectCountry]: (state, payload) => ({
      ...state,
      [payload.selection]: payload.country,
    }),
    [actions.saveSelectedCountry]: (state, payload) => ({
      ...state,
      historyCountries: [...state.historyCountries, {...payload.country, when: Date.now()}],
    }),
    [actions.loadHistoryCountries]: (state, payload) => ({
      ...state,
      historyCountries: payload,
    }),
    [actions.downloadCountries]: state => ({
      ...state,
      countrySearchStatus: 'loading',
    }),
    [actions.downloadCountriesSuccess]: (state, payload) => ({
      ...state,
      allCountries: payload,
      countrySearchStatus: '',
    }),
    [actions.downloadCountriesFailure]: state => ({
      ...state,
      countrySearchStatus: 'errored',
    }),

    [actions.changeRateValue]: (state, payload) => ({
      ...state,
      exchangeRate: payload,
    }),
    [actions.downloadRate]: state => ({
      ...state,
      exchangeRateStatus: 'loading',
    }),
    [actions.downloadRateSuccess]: (state, payload) => ({
      ...state,
      exchangeRate: payload,
      exchangeRateStatus: '',
    }),
    [actions.downloadRateFailure]: state => ({
      ...state,
      exchangeRateStatus: 'errored',
    }),

    [actions.resetExchange]: state => ({
      ...initialState
    }),
  },
  initialState,
)
