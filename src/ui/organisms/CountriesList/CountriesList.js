import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'
import { Caption2 } from '@ui/atoms/Typography'
import { Country } from '@ui/molecules'

const TitleContainer = styled.div`
  padding-left: ${({ theme }) => theme.paddings.main}px;
`

export const CountriesList = ({ 
  title, list, selectCountry, selection,
}) =>
  list.length > 0 
    ? (
      <>
        <TitleContainer>
          <Caption2>{title}</Caption2>
        </TitleContainer>
        {list.map(country => (
          <Country 
            key={country.alpha2Code} 
            title={country.name} 
            onPress={() => {
              selectCountry({selection, country})
            }} />
        ))}
      </>
    ) : null

CountriesList.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      alpha2Code: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectCountry: PropTypes.func.isRequired,
  selection: PropTypes.string.isRequired,
}
