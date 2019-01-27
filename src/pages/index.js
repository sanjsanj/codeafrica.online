import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`code`, `africa`, `women`, `bootcamp`, `startup`, `tech`]}
    />
    <h2>code:KAMPALA</h2>
    <p>
      code:KAMPALA is part of code:AFRICA which is a social enterprise focusing
      on training young women in Sub Saharan Africa in code, and equipping them
      with the skills to find jobs in software development and STEM careers. Our
      first market is Uganda, which has one of the highest youth unemployment
      rates in the world.
    </p>
    <p>Watch this space... more information coming soon!</p>
  </Layout>
)

export default IndexPage
