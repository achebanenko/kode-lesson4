export const getTerms = state => state.exchange.terms
export const getFromTime = state => state.exchange.fromTime
export const getToTime = state => state.exchange.toTime

export const getFromValue = state => state.exchange.fromValue
export const getToValue = state => state.exchange.toValue
export const getExchangeRate = state => state.exchange.exchangeRate
export const getExchangeRateStatus = state => state.exchange.exchangeRateStatus

export const getCountry1 = state => state.exchange.country1
export const getCountry2 = state => state.exchange.country2

export const getCountrySearchStatus = state => state.exchange.countrySearchStatus
export const getCountrySearchInputValue = state => state.exchange.countrySearchInput
export const getAllCountries = state => state.exchange.allCountries
export const getFilteredCountries = state => {
  const { allCountries, countrySearchInput } = state.exchange
  if (countrySearchInput.length > 0) {
    if (allCountries.length > 0) {
      return allCountries.filter(country => (
        country.name.toLowerCase().includes( countrySearchInput.toLowerCase() )
        || country.alpha2Code.toLowerCase() === countrySearchInput.toLowerCase()
        || country.alpha3Code.toLowerCase() === countrySearchInput.toLowerCase()
      ))
    }
  }
  return []
}
export const getHistoryCountries = state => {
  return state.exchange.historyCountries
    // .filter(v => v.name !== state.exchange.country1.name && v.name !== state.exchange.country2.name)
    .sort((a,b) => b.when - a.when)
    .reduce((res, x) =>
      res.concat( res.find(y => y.name === x.name) ? [] : [x])
    , [])
    .slice(0, 5) 
}

export const getStoredHistoryCountries = state => state.archive.countries