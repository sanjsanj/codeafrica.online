import React from 'react'

import Layout from '../components/Layout/index'
import SEO from '../components/Seo/index'
import LogoImage from '../components/LogoImage/index'
import CodeKampala from '../components/CodeKampala/index'
import Partners from '../components/Partners/index'

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
