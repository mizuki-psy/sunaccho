module.exports = {
  siteMetadata: {
    title: 'みずき＠精神科医のブログ',
    siteUrl: `https://mizuki-psy.jp`,
//    siteUrl: 'wonderful-pare-f7f6a7.netlify.app',
    summary: '発達障害を持つ女医がこころの病気と健康について語る。',
    description: 'よりすぐりの正しいことを発信して、どこまでいけるのかチャレンジするブログ',
    social: {
      twitter: `mizuki-psy`,
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: 'sunaccho.com',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'https',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: false,
        auth: {},
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/taxonomies",
          "**/users",
          "**/tags",
        ],
      },
    },
    'gatsby-plugin-twitter',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ["/contact"],
      }
    },
    {
      // Removes unused css rules
      resolve:'gatsby-plugin-purgecss',
      options: {
        // Activates purging in gatsby develop
        develop: true,
        // Purge only the main css file
        purgeOnly: ['/all.sass'],
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
