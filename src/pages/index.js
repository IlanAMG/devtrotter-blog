import React, { useState, useRef, useEffect } from "react"
import { Link, graphql } from "gatsby"

import '../style/style.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ArticleItem } from '../components/ArticleItem/ArticleItem';
import { ListArticles } from '../components/ListArticles/ListArticles';
import { LastArticle } from "../components/LastArticle/LastArticle"
import { MenuFixedRight } from '../components/MenuFixedRight/MenuFixedRight';
import useWindowSize from '../untils/useWindowSize';

const BlogIndex = ({ data, location }) => {
  const [styleFixedIndex, setStyleFixedIndex] = useState({
    'marginRight': 0,
    'top': '65px',
    'position': 'fixed'
  })
  const [fixedIndex, setFixedIndex] = useState(false)

  const ref = useRef(null)
  const sizeWindow = useWindowSize();
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const author = data.site.siteMetadata.author.name

  const getMarginRightFixedIndex = () => {
    const widthContainerIndex = ref.current.clientWidth
    const widthWindow = window.innerWidth
    const marginRight = (widthWindow - widthContainerIndex) / 2

    setStyleFixedIndex({
      ...styleFixedIndex,
      'marginRight': marginRight
    })
  }

  const fixedIndexOnScroll = () => {
    const distanceTopAndContainerIndex = ref.current.getBoundingClientRect().y
    if (distanceTopAndContainerIndex <= 60) {
      setFixedIndex(true)
    } else {
      setFixedIndex(false)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('scroll', fixedIndexOnScroll, { passive: true });
    }, 100)
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', fixedIndexOnScroll);
    };
  }, []);

  useEffect(() => {
    getMarginRightFixedIndex()
  }, [sizeWindow])

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />

      {posts.map(({ node }, i) => {
        const title = node.frontmatter.title || node.fields.slug
        if (i === 0) {
          // DERNIER ARTICLE
          return (
            <>
              <LastArticle author={author} node={node} title={title} />
              <div className='divider'></div>
            </>
          )
        }
      })}
      <div className='container-index' ref={ref}>
        <ListArticles>
          {posts.map(({ node }, i) => {
            const title = node.frontmatter.title || node.fields.slug
            if (i > 0) {
              return (
                <ArticleItem author={author} node={node} title={title} key={node.fields.slug} />
              )
            } 
            return
          })}
        </ListArticles>
        <MenuFixedRight fixedIndex={fixedIndex} styleFixedIndex={styleFixedIndex} />
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            categorie
            miniature {
              childImageSharp {
                fluid(maxWidth: 225) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                fixed(height: 480, width: 580) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
