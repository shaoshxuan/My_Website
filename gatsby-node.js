const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const projectPage = path.resolve('./src/template/projectTemplate.js');
    const response = await graphql(`
        query {
            allContentfulEmbarkedProjects {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    response.data.allContentfulEmbarkedProjects.edges.forEach((edge) => {
        createPage({
            component: projectPage,
            path: `/projects/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}