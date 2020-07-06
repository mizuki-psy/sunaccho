module.exports = {
  siteMetadata: {
    title: 'みずき＠精神科医のブログ',
    siteUrl: 'https://mizuki-psy.jp',
//    siteurl: 'wonderful-pare-f7f6a7.netlify.app',
    summary: '発達障害を持つ女医がこころの病気と健康について語る。',
    description: 'よりすぐりの正しいことを発信して、どこまでいけるのかチャレンジするブログ',
    image: "/img/profile.png",
    social: {
      twitter: `@mizuki-psy`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `ads`,
        path: `${__dirname}/static/ads/`,
      },
    },
    {
      resolve: `gatsby-transformer-rehype`,
      options: {
        // Condition for selecting an existing GrapghQL node (optional)
        // If not set, the transformer operates on file nodes.
        filter: node => node.internal.type === `GhostPost`,
        // Only needed when using filter (optional, default: node.html)
        // Source location of the html to be transformed
        source: node => node.html,
        // Additional fields of the sourced node can be added here (optional)
        // These fields are then available on the htmlNode on `htmlNode.context`
        contextFields: [],
        // Fragment mode (optional, default: true)
        fragment: true,
        // Space mode (optional, default: `html`)
        space: `html`,
        // EmitParseErrors mode (optional, default: false)
        emitParseErrors: false,
        // Verbose mode (optional, default: false)
        verbose: false,
        // Plugins configs (optional but most likely you need one)
        plugins: [],
      },
    },
	{
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        lang: `ja`,
        icon: 'src/img/utatan.png', // This path is relative to the root of the site.
        include_favicon: false, // This will exclude favicon link tag
      },

	},
    'gatsby-plugin-twitter',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
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
