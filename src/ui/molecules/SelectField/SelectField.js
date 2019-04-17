import React from 'react'
import PropTypes from 'prop-types'
import { styled, withTheme } from '@ui/theme'
import { FieldContainer, HBox, IconExpand } from '@ui/atoms'
import { InputError, InputTip, Body1 } from '@ui/atoms/Typography'
import { FormLabel, FormAdornment } from '@ui/molecules'

const SelectFieldContainer = styled.div`
  box-sizing: border-box;
  padding-left: ${({ theme }) => theme.paddings.main}px;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.pallete.darkWhite};
  height: 40px;
  min-height: 40px;
  border: 1px
    ${({ error, theme }) =>
      error ? theme.pallete.errorColor : theme.pallete.darkWhite}
    solid;
`

const ValueContainer = styled.div`
  display: flex;
  flex: 1;
  height: 40px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  overflow: hidden;
  white-space: nowrap;
`

export const SelectField = withTheme(
  ({ label, error, onPress, tip, value, theme }) => (
    <FieldContainer>
      <FormLabel>{label}</FormLabel>
      <HBox height={theme.paddings.half} />
      <SelectFieldContainer error={error} onClick={onPress}>
        <ValueContainer>
          <Body1>{value}</Body1>
        </ValueContainer>
        <FormAdornment>
          <IconExpand />
        </FormAdornment>
      </SelectFieldContainer>
      <HBox height={theme.paddings.half} />
      {error ? <InputError>{error}</InputError> : <InputTip>{tip}</InputTip>}
    </FieldContainer>
  ),
)

SelectField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  tip: PropTypes.string,
  onPress: PropTypes.func.isRequired,
}
