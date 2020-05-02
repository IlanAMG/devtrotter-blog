import React from 'react'
import { Link } from "gatsby"
import Img from 'gatsby-image'

import StyledLastArticle from './StyledLastArticle';

export const LastArticle = ({ node, title, author }) => {
    return (
        <StyledLastArticle key={node.fields.slug}>
        {!!node.frontmatter.miniature && !!node.frontmatter.miniature.childImageSharp ?
            <Img
                fixed={node.frontmatter.miniature.childImageSharp.fixed}
                alt={title}
            />
        : 
            <img alt={title} src={node.frontmatter.miniature.publicURL} />

        }
            <div className='container-article-right'>
                    <h6>
                        {node.frontmatter.categorie}
                    </h6>
                    <h2>
                        <Link className='title-lastarticle' to={node.fields.slug}>
                            {title}
                        </Link>
                    </h2>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: node.frontmatter.description || node.excerpt,
                        }}
                    />
                    <small>By <font>{author}</font> | {node.frontmatter.date}</small>
            </div>
        </StyledLastArticle>
    )
}
