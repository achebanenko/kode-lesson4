import React from 'react'
import PropTypes from 'prop-types'

import { PageTemplate, HBox } from '@ui/atoms'
import { ModalHeader, SearchInput, SearchStatus } from '@ui/molecules'
import { CountriesList } from '@ui/organisms'
import { routes } from '../../../routes'


export const SelectCountry = ({ 
  push, 
  selection, value, status, countries, history,
  countrySearchInputTrigger, selectCountry,
}) => {
  if(!status && countries.length === 0) {
    status = 'notFound'
  }
  return (
    <PageTemplate>
      <ModalHeader action={() => push(`${routes.EXCHANGE}`)}>
        <SearchInput 
          value={value}
          onChange={countrySearchInputTrigger} 
        />
      </ModalHeader>

      {
        status === 'initial' && history.length > 0
          ? <>
            <HBox />
            <CountriesList
              title={'История поиска'}
              list={history}
              selectCountry={selectCountry}
              selection={selection}
            />
          </>
          : null
      }

      {
        status 
          ? <SearchStatus status={status} message={status === 'errored' ? 'Ошибка соединения' : ''} />
          : null
      }

      { 
        !status && countries.length > 0
          ? <>
              <HBox />
              <CountriesList
                title={'Страны'}
                list={countries}
                selectCountry={selectCountry}
                selection={selection}
              />
            </>
          : null
      }
    </PageTemplate>
  )
}

SelectCountry.propTypes = {
  push: PropTypes.func.isRequired,
  selection: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  countries: PropTypes.array.isRequired,
  history: PropTypes.array.isRequired,
  countrySearchInputTrigger: PropTypes.func.isRequired,
  selectCountry: PropTypes.func.isRequired,
}
