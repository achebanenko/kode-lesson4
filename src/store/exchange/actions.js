import { createAction } from 'redux-act';

export const changeTerms = createAction('exchange/CHANGE_TERMS')
export const changeFromTime = createAction('exchange/CHANGE_FROM_TIME')
export const changeToTime = createAction('exchange/CHANGE_TO_TIME')

export const changeValuesTrigger = createAction('exchange/CHANGE_VALUES_TRIGGER')
export const changeFromValue = createAction('exchange/CHANGE_FROM_VALUE')
export const changeToValue = createAction('exchange/CHANGE_TO_VALUE')

export const selectCountryTrigger = createAction('exchange/SELECT_COUNTRY_TRIGGER')
export const countrySearchInputTrigger = createAction('exchange/COUNTRY_SEARCH_INPUT_TRIGGER')
export const changeCountrySearchInput = createAction('exchange/CHANGE_COUNTRY_SEARCH_INPUT')
export const changeCountrySearchStatus = createAction('exchange/CHANGE_COUNTRY_SEARCH_STATUS')
export const selectCountry = createAction('exchange/SELECT_COUNTRY')
export const saveSelectedCountry = createAction('exchange/SAVE_SELECTED_COUNTRY')
export const loadHistoryCountries = createAction('exchange/LOAD_HISTORY_COUNTRIES')
export const downloadCountries = createAction('exchange/DOWNLOAD_COUNTRIES')
export const downloadCountriesSuccess = createAction('exchange/DOWNLOAD_COUNTRIES_SUCCESS')
export const downloadCountriesFailure = createAction('exchange/DOWNLOAD_COUNTRIES_FAILURE')

export const changeRateValue = createAction('exchange/CHANGE_RATE_VALUE')
export const downloadRate = createAction('exchange/DOWNLOAD_RATE')
export const downloadRateSuccess = createAction('exchange/DOWNLOAD_RATE_SUCCESS')
export const downloadRateFailure = createAction('exchange/DOWNLOAD_RATE_FAILURE')

export const resetExchange = createAction('exchange/RESET_EXCHANGE')
export const storeHistoryCountries = createAction('exchange/STORE_HISTORY_COUNTRIES')