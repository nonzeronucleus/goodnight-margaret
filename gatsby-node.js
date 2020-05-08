const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    // Query for markdown nodes to use in creating pages.
    const result = await graphql(
      `
        {
            allContentfulAlbum {
                edges {
                    node {
                        contentful_id
                        albumName
                    }
                }
            }
        }
      `
    )
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    // Create pages for each markdown file.
    const albumTemplate = path.resolve(`src/templates/album.js`)
    result.data.allContentfulAlbum.edges.forEach(({ node }) => {
    //   const path = node.frontmatter.path;
      createPage({
        path: `albums/${node.albumName}`,
        component: albumTemplate,
        // In your blog post template's graphql query, you can use pagePath
        // as a GraphQL variable to query for data from the markdown file.
        context: {
            id: node.contentful_id,
          },
        })
    })
  }