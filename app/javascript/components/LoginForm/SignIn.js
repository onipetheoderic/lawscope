import React from "react"
import PropTypes from "prop-types"
import LoginForm from "./DesktopLoginForm/LoginForm"
import MobileLoginForm from "./MobileLoginForm/MobileLoginForm"
import Footer from "../Footer/Footer"
import MobileFooter from "../Footer/MobileFooter/MobileFooter"

class SignIn extends React.Component {

  

  render () {
    return (
      <React.Fragment>
        <div>
        <LoginForm leftHeader="Don't have an account?" 
         description="Sign up today and start reading thousands of original content from over 2,000 authors"
         termConditionText="Can't remember your password or username?Reset password"
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

SignIn.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};
export default SignIn
