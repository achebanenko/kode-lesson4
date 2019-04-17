import { createReducer } from 'redux-act'

import * as actions from './actions'

const initialState = {
  terms: false,
  fromTime: '',
  toTime: '',
  fromValue: '100',
  toValue: '1',
  exchangeRate: 0.012,

  countrySearchInput: '',
  countrySearchStatus: 'initial',
  allCountries: [],
  historyCountries: [],
  country1: {},
  country2: {},
}

export const reducer = createReducer(
  {
    [actions.changeTerms]: state => ({
      ...state,
      terms: !state.terms,
    }),
    [actions.changeFromValue]: (state, payload) => ({
      ...state,
      fromValue: payload,
    }),
    [actions.changeToValue]: (state, payload) => ({
      ...state,
      toValue: payload,
    }),
    [actions.changeFromTime]: (state, payload) => ({
      ...state,
      fromTime: payload,
    }),
    [actions.changeToTime]: (state, payload) => ({
      ...state,
      toTime: payload,
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
    [actions.downloadCountries]: (state, payload) => ({
      ...state,
      countrySearchStatus: 'loading',
    }),
    [actions.downloadCountriesSuccess]: (state, payload) => ({
      ...state,
      allCountries: payload,
      countrySearchStatus: '',
    }),
    [actions.downloadCountriesFailure]: (state, payload) => ({
      ...state,
      countrySearchStatus: '',
    }),

    [actions.changeRateValue]: (state, payload) => ({
      ...state,
      exchangeRate: payload,
    }),

    [actions.resetExchange]: (state, payload) => (
      initialState
    ),
  },
  initialState,
)
