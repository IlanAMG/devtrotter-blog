import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout';
import SEO from '../components/seo';

import { SectionPropos } from '../components/SectionPropos/SectionPropos';

const apropos = ({ data, location}) => {
    const siteTitle = data.site.siteMetadata.title
    const ilan = data.site.siteMetadata.author.ilan.name
    const ilanDesc = data.site.siteMetadata.author.ilan.desc
    const seb = data.site.siteMetadata.author.seb.name
    const sebDesc = data.site.siteMetadata.author.seb.desc
    const remi = data.site.siteMetadata.author.remi.name
    const remiDesc = data.site.siteMetadata.author.remi.desc
    const pictureIlan = data.pictureIlan.childImageSharp.fixed
    const pictureSeb = data.pictureSeb.childImageSharp.fixed
    const pictureRemi = data.pictureRemi.childImageSharp.fixed

    return (
        <Layout location={location} pageTitle={siteTitle}>
          <SEO title="À propos" />
          <SectionPropos 
            pictureIlan={pictureIlan} 
            pictureSeb={pictureSeb} 
            pictureRemi={pictureRemi} 
            ilan={ilan}
            seb={seb}
            remi={remi}
            ilanDesc={ilanDesc}
            sebDesc={sebDesc}
            remiDesc={remiDesc}
          />
        </Layout>
    )
}

export default apropos

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          ilan {
            name
            desc
          }
          seb {
            name
            desc
          }
          remi {
            name
            desc
          }
        }
      }
    }
    pictureIlan: file(relativePath: {eq: "profil-ilan.jpg"}) {
      childImageSharp {
        fixed(height: 200, width: 200) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    pictureSeb: file(relativePath: {eq: "profil-seb.jpg"}) {
      childImageSharp {
        fixed(height: 200, width: 200) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    pictureRemi: file(relativePath: {eq: "profil-remi.jpg"}) {
      childImageSharp {
        fixed(height: 200, width: 200) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`