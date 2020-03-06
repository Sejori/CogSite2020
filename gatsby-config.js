const guid = process.env.GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: 'Cognitant',
    description: 'Health information, delivered better.',
    contact: {
      email: 'hello@cognitant.com',
    },
    menuLinks: [
      {
        name: 'Home',
        link: '/home',
      },
      {
        name: 'What We Do',
        link: '/what-we-do',
      },
      {
        name: 'Case Studies',
        link: '/case-studies',
      },
      {
        name: 'About',
        link: '/about',
      },
      {
        name: 'News',
        link: '/news',
      },
      {
        name: 'Contact',
        link: '/contact',
      }
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: guid ? guid : 'UA-116709596-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
  ],
};
