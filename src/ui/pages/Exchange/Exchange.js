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
  terms,
  fromValue,
  toValue,
  fromTime,
  toTime,
  changeTerms,
  changeValuesTrigger,
  push,
}) => (
  <PageTemplate>
    <Header icon="back" />
    <Flex1>
      <Wrapper>
        <SelectField
          label="Страна 1"
          value="Россия"
          onPress={() => push(`${routes.SELECT}`, { search: "country1" })}
        />
        <SelectField
          label="Страна 2"
          value="Англия"
          onPress={() => push(`${routes.SELECT}?country2`)}
        />
        <Divider />
        <HBox />
        <TextField
          label="Российский рубль (RUB)"
          onChange={value => changeValuesTrigger({ value, convertDirection: 'from' })}
          tip="Текст подсказки к полю"
          value={fromValue}
          endAdornment="₽"
        />
        <HBox />
        <TextField
          label="Фунт стерлингов (GBP)"
          onChange={value => changeValuesTrigger({ value, convertDirection: 'to' })}
          value={toValue}
          tip="Текст подсказки к полю"
          endAdornment="£"
        />
        <HBox />
        <DeliveryTime
          fromValue={fromTime}
          toValue={toTime}
          fromAction={() => push(`${routes.TIME_FROM}`)}
          toAction={() => push(`${routes.TIME_TO}`)}
          tip="Выберите время доставки"
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
  changeTerms: PropTypes.func.isRequired,
  changeValuesTrigger: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
}
