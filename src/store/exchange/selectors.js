export const getTerms = state => state.exchange.terms

export const getFromTime = state => state.exchange.fromTime
export const getToTime = state => state.exchange.toTime

export const getFromValue = state => state.exchange.fromValue
export const getToValue = state => state.exchange.toValue

export const getExchangeRate = state => state.exchange.exchangeRate

export const getCountrySearchStatus = state => state.exchange.countrySearchStatus
export const getCountrySearchInputValue = state => state.exchange.countrySearchInput
export const getAllCountries = state => state.exchange.allCountries
export const getFilteredCountries = state => {
  const { allCountries, countrySearchInput } = state.exchange
  if (countrySearchInput.length >= 1) {
    if (Array.isArray(allCountries) && allCountries.length > 0) {
      return allCountries.filter(country => country.name.toLowerCase().includes( countrySearchInput.toLowerCase() ))
    }
  }
  return []
}

export const getCountry1 = state => state.exchange.country1
export const getCountry2 = state => state.exchange.country2