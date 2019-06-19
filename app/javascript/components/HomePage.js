import React from "react"
import PropTypes from "prop-types"
import TopHeader from "./TopHeader"
import Footer from "./Footer/Footer"
import Spacer from "./Spacer/Spacer"
import ResellerForm from "./ResellerForm"
import Registration from "./RegistrationForm/Registration"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MobileFooter from "./Footer/MobileFooter/MobileFooter"


class HomePage extends React.Component {
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
  if(width < 1000){
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
  	document.title = "Welcome to LawScope";
    const breakpoints = {
      desktopLg: 1400,
      desktopMd: 1300,
      desktopSm: 1200,
      tabletLg: 1040,
      tabletMd: 991,
      tabletSm: 840,
      mobileLg: 767,
      mobileMd: 540,
      mobileSm: 400
    };
    return (
      <React.Fragment>
      
      <div>
         <Spacer spaceWidth={70}/> 
           <div>
        <TopHeader dropdown="Discover" 
        			signup="Sign Up" 
        			login="Sign In" 
        			logo="LawScope"/>
          </div>
        <div>
          <ResellerForm />
        </div>
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

const contentSpacer = {
  marginTop: 50
}

HomePage.propTypes = {
  title: PropTypes.string
};
export default HomePage
