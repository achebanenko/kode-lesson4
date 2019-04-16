import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import { getRouterLocation } from '@store/router/selectors'
import { SelectCountry } from './SelectCountry'

const mapStateToProps = state => ({ 
  search: getRouterLocation(state).search.slice(1)
})

export const SelectCountryContainer = connect(mapStateToProps, { push })(SelectCountry)