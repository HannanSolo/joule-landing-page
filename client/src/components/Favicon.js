import React from 'react';
import faviconImage from '../favicon.ico';

//Renders Favicon
class Favicon extends React.Component {
  render() {
     return <img alt='Joule Favicon' src={faviconImage} />
  }
}
export default Favicon;