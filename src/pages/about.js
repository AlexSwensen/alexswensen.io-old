import React from "react";
import Layout from "../components/layout"
import {graphql} from 'gatsby'

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const post = data.allMarkdownRemark.edges[0].node
    const postTitle = post.frontmatter.title;
    const postHTML = post.html;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h1 style={{marginTop: 0}}>{postTitle}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    )
  }
}

export default AboutPage;
export const pageQuery = graphql`
  query {
    site {
        siteMetadata {
          title
        }
      }
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC},
      limit: 1000,
      filter: {fileAbsolutePath: {regex : "\/about/"}}
    ) {
      edges {
        node {
          html
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
