import React from 'react';
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
class HeaderTitle extends React.Component {
  render () {
    const { location, title } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
      header = (
        <h1
          style={{
            ...scale(1),
            marginTop: 0,
            marginBottom: 0,
            wordBreak: `break-all`,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    return header
  }
}

export default HeaderTitle;
