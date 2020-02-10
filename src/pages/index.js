import React from "react"
import Helmet from 'react-helmet'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/Hero"

import "../styles.css"

const IndexPage = (children) => (
  <>


    <Layout>
      <SEO title="Home" />
      <Hero>{children}</Hero>
    </Layout>

  </>
)

export default IndexPage
