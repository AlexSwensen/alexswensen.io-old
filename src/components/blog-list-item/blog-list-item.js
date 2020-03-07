import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../../utils/typography"
import styles from "./blog-list-item.module.scss"

class BlogListItem extends React.Component {
  render() {
    const { post } = this.props
    // const featuredImageFluid = post.frontmatter.featuredImage.childImageSharp.fluid
    // console.log(featuredImageFluid)
    const title = post.frontmatter.title || post.fields.slug
    return (
      <div className={styles.BlogListItem} key={post.fields.slug}>
        <h3
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          <Link style={{ boxShadow: `none` }} to={post.fields.slug}>
            {title}
          </Link>
        </h3>
        <small>{post.frontmatter.date}</small>
        <p
          dangerouslySetInnerHTML={{
            __html: post.frontmatter.description || post.excerpt,
          }}
        />
      </div>
    )
  }
}

export default BlogListItem
