import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby';

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, connectStateResults } from 'react-instantsearch-dom';
import { PostPreview } from '../PostPreview/PostPreview'

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
    const searchClient = algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY);
    
    const IndexResults = connectStateResults(
        ({ searchState, searchResults, children }) => {
            if (searchState.query === undefined || !searchState.query ) {
                return null;
            } else if (searchResults && searchResults.nbHits !== 0) {
                console.log(searchState.query)
                return children;
            } else {
                return (
                    <div className='noResults'>
                    Pas de résultats pour votre recherche...
                </div>
                )
            }
        }
      );

    return (
        <StyledHeader>
            <Link to='/' className='wrapper-header left'>
                <Img style={{marginLeft: '30px', marginRight: '30px', width: '40px', height: '40px'}} fixed={logo} alt='logo' />
                <h1>{pageTitle}</h1>
            </Link>
            <div className='wrapper-header right'>
                <a rel="noopener noreferrer" href="mailto:devtrotter.info@gmail.com" className='wrapper-social mail'>
                    <GrMail />
                </a>
                <a rel="noopener noreferrer" target="_blank" href='https://www.youtube.com/channel/UCHuGcYX0jsbCA0lzFj1DmbA' className='wrapper-social youtube'>
                    <FaYoutube />
                </a>
                <svg width="0" height="0">
                    {
                        !instaHover ?
                            <radialGradient id="rg" r="150%" cx="30%" cy="107%">
                                <stop stopColor="#fdf497" offset="0" />
                                <stop stopColor="#fdf497" offset="0.05" />
                                <stop stopColor="#fd5949" offset="0.45" />
                                <stop stopColor="#d6249f" offset="0.6" />
                                <stop stopColor="#285AEB" offset="0.9" />
                            </radialGradient>
                        : 
                            <radialGradient id="rg" r="150%" cx="30%" cy="107%">
                                <stop stopColor="#ffffff" offset="0" />
                            </radialGradient>
                    }
                </svg>
                <a rel="noopener noreferrer" target="_blank" href='https://www.instagram.com/dev.trotter/?hl=fr' onMouseEnter={() => (setInstaHover(true))} onMouseLeave={() => (setInstaHover(false))} className='wrapper-social insta'>
                    <FaInstagram className='logo-insta' />
                </a>
                <a rel="noopener noreferrer" target="_blank" href=' https://twitter.com/DevTrotter_Pro' className='wrapper-social twitter'>
                    <FaTwitter />
                </a>
                <nav className='wrapper-search' onKeyDown={() => setShowInput(!showInput)} onClick={() => setShowInput(!showInput)}>
                    <IoIosSearch />
                </nav>
                {
                    showInput &&
                    <InstantSearch searchClient={searchClient} indexName="Posts">
                        <SearchBox translations={{ placeholder: 'Rechercher...' }}/>
                            <IndexResults>
                                <Hits hitComponent={PostPreview} />
                            </IndexResults>
                    </InstantSearch>
      
                }
            </div>
        </StyledHeader>
    )
}