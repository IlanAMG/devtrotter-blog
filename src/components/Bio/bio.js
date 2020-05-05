import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import StyledBio from './StyledBio';

const Bio = ({ sign }) => {
  const [social, setSocial] = useState([])
  const [name, setName] = useState('')
  const [picture, setPicture] = useState({})
  const [desc, setDesc] = useState('')

  const data = useStaticQuery(graphql`
    query BioQuery {
      profilIlan: file(absolutePath: { regex: "/profil-ilan.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      profilSeb: file(absolutePath: { regex: "/profil-seb.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      profilRemi: file(absolutePath: { regex: "/profil-remi.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
            ilan {
              desc
            }
            seb {
              desc
            }
            remi {
              desc
            }
          }
        }
      }
    }
  `)
  useEffect(() => {
    if (sign === 'Ilan') {
      setSocial([
        {
          titre: 'Portefolio',
          url: 'https://ilanamzallag.com'
        },
        {
          titre: 'Github',
          url: 'https://github.com/IlanAMG'
        },
        {
          titre: 'Linkedin',
          url: 'https://www.linkedin.com/in/ilan-amzallag-b4a259101/'
        }
      ])
      setName('Ilan Amzallag')
      setPicture(data.profilIlan.childImageSharp.fixed)
      setDesc(data.site.siteMetadata.author.ilan.desc)
    } else if (sign === 'Seb') {
      setSocial([
        {
          titre: 'Github',
          url: 'https://github.com/DevTrotter'
        },
        {
          titre: 'Linkedin',
          url: 'https://www.linkedin.com/in/s%C3%A9bastien-chapuy-a6324bb5/'
        }
      ])
      setName('Sebastien Chapuy')
      setPicture(data.profilSeb.childImageSharp.fixed)
      setDesc(data.site.siteMetadata.author.seb.desc)
    } else if (sign === 'Remi') {
      setSocial([
        {
          titre: 'Linkedin',
          url: 'https://www.linkedin.com/in/remineret/'
        }
      ])
      setName('Remi Neret')
      setPicture(data.profilRemi.childImageSharp.fixed)
      setDesc(data.site.siteMetadata.author.remi.desc)
    }
  }, [sign])

  return (
    <StyledBio>
      <div className='container-desc-bio'>
        <h3>{name}</h3>
        <p>{desc}</p>
        <div className='container-social'>
          {social &&
            social.map((item, i) => {
              return (
                <a target='_blank' href={item.url}>{item.titre}</a>
              )
            })
          }
        </div>
      </div>
      <Img
        style={{
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        fixed={picture}
        alt='profil'
      />
    </StyledBio>
  )
}

export default Bio
