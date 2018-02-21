import React from 'react';
import logo from '../logo_black_green.svg';
import '../styles/Logo_effect.css';

//Renders Home Screen
class Home extends React.Component {
  render() {
     return <img id='logo' alt='Joule Logo' src={logo} />
  }
}
export default Home;