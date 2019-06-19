import React from "react"
import PropTypes from "prop-types"
import HomePage from "./HomePage"
import Registration from "./RegistrationForm/Registration"
import SignIn from "./LoginForm/SignIn"
import Dashboard from "./Dashboard"
import DesktopView from "./DesktopView"
import MobileView from "./MobileView"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faUser, faGavel } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faKey, faUser,faGavel );


import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class HomeDisplay extends React.Component {

constructor() {
  super();
  this.state = {
    windowHeight: undefined,
    windowWidth: undefined,
    show: true
  };
}

handleResize = () => {
  var width = window.innerWidth
//   this.setState({
//     windowHeight: window.innerHeight,
//     windowWidth: window.innerWidth
// });
  if(width < 1200){
    this.setState({
      show: false
    })
  }
  else {
    this.setState({show:true})
  }

}


componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }




  render () {
    return (
      <div>
        <DesktopView/>
      </div>
    );
  }
}


export default HomeDisplay
