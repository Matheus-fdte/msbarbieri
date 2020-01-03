const siteMetadata = require('./src/data/siteMetadata');
const { getJobUrl } = require('./src/data/resume/getJobUrl');

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-image',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-61019439-1',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Matheus Barbieri tech blog',
        short_name: 'Matheus Barbieri',
        icons: [
          {
            src: '/images/logo.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
        ],
        start_url: '/',
        background_color: 'white',
        theme_color: 'white',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    "gatsby-plugin-catch-links",
    "gatsby-transformer-remark",
    {
      resolve: 'gatsby-plugin-sitemap'
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: 'pt',
        useLangKeyLayout: true,
        markdownRemark: {
          postPage: 'src/templates/post.jsx',
          query: `
          {
              allMarkdownRemark {
                  edges {
                  node {
                      fields {
                      slug,
                      langKey
                      }
                  }
                  }
              }
          }
          `
        }
      }
    }, {
      resolve: 'gatsby-plugin-i18n-tags',
      options: { // Default options        
        tagPage: 'src/templates/tag.jsx',
        tagsUrl: '/tags/',
        langKeyForNull: 'any'
      }
    }, {
      resolve: 'gatsby-plugin-i18n-readnext',
      options: { // Default options
        nPosts: 3
      }
    }, {
      resolve: 'local-plugin-jobs-and-clients',
      options: {
        getJobUrl
      }
    },
    'gatsby-plugin-styled-components'
  ]
}