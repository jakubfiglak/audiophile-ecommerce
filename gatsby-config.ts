import { GatsbyConfig } from 'gatsby';

require('dotenv').config({
  path: '.env',
});

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Audiophile e-commerce',
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Manrope: 400, 500, 700`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: './graphql/generated-types.ts',
        codegenConfig: {
          avoidOptionals: true,
          maybeValue: 'T',
          inputMaybeValue: 'T',
        },
        documentPaths: [
          './src/**/*.{ts,tsx}',
          './node_modules/gatsby-*/**/*.js',
          './gatsby-node.ts',
        ],
      },
    },
  ],
};

export default config;
