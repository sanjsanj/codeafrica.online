import React from 'react'

import Layout from '../components/Layout/index'
import SEO from '../components/Seo/index'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h2>NOT FOUND</h2>
    <p>Oopsy!  You just found a page that doesn't exist.</p>
  </Layout>
)

export default NotFoundPage
