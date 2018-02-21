import React from 'react';
import logo from '../logo_black_green.svg';
import '../styles/Home.css'
import '../styles/animate.css'

//Renders Home Screen
class Home extends React.Component {
  //On Component Home Loaded
  componentDidMount() {

  }

  //Component Content
  render() {
    return (
      // Joule Logo
      <div className='animated slideInDown' id='logo-container'>
        <a href='./'>
          <img id='logo' alt='Joule Logo' src={logo} />
        </a>
      </div>
    )
  }
}

export default Home;