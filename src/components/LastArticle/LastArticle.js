import React from 'react'
import { Link } from "gatsby"
import Img from 'gatsby-image'

import StyledLastArticle from './StyledLastArticle';

export const LastArticle = ({ node, title, author }) => {
    return (
        <StyledLastArticle key={node.fields.slug}>
            <Link className='link-last-article' to={node.fields.slug}>
                {!!node.frontmatter.miniature && !!node.frontmatter.miniature.childImageSharp ?
                    <Img
                        fluid={node.frontmatter.miniature.childImageSharp.fluid}
                        alt={title}
                        style={{width: '75%'}}
                    />
                : 
                    null

                }
                    <div className='container-article-right'>
                            <h6>
                                {node.frontmatter.categorie}
                            </h6>
                            <h2 className='title-lastarticle' to={node.fields.slug}>
                                {title}
                            </h2>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: node.frontmatter.description || node.excerpt,
                                }}
                            />
                                                    {/* eslint-disable-next-line */}
                            <small>By <Link to='/apropos'>{author}</Link> | {node.frontmatter.date}</small>
                    </div>
            </Link>
        </StyledLastArticle>
    )
}
