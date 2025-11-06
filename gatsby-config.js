process.env.GATSBY_CPU_COUNT = "4";
process.env.GATSBY_LOGGER = "yurnalist";
process.env.GATSBY_EXPERIMENTAL_PAGE_BUILD_ON_DATA_CHANGES = "true";
process.env.GATSBY_EXPERIMENTAL_DISABLE_CACHE = "false";
process.env.GATSBY_CLI_FORCE_COLOR = "true";
process.env.GATSBY_CACHE_DIR = "C:\\gatsby_cache"; 
module.exports = {
  pathPrefix: "/WEDDING_INVITATION",
  siteMetadata: {
    title: `weddingInvitation`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components"]
};