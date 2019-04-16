import React from 'react'
import PropTypes from 'prop-types'

import { PageTemplate, HBox } from '@ui/atoms'
import { ModalHeader, SearchInput, SearchStatus } from '@ui/molecules'
import { CountriesList } from '@ui/organisms'
import { routes } from '../../../routes'


export const SelectCountry = ({ push, search }) => (
  <PageTemplate>
    <ModalHeader action={() => push(`${routes.EXCHANGE}`)}>
      <SearchInput onChange={console.log} />
    </ModalHeader>
    
    <HBox />
    <CountriesList
      title={'История поиска'}
      list={[
        { title: 'Российская Федерация', id: 'RF' },
        { title: 'Соединенные Штаты Америки', id: 'USA' },
      ]}
      selectCountry={console.log}
    />

    <SearchStatus 
      status="initial" 
    />
  </PageTemplate>
)

SelectCountry.propTypes = {
  push: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
}
