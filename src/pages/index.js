import React, { useState, useRef, useEffect } from "react"

import { graphql } from "gatsby"

import '../style/style.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ArticleItem } from '../components/ArticleItem/ArticleItem';
import { ListArticles } from '../components/ListArticles/ListArticles';
import { LastArticle } from "../components/LastArticle/LastArticle"
import { MenuFixedRight } from '../components/MenuFixedRight/MenuFixedRight';
import useWindowSize from '../untils/useWindowSize';
import FlecheGoTop from "../components/FlecheGoTop"

const BlogIndex = ({ data, location }) => {
  const [styleFixedIndex, setStyleFixedIndex] = useState({})

  const ref = useRef(null)
  const sizeWindow = useWindowSize();
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const author = data.site.siteMetadata.author.name

  const getMarginRightFixedIndex = () => {
    const widthContainerIndex = ref.current.clientWidth
    const widthWindow = window.innerWidth
    const marginRight = (widthWindow - widthContainerIndex) / 2
    if (widthWindow >= 850) {
      setStyleFixedIndex({
        ...styleFixedIndex,
        'marginRight': marginRight
      })
    }
  }

  const fixedIndexOnScroll = () => {
    const distanceTopAndContainerIndex = ref.current.getBoundingClientRect().y
    const distanceBottomAndContainerIndex = ref.current.getBoundingClientRect().bottom
    const containerFixed = window.innerHeight
    if (window.innerWidth <= 850) {
      return setStyleFixedIndex({})
    } else if (window.innerWidth > 850) {
      if (distanceBottomAndContainerIndex <= containerFixed && window.innerWidth >= 850) {
        setStyleFixedIndex({
          ...styleFixedIndex,
          'bottom': '0px',
          'position': 'absolute'
        })
      } else if (distanceTopAndContainerIndex <= 60 && window.innerWidth >= 850) {
        setStyleFixedIndex({
          ...styleFixedIndex,
          'top': '65px',
          'position': 'fixed'
        })
      } else {
        setStyleFixedIndex({ ...styleFixedIndex, 'top': '0px' })
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('scroll', fixedIndexOnScroll, { passive: true });
    }, 100)
                            // eslint-disable-next-line
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', fixedIndexOnScroll);
    };
                            // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getMarginRightFixedIndex()
    fixedIndexOnScroll()
                            // eslint-disable-next-line
  }, [sizeWindow])

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />

      {posts.map(({ node }, i) => {
        const title = node.frontmatter.title || node.fields.slug
        if (i === 0) {
          // DERNIER ARTICLE
          return (
            <React.Fragment key={i}>
              <LastArticle author={author} node={node} title={title} />
              <div className='divider'></div>
            </React.Fragment>
          )
        } else {
          return null
        }
      })}
      <div className='container-index' ref={ref}>
        <ListArticles>
          {posts.map(({ node }, i) => {
            const title = node.frontmatter.title || node.fields.slug
            if (i > 0) {
              return (
                <ArticleItem author={author} node={node} title={title} key={i} />
              )
            }
            return null
          })}
        </ListArticles>
        <MenuFixedRight styleFixedIndex={styleFixedIndex} />
      </div>
      <FlecheGoTop sizeWindow={sizeWindow} />
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
                fluid(maxHeight: 480) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
