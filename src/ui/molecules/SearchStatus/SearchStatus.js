import React from 'react'
import PropTypes from 'prop-types'

import { styled, withTheme } from '@ui/theme'
import { HBox, IconLoader } from '@ui/atoms'
import { HLevel5 } from '@ui/atoms/Typography'

import NotFoundImage from '@ui/assets/notFound.png'

const Container = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SearchStatus = withTheme(({ status, theme }) => (
  <Container>
    {status === 'initial' ? <HLevel5>Начните набирать</HLevel5> : null}
    {status === 'notFound' ? (
      <NotFound>
        <img src={NotFoundImage} alt="" />
        <HBox />
        <HLevel5>Ничего не найдено</HLevel5>
      </NotFound>
    ) : null}
    {status === 'loading' ? (
      <IconLoader color={theme.pallete.radicalRed} />
    ) : null}
  </Container>
))

SearchStatus.propTypes = {
  status: PropTypes.oneOf(['','initial', 'notFound', 'loading']).isRequired,
}
