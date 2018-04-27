import React, { Component } from 'react';
import Link from 'gatsby-link'


class ProjectDetail extends Component {
  render() {
    console.log(this.props)
    return (
      <p>Project Details</p>
    );
  }
}

export default ProjectDetail;

export const query = graphql`
  query ProjectDetails($projectId: Int!) {
    wordpressWpPortfolioItem (wordpress_id: { eq: $projectId }) {
      title
    }
  }
`