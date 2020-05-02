import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { IoIosSearch } from 'react-icons/io';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

import Img from 'gatsby-image'

import StyledHeader from './StyledHeader';

export const Header = () => {
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

    const siteTitle = data.site.siteMetadata.title
    const logo = data.logo.childImageSharp.fixed

    return (
        <StyledHeader>
            <div className='wrapper-header left'>
                <Img fixed={logo} alt='logo' />
                <h1>{siteTitle}</h1>
            </div>
            <div className='wrapper-header right'>
                <div className='wrapper-social mail'>
                    <GrMail />
                </div>
                <div className='wrapper-social youtube'>
                    <FaYoutube />
                </div>
                <svg width="0" height="0">
                    <radialGradient id="rg" r="150%" cx="30%" cy="107%">
                        <stop stop-color="#fdf497" offset="0" />
                        <stop stop-color="#fdf497" offset="0.05" />
                        <stop stop-color="#fd5949" offset="0.45" />
                        <stop stop-color="#d6249f" offset="0.6" />
                        <stop stop-color="#285AEB" offset="0.9" />
                    </radialGradient>
                </svg>
                <div className='wrapper-social insta'>
                    <FaInstagram className='logo-insta' />
                </div>
                <div className='wrapper-social twitter'>
                    <FaTwitter />
                </div>
                <div className='wrapper-search'>
                    <IoIosSearch />
                </div>
            </div>
        </StyledHeader>
    )
}