import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby';
import { IoIosSearch } from 'react-icons/io';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

import Img from 'gatsby-image'

import StyledHeader from './StyledHeader';

export const Header = ({ pageTitle }) => {
    const [instaHover, setInstaHover] = useState(false)
    const [showInput, setShowInput] = useState(false)

    const data = useStaticQuery(graphql`
        query headerQuery {
            logo: file(absolutePath: { regex: "/dev-trotter.png/" }) {
                childImageSharp {
                    fixed(width: 40, height: 40) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    const logo = data.logo.childImageSharp.fixed
    
    return (
        <StyledHeader>
            <Link to='/' className='wrapper-header left'>
                <Img style={{marginLeft: '30px', marginRight: '30px'}} fixed={logo} alt='logo' />
                <h1>{pageTitle}</h1>
            </Link>
            <div className='wrapper-header right'>
                <a href="mailto:devtrotter.info@gmail.com" className='wrapper-social mail'>
                    <GrMail />
                </a>
                <a target="_blank" href='https://www.youtube.com/channel/UCHuGcYX0jsbCA0lzFj1DmbA' className='wrapper-social youtube'>
                    <FaYoutube />
                </a>
                <svg width="0" height="0">
                    {
                        !instaHover ?
                            <radialGradient id="rg" r="150%" cx="30%" cy="107%">
                                <stop stop-color="#fdf497" offset="0" />
                                <stop stop-color="#fdf497" offset="0.05" />
                                <stop stop-color="#fd5949" offset="0.45" />
                                <stop stop-color="#d6249f" offset="0.6" />
                                <stop stop-color="#285AEB" offset="0.9" />
                            </radialGradient>
                        : 
                            <radialGradient id="rg" r="150%" cx="30%" cy="107%">
                                <stop stop-color="#ffffff" offset="0" />
                            </radialGradient>
                    }
                </svg>
                <a target="_blank" href='https://www.instagram.com/dev.trotter/?hl=fr' onMouseEnter={() => (setInstaHover(true))} onMouseLeave={() => (setInstaHover(false))} className='wrapper-social insta'>
                    <FaInstagram className='logo-insta' />
                </a>
                <a target="_blank" href=' https://twitter.com/DevTrotter_Pro' className='wrapper-social twitter'>
                    <FaTwitter />
                </a>
                <div className='wrapper-search' onClick={() => setShowInput(!showInput)}>
                    <IoIosSearch />
                </div>
                {
                    showInput &&
                    <input type='text' placeholder='Rechercher un article' />
                }
            </div>
        </StyledHeader>
    )
}