const ArticlesTemplate = require.resolve(
  `gatsby-theme-blog-core/src/templates/posts-query`
)

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  // Create the Articles page
  createPage({
    path: `/articles`,
    component: ArticlesTemplate,
    context: {},
  })
}
