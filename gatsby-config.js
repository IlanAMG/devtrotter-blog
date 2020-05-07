const queries = require("./src/untils/algolia")
require('dotenv').config()
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.devtrotter.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    siteUrl: siteUrl,
    image: '/assets/dev-trotter.png',
    title: `Dev Trotter`,
    author: {
      name: `Dev Trotter`,
      summary: `who lives and works in San Francisco building useful things.`,
      ilan: {
        name: `Ilan Amzallag`,
        picture: `profil-ilan.jpg`,
        desc: `Jeune développeur de 23 ans autodidacte, j'ai toujours aimé les nouvelles technologies et l'informatique. J'apprends la programmation de manière autodidacte depuis plus d'1 an et c'est rapidement devenu ma plus grande passion. J'ai toujours aimé apprendre des nouveaux savoirs et les partager, ce sera mon cap durant mon apprentissage.`,
      },
      seb: {
        name: `Sébastien Chapuy`,
        picture: `profil-seb.jpg`,
        desc: `Jeune développeur de 24 ans, j'ai découvert le monde informatique, qui a été un électrochoc. J'ai décidé de me reconvertir professionnellement dans le développement Web et le UI/UX Design, passant le plus clair de mon temps à coder. J'ai décidé de m'ouvrir aux différentes cultures numériques, accompagné de mes plus fidèles amis, et peut-être vous. Avant d'être une agence, nous sommes aussi une communauté.`,
      },
      remi: {
        name: `Rémi Neret`,
        picture: `profil-remi.jpg`,
        desc: `Designer de 23 ans, baignant dans l’informatique depuis mon plus jeune âge, également friand de photographie, de dessin, d’art et de belles choses ; l’inspiration peut se trouver partout. J’ai décidé d’associer mes différentes passions et d’en faire mon métier. Je fais en sorte que l’emballage soit aussi beau et qualitatif que le contenu.`,
      }
    },
    description: `Blog commaunautaire dans le domaine du développement Web, Mobile, UI/UX Design et Jeux vidéos.`,
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
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-component`,
          `gatsby-plugin-netlify-cms-paths`,
          'gatsby-remark-relative-images',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 790,
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
          {
            resolve: `@raae/gatsby-remark-oembed`, // plugin pour mettre des beau lien avec pleins de provider facebook twitter youtube etc..
            options: {
              providers: {
                include: ['Twitter', 'YouTube', 'Sandbox', 'Instagram', 'Codepen']
              }
            }
          },
          {
            resolve: "gatsby-plugin-less",
            options: {
              modifyVars: require("./src/style/themes/antd.js"),
              javascriptEnabled: true,
            },
          },
          {
            resolve: "gatsby-plugin-antd",
            options: {
              style: true,
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
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
