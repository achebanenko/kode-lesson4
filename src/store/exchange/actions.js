import { createAction } from 'redux-act';

export const changeTerms = createAction('exchange/CHANGE_TERMS')

export const changeFromTime = createAction('exchange/CHANGE_FROM_TIME')
export const changeToTime = createAction('exchange/CHANGE_TO_TIME')

export const changeValuesTrigger = createAction('exchange/CHANGE_VALUES_TRIGGER')
export const changeFromValue = createAction('exchange/CHANGE_FROM_VALUE')
export const changeToValue = createAction('exchange/CHANGE_TO_VALUE')

export const searchCountriesTrigger = createAction('exchange/SEARCH_COUNTRIES_TRIGGER')
export const changeCountrySearchInput = createAction('exchange/CHANGE_COUNTRY_SEARCH_INPUT')
export const changeCountrySearchStatus = createAction('exchange/CHANGE_COUNTRY_SEARCH_STATUS')
export const selectCountry = createAction('exchange/SELECT_COUNTRY')
export const saveSelectedCountry = createAction('exchange/SAVE_SELECTED_COUNTRY')
export const downloadCountries = createAction('exchange/DOWNLOAD_COUNTRIES')
export const downloadCountriesSuccess = createAction('exchange/DOWNLOAD_COUNTRIES_SUCCESS')
export const downloadCountriesFailure = createAction('exchange/DOWNLOAD_COUNTRIES_FAILURE')
export const changeRateValue = createAction('exchange/CHANGE_RATE_VALUE')

export const resetExchange = createAction('exchange/RESET_EXCHANGE')