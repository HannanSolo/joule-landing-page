import React from 'react';
import logo from '../favicon.ico';

//Renders Favicon
class Favicon extends React.Component {
  render() {
     return <img id='logo' alt='Joule Logo' src={logo} />
  }
}
export default Favicon;