import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { StyledSection } from '../Styles'

const Partners = () => (
  <StaticQuery
    query={graphql`
      query {
        partnerETC: file(relativePath: { eq: "logo-etc.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        partnerIV: file(
          relativePath: { eq: "logo-the-innovation-village.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        partnerTFN: file(relativePath: { eq: "logo-the-funding-network.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <StyledSection>
        <h3 style={{marginTop:"5vw"}}>Partners</h3>
        <ul>
          <li>
            <a href="https://www.etcafrica.org">
              <Img
                fluid={data.partnerETC.childImageSharp.fluid}
                alt="Educating The Children"
              />
            </a>
          </li>
          <li>
            <a href="http://www.innovationvillage.co.ug">
              <Img
                fluid={data.partnerIV.childImageSharp.fluid}
                alt="Innovation Village"
              />
            </a>
          </li>
          <li>
            <a href="https://www.thefundingnetwork.org.uk">
              <Img
                fluid={data.partnerTFN.childImageSharp.fluid}
                alt="The Funding Network"
              />
            </a>
          </li>
        </ul>
      </StyledSection>
    )}
  />
)

export default Partners
