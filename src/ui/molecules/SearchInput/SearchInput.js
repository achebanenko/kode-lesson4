import React from 'react'
import PropTypes from 'prop-types'

import { styled, withTheme } from '@ui/theme'
import { IconFind, VBox } from '@ui/atoms'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 32px;
  background-color: ${({ theme }) => theme.pallete.whiteSmoke};
  border-radius: 32px;
  box-sizing: border-box;
  flex: 1;
`

const StyledInput = styled.input`
  height: 32px;
  line-height: 32px;
  font-family: Montserrat;
  border: none;
  background: transparent;
  flex: 1;
  font-size: 14px;
  color: ${({ theme }) => theme.pallete.gray2};
  outline: none;

  ::placeholder {
    color: ${({ theme }) => theme.pallete.lightGray};
    line-height: 32px;
  }
`

export const SearchInput = withTheme(({ theme, onChange, value, disabled }) => (
  <Container>
    <VBox width={theme.paddings.main + theme.paddings.half} />
    <StyledInput
      onChange={e => onChange(e.currentTarget.value)}
      value={value}
      disabled={disabled}
      placeholder="Поиск"
    />
    <VBox />
    <IconFind />
    <VBox />
  </Container>
))

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool,
}
