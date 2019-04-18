import React from 'react'
import PropTypes from 'prop-types'
import { routes } from '../../../routes'

import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'
import { styled } from '@ui/theme'
import { Header, ButtonAccent, SelectField, CheckboxWithText, TextField, SearchStatus } from '@ui/molecules'
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
  selectCountryTrigger,
  changeValuesTrigger, exchangeRateStatus,
}) => {
  const currency1 = country1.currencies ? country1.currencies[0] : {};
  const currency2 = country2.currencies ? country2.currencies[0] : {};

  return (
    <PageTemplate>
      <Header icon="back" action={() => push(`${routes.CONFIRM}`)} />
      <Flex1>
        <Wrapper>
          <SelectField
            label="Страна 1"
            value={country1.name}
            onPress={() => selectCountryTrigger('country1')}
          />
          <SelectField
            label="Страна 2"
            value={country2.name}
            onPress={() => selectCountryTrigger('country2')}
          />

          {
            country1.currencies && country2.currencies
              ? (exchangeRateStatus === 'loading' || exchangeRateStatus === 'errored')
                ? <SearchStatus status={exchangeRateStatus} message={exchangeRateStatus === 'errored' ? 'Курс валютной пары не найден' : ''} />
                : (<>
                    <Divider />
                    <HBox />
                    <TextField
                      label={`${currency1.name} (${currency1.code})`}
                      onChange={value => changeValuesTrigger({ value, convertDirection: 'from' })}
                      tip={Object.keys(country1).length === 0 ? 'Выберите страну 1' : ''}
                      value={fromValue}
                      endAdornment={currency1.symbol}
                    />
                    <HBox />
                    <TextField
                      label={`${currency2.name} (${currency2.code})`}
                      onChange={value => changeValuesTrigger({ value, convertDirection: 'to' })}
                      value={toValue}
                      tip={Object.keys(country2).length === 0 ? 'Выберите страну 2' : ''}
                      endAdornment={currency2.symbol}
                    />
                  </>)
              : null
          }

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
}

Exchange.propTypes = {
  push: PropTypes.func.isRequired,
  terms: PropTypes.bool.isRequired,
  fromValue: PropTypes.string.isRequired,
  toValue: PropTypes.string.isRequired,
  fromTime: PropTypes.string.isRequired,
  toTime: PropTypes.string.isRequired,
  country1: PropTypes.object.isRequired,
  country2: PropTypes.object.isRequired,
  changeTerms: PropTypes.func.isRequired,
  selectCountryTrigger: PropTypes.func.isRequired,
  exchangeRateStatus: PropTypes.string.isRequired,
  changeValuesTrigger: PropTypes.func.isRequired,
}
