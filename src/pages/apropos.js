import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout';
import SEO from '../components/seo';

const apropos = ({ data, location}) => {
    const siteTitle = data.site.siteMetadata.title
    return (
        <Layout location={location} pageTitle={siteTitle}>
            <SEO title="À propos" />
            <h1>A propos</h1>
        </Layout>
    )
}

export default apropos

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`