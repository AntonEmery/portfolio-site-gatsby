import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';


const IndexPage = ({ data }) => {
  const edges = data.allMarkdownRemark.edges;
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <Link key={edge.node.id} to={edge.node.frontmatter.slug}>{edge.node.frontmatter.title}</Link>)
  return (
    <Layout>
      <div>{Posts}</div>
    </Layout>
  )
}

export default IndexPage;

export const query = graphql`
  query blogPosts {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            slug
          }
          excerpt
        }
      }
    }
  }
`