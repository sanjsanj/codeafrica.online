import React from 'react'
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import PrismCode from 'react-prism'
import styled from 'styled-components'

import { StyledSection } from '../Styles'

const StyledTitle = styled.h2`
  font-size: 1.6em;
`

export default function CodeKampala() {
  return (
    <StyledSection>
      <StyledTitle>code:KAMPALA</StyledTitle>

      <PrismCode component="pre" className="language-javascript">
{`>code:KAMPALA (is part of code:AFRICA) => which is a social enterprise:focusing on <> training young women </> in Sub Saharan Africa in code and equipping them with the skills to <> find jobs in software development and STEM careers </>;
Our first market (is Uganda) => which has one of the highest youth unemployment.rates in the:WORLD;`}
      </PrismCode>

      <p>Watch this space... more information coming soon!</p>
    </StyledSection>
  )
}
