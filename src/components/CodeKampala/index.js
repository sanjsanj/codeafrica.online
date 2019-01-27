import React from 'react'
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import PrismCode from 'react-prism'

import { StyledSection } from '../Styles'

export default function CodeKampala() {
  return (
    <StyledSection>
      <h2>code:KAMPALA</h2>
      <PrismCode className="language-javascript">
        code:KAMPALA is part of code:AFRICA which is a social enterprise
        focusing on training young women in Sub Saharan Africa in code, and
        equipping them with the skills to find jobs in software development and
        STEM careers. Our first market is Uganda, which has one of the highest
        youth unemployment rates in the world.
      </PrismCode>
      <p>Watch this space... more information coming soon!</p>
    </StyledSection>
  )
}
