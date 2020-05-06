import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image';

import RehypeReact from 'rehype-react'

import bio from '../components/Bio/bio'
import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledBlogPost from './StyledBlogPost';
import StyledPrevNext from './StyledPrevNext';

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: { 'bio': bio }
}).Compiler

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <StyledBlogPost className='template-article'>
        <header>
          <h1>
            {post.frontmatter.title}
          </h1>
            {post.frontmatter.description && <span>{post.frontmatter.description}</span>}
          <small>By <Link to='/apropos'>Dev Trotter</Link> | {post.frontmatter.date}</small>
          {!!post.frontmatter.miniature && !!post.frontmatter.miniature.childImageSharp ?
            <div className='wrapper-image'>
                <Img
                    fluid={post.frontmatter.miniature.childImageSharp.fluid}
                    alt='miniature'
                />
            </div>
            : 
                null
            }
        </header>

        {/* <section dangerouslySetInnerHTML={{ __html: post.html }} /> */}
        <section>{renderAst(post.htmlAst)}</section>
      </StyledBlogPost>

      <StyledPrevNext className='nav-prev-next'>
        <ul>
          <li>
            {previous && (
              <Link className='prev-next' to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link className='prev-next' to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </StyledPrevNext>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      htmlAst
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        categorie
        miniature {
          childImageSharp {
            fluid(maxHeight: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
