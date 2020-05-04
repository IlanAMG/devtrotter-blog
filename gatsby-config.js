module.exports = {
  siteMetadata: {
    title: `Dev Trotter`,
    author: {
      name: `Dev Trotter`,
      summary: `who lives and works in San Francisco building useful things.`,
      ilan: {
        name: `Ilan Amzallag`,
        picture: `profil-ilan.jpg`,
        desc: `ljndljhsqbfjhqsdbfkjsqd fksqdbf ksdqjfbksdqjfbqosdjhfbkqsdjhfbsqkjfbkjhsqdfkjqsdgfkqsdjf kqsdjfbsqdjf`,
      },
      seb: {
        name: `Sébastien Chapuy`,
        picture: `profil-seb.jpg`,
        desc: `ljndljhsqbfjhqsdbfkjsqd fksqdbf ksdqjfbksdqjfbqosdjhfbkqsdjhfbsqkjfbkjhsqdfkjqsdgfkqsdjf kqsdjfbsqdjf`,
      },
      remi: {
        name: `Rémi Neret`,
        picture: `profil-remi.jpg`,
        desc: `ljndljhsqbfjhqsdbfkjsqd fksqdbf ksdqjfbksdqjfbqosdjhfbkqsdjhfbsqkjfbkjhsqdfkjqsdgfkqsdjf kqsdjfbsqdjf`,
      }
    },
    description: `Blog commaunautaire dans le domaine du développement Web, Mobile, UI/UX Design et Jeux vidéos.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    social: {
      ilan: `https://ilanamzallag.com`,
    },
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: '_blank',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `DevTrotter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/dev-trotter.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
