import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'
import { Body2 } from '@ui/atoms/Typography'
import { Header, TextField, ButtonAccent, RequestStatus } from '@ui/molecules'
import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

export const SignIn = ({ value, status, changeNumber, signInTrigger }) => (
  <PageTemplate>
    <Header title="Ввод номера телефона" />
    <Divider />
    <Flex1>
      <Wrapper>
        <HBox height={9} />
        <Body2>На указанный телефон будет выслан код подтверждения</Body2>
        <HBox height={20} />
        <TextField
          label="Номер телефона"
          startAdornment="+7"
          placeholder="9XXXXXXXXX"
          onChange={changeNumber}
          value={value}
        />
      </Wrapper>
      <RequestStatus
        status={status}
        loadingMessage="Телефон отправляется"
        successMessage="Номер успешно отправлен"
        failureMessage="Произошла неизвестная ошибка"
      />
    </Flex1>
    <Wrapper>
      <ButtonAccent onPress={signInTrigger}>Отправить</ButtonAccent>
    </Wrapper>
  </PageTemplate>
)

SignIn.propTypes = {
  value: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  changeNumber: PropTypes.func.isRequired,
  signInTrigger: PropTypes.func.isRequired,
}
