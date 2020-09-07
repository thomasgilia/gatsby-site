/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Frozen Banana Treats",
    description: "Simple recipe page with Gatsby-React, GraphQL, Contentful",
    photoCredits: [
      {
        pic: "Bowl of banana ice cream",
        source: "24COOKING-BANANA-ICE-CREAM1-articleLarge-v2.jpg"
      },
      {
        pic: "banana pops",
        source: "https://www.onelovelylife.com/healthy-chocolate-covered-bananas/"
      },
      {
        pic: "PB banana balls",
        source: "https://www.allrecipes.com/recipe/197331/high-protein-peanut-butter-balls/"
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `5i4hvseuy8e2`,
        accessToken: `Q4-fQH8lEEuJ0ijF3xinlfrJUr2ONRjHMIdbaBIBjyM`,
      },
    },
    `gatsby-plugin-sass`
  ],
}
