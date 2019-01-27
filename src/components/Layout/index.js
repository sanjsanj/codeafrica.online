import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import './reset.css'
import theme from './theme'

const StyledWrapper = styled.div`
  background-color: ${props => props.theme.codeGrey};
  font-family: monospace;
  text-align: center;
  min-height: 100vh;
  height: 100%;
`

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  pre {
    white-space: pre-wrap !important;
  }
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledWrapper>
      <StyledContainer>
        {children}
        {/* <footer>© {new Date().getFullYear()}</footer> */}
      </StyledContainer>
    </StyledWrapper>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
