import React from "react"

import PropTypes from "prop-types"
import Carousel from "nuka-carousel"
import Url from "../helpers/url"
import Spacer from "./Spacer/Spacer"
import BookView from "./BookView"
import DeskTopMyLibrary from "./DeskTopMyLibrary"
import MobileMyLibrary from "./MobileMyLibrary"
import { AnimatedSwitch } from 'react-router-transition';
import { ClipLoader } from 'react-spinners';
import { ScaleLoader } from 'react-spinners';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faUser, faGavel, faBars, faPowerOff } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Route, Link, withRouter, Switch } from "react-router-dom";

library.add(faEnvelope, faKey, faUser,faGavel,faBars, faPowerOff );


class MyLibrary extends React.Component {
constructor() {
  super();
  this.state = {
    windowHeight: undefined,
    windowWidth: undefined,
    show: true,
    user_id: 0,
    id: 0,
  };
}

  

handleResize = () => {
  var width = window.innerWidth
//   this.setState({
//     windowHeight: window.innerHeight,
//     windowWidth: window.innerWidth
// });
  if(width < 1000){
    this.setState({
      show: false
    })
  }
  else {
    this.setState({show:true})
  }

}


componentWillMount(){
  var id = this.props.match.params.id;
  this.setState({id: id})
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
       { this.state.show ? <DeskTopMyLibrary id = {this.state.id}/> : <MobileMyLibrary id = {this.state.id}/> }
      </div>
    );
  }
}



MyLibrary.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  photo: PropTypes.string
};
export default withRouter(MyLibrary)
