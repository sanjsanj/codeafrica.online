import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import './reset.css'
import theme from './theme'

const StyledWrapper = styled.div`
  background-color: ${props => props.theme.backgroundColour};
  height: 100%;
  min-height: 100vh;
  color: ${props => props.theme.textColour};
  padding: 20px;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledWrapper>
      {children}
      <footer>© {new Date().getFullYear()}</footer>
    </StyledWrapper>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
