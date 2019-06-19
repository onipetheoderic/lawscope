import React from "react"
import PropTypes from "prop-types"
import HelloWorld from "./HelloWorld"
import Spacer from "./Spacer/Spacer"
import CurvyButton from "./CurvyButton/CurvyButton"
import StackImage from "./StackImage/StackImage"
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom"
import Registration from "./RegistrationForm/Registration"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

class TopHeader extends React.Component {

  render () {
    
    return (
      
        <Router>
        <div style={{marginLeft: 0, marginRight: 0, width: '100%',
  backgroundImage: "-webkit-linear-gradient(45deg, #474747, #242424 100%, #e2ebf0)"}}>  
              
          <Spacer spaceWidth={60} />
          <div style={{color: 'white', fontSize: 14, marginLeft: '7%', marginRight: '3%',
  maxWidth: '90%'}}>
            <StackImage/>
          </div>
         
          <HelloWorld/>
         
           <Spacer spaceWidth={30} />             
        </div>
      </Router>
    );
  }
}

const containerStyle2 = {
  color: 'white',
  fontSize: 14,
  marginLeft: '7%',
  marginRight: '3%',
  maxWidth: '90%',
 
}


const menubg = {
  height: 720,
  marginLeft: 0,
  marginRight: 0,
  width: '100%',
  backgroundImage: "-webkit-linear-gradient(45deg, #474747, #242424 100%, #e2ebf0)"
}



TopHeader.propTypes = {
  signup: PropTypes.string,
  login: PropTypes.string,
  logo: PropTypes.string,
  dropdown: PropTypes.string
};
export default TopHeader
