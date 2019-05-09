import React from 'react';
import HeaderTitle from './headerTitle';
import { Link } from 'gatsby';
import { rhythm, scale } from "../utils/typography"
class NavBar extends React.Component {
  rootPath = `${__PATH_PREFIX__}`

  aboutPage = () => {
    const location = this.props.location;
    const aboutPath = `/about/`;
    console.log(location);
    if(location.pathname === aboutPath) {
      return (<span>About</span>)
    } else {
      return (
        <Link to="/about/" style={{ boxShadow: `none` }}>About</Link>
      )
    }
  }

  render() {
    const { location, title } = this.props
    return (
      <div style={{
        display: `flex`,
        flexDirection: `row`,
        alignItems: `center`,

      }}>
        <HeaderTitle location={location} title={title}/>
        {/* <div style={{
          alignSelf: `center`,
          marginBottom: rhythm(1.5),
          flex: 1,
          marginLeft: `20px`
          }}>
          {this.aboutPage()}
        </div> */}
      </div>
    )
  }
}


export default NavBar;
