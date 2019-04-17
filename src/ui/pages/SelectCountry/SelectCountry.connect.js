import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { getRouterLocation } from '@store/router/selectors'

import { changeCountrySearchInput, searchCountriesTrigger, selectCountry } from '@store/exchange/actions'
import * as selectors from '@store/exchange/selectors'
import { SelectCountry } from './SelectCountry'

const mapStateToProps = state => ({ 
  selection: getRouterLocation(state).search.slice(1),
  value: selectors.getCountrySearchInputValue(state),
  status: selectors.getCountrySearchStatus(state),
  countries: selectors.getFilteredCountries(state),
})

export const SelectCountryContainer = connect(
  mapStateToProps, 
  { push, changeCountrySearchInput, searchCountriesTrigger, selectCountry }
)(SelectCountry)