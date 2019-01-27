import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import LogoImage from '../components/LogoImage'
import CodeKampala from '../components/CodeKampala'
import Partners from '../components/Partners'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`code`, `africa`, `women`, `bootcamp`, `startup`, `tech`]}
    />

    <LogoImage />

    <CodeKampala />

    <Partners />
  </Layout>
)

export default IndexPage
