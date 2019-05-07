import React from "react";
import Layout from "../../components/layout"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h1>About</h1>
        <p>Hey there! My name is Alexander Swensen!</p>
        <p>I work as a software engineer at StudioNow.</p>
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
  }
`
