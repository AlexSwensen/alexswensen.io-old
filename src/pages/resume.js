import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout/layout"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const post = data.allMarkdownRemark.edges[0].node
    const postTitle = post.frontmatter.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Resume"
          keywords={[`blog`, `about`, `Alex Swensen`, `about me`]}
        />
        <h1 style={{ marginTop: 0 }}>{postTitle}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    )
  }
}

export default AboutPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1
      filter: { fileAbsolutePath: { regex: "/resume/" } }
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
