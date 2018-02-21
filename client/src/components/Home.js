import React from 'react';
import logo from '../logo_black_green.svg';
import '../styles/Home.css'
import '../styles/animate.css'

//Renders Home Screen
class Home extends React.Component {
  //On Component Home Loaded
  componentDidMount() {
    //to do...
  }

  //Component Content
  render() {
    return (
      <div>
        {/*Joule Logo*/}
        <div className='animated slideInDown' id='logo-container'>
          <a href='./'>
            <img id='logo' alt='Joule Logo' src={logo} />
          </a>
        </div>
        {/*Main Body*/}
        <div className='animated zoomIn' id="header-container">
            <p>Wait</p>
            <img id='logo' alt='Joule Logo' src={logo} />
        </div>
      </div>
    )
  }
}

export default Home;