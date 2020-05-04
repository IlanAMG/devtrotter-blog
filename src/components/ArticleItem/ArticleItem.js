import React from 'react'
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import StyledArticleItem from './StyledArticleItem';

export const ArticleItem = ({ node, title, author }) => {
    return (
        <StyledArticleItem>
        <Link to={node.fields.slug}>
            {!!node.frontmatter.miniature && !!node.frontmatter.miniature.childImageSharp ?
                <Img
                    fluid={node.frontmatter.miniature.childImageSharp.fluid}
                    style={{ height: 225, width: 225, float: 'right' }}
                    alt={title}
                />
            : 
                null
            }
                <div className='container-article-right'>
                        <h6>
                            {node.frontmatter.categorie}
                        </h6>
                        <h2 className='title-lastarticle'>
                            {title}
                        </h2>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: node.frontmatter.description || node.excerpt,
                            }}
                        />
                        <small>By <Link to='/apropos'>{author}</Link> | {node.frontmatter.date}</small>
                </div>
            </Link>
        </StyledArticleItem>
    )
}
