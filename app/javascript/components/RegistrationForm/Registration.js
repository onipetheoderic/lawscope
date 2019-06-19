import React from "react"
import PropTypes from "prop-types"
import Spacer from "../Spacer/Spacer"

import RegForm from "./DeskTopRegistrationForm/RegForm"
import MobileRegForm from "./MobileRegistrationForm/MobileRegForm"
import Footer from "../Footer/Footer"
import MobileFooter from "../Footer/MobileFooter/MobileFooter"



class Registration extends React.Component {
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
      <React.Fragment>
      <div>
 <RegForm leftHeader="Already have an account?" 
         description="Sign in now to continue reading your favourite books from Lawscope"
         termConditionText="By proceeding you are agreeing to our Terms of use and Privacy policy"
         /> 
        
      <div>
          <Footer field1="About Us" field2="Terms & Conditions"
          field3="Privacy Policy" 
          field4= "Help & Support" 
          field5="© 2019 Lawscope"/> 
        </div>
      </div>       
      </React.Fragment>
    );
  }
}



Registration.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};
export default Registration
