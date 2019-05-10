import React from 'react';
import HeaderTitle from '../headerTitle';
import { Link } from 'gatsby';
import { rhythm, scale } from "../../utils/typography"
import ListLink from '../ListLink';
import styles from "./nav-bar.module.scss";

class NavBar extends React.Component {
  rootPath = `${__PATH_PREFIX__}`

  render() {
    const { location, title } = this.props
    return (
      <div className={styles.navBar}>
        <HeaderTitle location={location} title={title}/>
        <div style={{
          flexGrow: 1
        }}></div>
        <div>
          <ul className={styles.menuItems} style={{
            listStyle: `none`,
            marginBottom: 0,
          }}>
            {/* <ListLink to="/posts/">posts</ListLink> */}
            {/* <ListLink to="/projects/">projects</ListLink> */}
            {/* <ListLink to="/about/">about</ListLink> */}
          </ul>
        </div>
      </div>
    )
  }
}


export default NavBar;
