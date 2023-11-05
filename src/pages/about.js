
import * as React from 'react'
import Layout from '../components/layout'

  const Aboutpage = () => {
    return (
      <Layout pageTitle="About Page">
        <p>Esta é uma página sobre o projeto do Blog com gatsby.</p>
      </Layout>
    )
  }

export const Head = () => <title>About Page</title>

export default Aboutpage