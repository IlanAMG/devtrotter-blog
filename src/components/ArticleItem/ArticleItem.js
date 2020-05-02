import React from 'react'
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import StyledArticleItem from './StyledArticleItem';

export const ArticleItem = ({ node, title, author }) => {
    return (
        <StyledArticleItem>
            <Img
                fluid={node.frontmatter.miniature.childImageSharp.fluid}
                style={{ height: 225, width: 225, float: 'right' }}
                alt={title}
            />
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
        </StyledArticleItem>
    )
}
