import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import './reset.css'

const StyledLayout = styled.div`
  background-color: black;
  min-height: 100vh;
  min-width: 100vw;
`

const Layout = ({ children }) => (
  <StyledLayout>
    {children}
    <footer>© {new Date().getFullYear()}</footer>
  </StyledLayout>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
