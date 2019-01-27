import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import LogoImage from '../components/LogoImage'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`code`, `africa`, `women`, `bootcamp`, `startup`, `tech`]}
    />

    <LogoImage />

    <section>
      <h2>code:KAMPALA</h2>
      <p>
        code:KAMPALA is part of code:AFRICA which is a social enterprise
        focusing on training young women in Sub Saharan Africa in code, and
        equipping them with the skills to find jobs in software development and
        STEM careers. Our first market is Uganda, which has one of the highest
        youth unemployment rates in the world.
      </p>
      <p>Watch this space... more information coming soon!</p>
    </section>

    <section>
      <h3>Partners</h3>
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
          <a href="https://www.innovationvillage.co.ug">
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
    </section>
  </Layout>
)

export const query = graphql`
  query {
    partnerETC: file(relativePath: { eq: "logo-etc.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    partnerIV: file(relativePath: { eq: "logo-the-innovation-village.png" }) {
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
`

export default IndexPage
