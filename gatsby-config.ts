import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: "94vMGeGF6oAWWBSUyzasbQtt",
        version: process.env.NODE_ENV === "production" ? "published" : "draft",
        localAssets: true, // Optional parameter to download the images to use with Gatsby Image Plugin
      },
    },
  ],
};

export default config;
