
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

  const Aboutpage = () => {
    return (
      <Layout pageTitle="About Page">
        <p>Esta é uma página sobre o projeto do Blog com gatsby.</p>
      </Layout>
    )
  }

export const Head = () => < Seo title="About Page" />

export default Aboutpage