import React from "react"

import { rhythm } from "../utils/typography"
import NavBar from './nav-bar/nav-bar';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    return (
      <div>
        <header>
          <NavBar location={location} title={title}/>
        </header>
        <div style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(50),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}>
          <main>
            {children}
          </main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout
