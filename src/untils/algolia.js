const postQuery = `{
  posts: allMarkdownRemark {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          slug
          date(formatString: "MMM D, YYYY")
          categorie
        }
        excerpt(pruneLength: 200)
        fields {
          slug
        }
      }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
{
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: `Posts`,
    settings,
  },
]

module.exports = queries