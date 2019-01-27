import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`code`, `africa`, `women`, `bootcamp`, `startup`, `tech`]}
    />

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
          <Link to="https://www.etcafrica.org">Educating The Children</Link>
        </li>
        <li>
          <Link to="https://www.innovationvillage.co.ug">
            Innovation Village
          </Link>
        </li>
        <li>
          <Link to="https://www.thefundingnetwork.org.uk">
            The Funding Network
          </Link>
        </li>
      </ul>
    </section>
  </Layout>
)

export default IndexPage
