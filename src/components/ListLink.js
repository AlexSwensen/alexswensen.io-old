import React from 'react';
import { Link } from "gatsby"
class ListLink extends React.Component {
  render() {
    return (
      <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={this.props.to} style={{ boxShadow: `none` }}>{this.props.children}</Link>
      </li>
    )
  }
}

export default ListLink;
