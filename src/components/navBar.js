import React from 'react';
import HeaderTitle from './headerTitle';
class NavBar extends React.Component {

  render() {
    const { location, title } = this.props
    return (
      <div>
        <HeaderTitle location={location} title={title}/>
      </div>
    )
  }
}


export default NavBar;
