import React from 'react'
import PropTypes from 'prop-types'

import { PageTemplate, HBox } from '@ui/atoms'
import { ModalHeader, SearchInput, SearchStatus } from '@ui/molecules'
import { CountriesList } from '@ui/organisms'
import { routes } from '../../../routes'


export const SelectCountry = ({ 
  selection, value, status, countries,
  push, changeCountrySearchInput, selectCountry,
}) => {
  if(!status && countries.length === 0) {
    status = 'notFound'
  }
  return (
    <PageTemplate>
      <ModalHeader action={() => push(`${routes.EXCHANGE}`)}>
        <SearchInput 
          value={value}
          onChange={changeCountrySearchInput} 
        />
      </ModalHeader>

      {
        status === 'initial'
          ? <>
            <HBox />
            <CountriesList
              title={'История поиска'}
              list={[
                { name: 'Российская Федерация', alpha2Code: 'RF' },
                { name: 'Соединенные Штаты Америки', alpha2Code: 'USA' },
              ]}
              selectCountry={selectCountry}
              selection={selection}
            />
          </>
          : null
      }

      {
        status 
          ? <SearchStatus status={status}/>
          : null
      }

      { 
        !status
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
  selection: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  countries: PropTypes.array.isRequired,
  push: PropTypes.func.isRequired,
  changeCountrySearchInput: PropTypes.func.isRequired,
  selectCountry: PropTypes.func.isRequired,
}
