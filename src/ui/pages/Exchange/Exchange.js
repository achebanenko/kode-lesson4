import React from 'react'
import PropTypes from 'prop-types'
import { routes } from '../../../routes'

import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'
import { styled } from '@ui/theme'
import { Header, ButtonAccent, SelectField, CheckboxWithText, TextField } from '@ui/molecules'
import { DeliveryTime } from '@ui/organisms'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

export const Exchange = ({
  push, 
  terms,
  fromValue, toValue,
  fromTime, toTime,
  country1, country2,
  changeTerms,
  searchCountriesTrigger,
  changeValuesTrigger,
}) => (
  <PageTemplate>
    <Header icon="back" action={() => push(`${routes.CONFIRM}`)} />
    <Flex1>
      <Wrapper>
        <SelectField
          label="Страна 1"
          value={country1.name}
          onPress={() => searchCountriesTrigger('country1')}
        />
        <SelectField
          label="Страна 2"
          value={country2.name}
          onPress={() => searchCountriesTrigger('country2')}
        />
        <Divider />
        <HBox />
        <TextField
          label="Российский рубль (RUB)"
          onChange={value => changeValuesTrigger({ value, convertDirection: 'from' })}
          tip={Object.keys(country1).length === 0 ? 'Выберите страну 1' : ''}
          value={fromValue}
          endAdornment="₽"
        />
        <HBox />
        <TextField
          label="Фунт стерлингов (GBP)"
          onChange={value => changeValuesTrigger({ value, convertDirection: 'to' })}
          value={toValue}
          tip={Object.keys(country2).length === 0 ? 'Выберите страну 2' : ''}
          endAdornment="£"
        />
        <HBox />
        <DeliveryTime
          fromValue={fromTime}
          toValue={toTime}
          fromAction={() => push(`${routes.TIME_FROM}`)}
          toAction={() => push(`${routes.TIME_TO}`)}
          tip={(!fromTime && !toTime) ? 'Выберите время доставки' : ''}
        />
        <HBox />
        <CheckboxWithText value={terms} onPress={changeTerms}>
          Со всеми условиями согласен, возможно вторая строка
        </CheckboxWithText>
      </Wrapper>
    </Flex1>
    <Wrapper>
      <ButtonAccent onPress={() => undefined}>Отправить</ButtonAccent>
    </Wrapper>
  </PageTemplate>
)

Exchange.propTypes = {
  terms: PropTypes.bool.isRequired,
  fromValue: PropTypes.string.isRequired,
  toValue: PropTypes.string.isRequired,
  fromTime: PropTypes.string.isRequired,
  toTime: PropTypes.string.isRequired,
  country1: PropTypes.object.isRequired,
  country2: PropTypes.object.isRequired,
  changeTerms: PropTypes.func.isRequired,
  changeValuesTrigger: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
}
