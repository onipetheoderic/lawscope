import React from "react"
import PropTypes from "prop-types"
import HomePage from "./HomePage"
import MyLibrary from "./MyLibrary"
import Url from "../helpers/url"
import Registration from "./RegistrationForm/Registration"
import PaymentPage from "./PaymentPage"
import SignIn from "./LoginForm/SignIn"
import AlertBox from "./AlertBox"
import BookView from "./BookView"
import ReadingPage from "./ReadingPage"
import PackagePage from "./PackagePage"
import Dashboard from "./Dashboard"
import MediaQuery from 'react-responsive';
import { AnimatedSwitch } from 'react-router-transition';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faUser, faGavel, faBars, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

library.add(faEnvelope, faKey, faUser,faGavel,faBars,faEllipsisV );


class DesktopView extends React.Component {
constructor() {
    super();
      this.state = {
        authTokenPresent: false,        
        authtoken: '',
        showHide: false,
        id: 0,
        first_name: "",
        last_name: "",
        email: "", 
        balance: undefined,
        link: "",
        // To handle windows hieght and width
        windowHeight: undefined,
        windowWidth: undefined,

      };
  }

/* 
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
*/
// touch tmp/restart.txt
screenAnalyzer = (width) => {
  let desktopLg = 1400
  let desktopMd = 1300
  let desktopSm = 1200
  let tabletLg = 1040
  let tabletMd = 991
  let tabletSm = 840
  let mobileLg = 767
  let mobileMd = 540
  let mobileSm = 400

  let currentWidth = width
  if(currentWidth >= mobileSm && currentWidth < mobileMd){
    return "mobileSm"
  }
  else if(currentWidth >= mobileMd && currentWidth < mobileLg){
    return "mobileMd"
  }
  else if(currentWidth >= mobileLg && currentWidth < tabletSm){
    return "mobileLg"
  }
  else if(currentWidth >= tabletSm && currentWidth < tabletMd){
    return "tabletSm"
  }
  else if(currentWidth >= tabletMd && currentWidth < tabletLg){
    return "tabletMd"
  }
  else if(currentWidth >= tabletLg && currentWidth < desktopSm){
    return "tabletLg"
  }
  else if(currentWidth >= desktopSm && currentWidth < desktopMd){
    return "desktopSm"
  }
  else if(currentWidth >= desktopMd && currentWidth < desktopLg){
    return "desktopMd"
  }
  else if(currentWidth >= desktopLg){
    return "desktopLg"
  }
  else if(currentWidth < mobileSm){
    return "mobileXs"
  }
}

responsiveFontSize = (fontSize) => {
  let currentWidth = this.screenAnalyzer(this.state.windowWidth)
  if(currentWidth == "desktopLg"){
    return fontSize
  }
  else if(currentWidth == "desktopMd"){
    return fontSize
  }
  else if(currentWidth == "desktopSm"){
    return fontSize
  }
  else if(currentWidth == "tabletLg"){
    return fontSize*1.4
  }
  else if(currentWidth == "tabletMd"){
    return fontSize*1.6
  }
  else if(currentWidth == "tabletSm"){
    return fontSize*1.7
  }
  else if(currentWidth == "mobileLg"){
    return fontSize*1.9
  }
  else if(currentWidth == "mobileMd"){
    return fontSize*2.1
  }
  else{
    return fontSize*2.2
  }
}

responsiveTextBox = (width, height) => {
  let currentWidth = this.screenAnalyzer(this.state.windowWidth)
  if(currentWidth == "desktopLg"){
    return {
      width: width,
      height: height
    }
  }
  else if(currentWidth == "desktopMd"){
    return {
      width: width,
      height: height
    }
  }
  else if(currentWidth == "desktopSm"){
    return {
      width: width,
      height: height
    }
  }
  else if(currentWidth == "tabletLg"){
    return {
      fontSize: 20,
      width: width/1.5,
      height: height
    }
  }
  else if(currentWidth == "tabletMd"){
    return {
      fontSize: 20,
      width: width/2,
      height: height
    }
  }
  else if(currentWidth == "tabletSm"){
    return {

      fontSize: 20,
      width: width/2,
      height: height
    }
  }
  else if(currentWidth == "mobileLg"){
    return {
      fontSize: 20,
      width: width/2.3,
      height: height*1.2
    }
  }
  else if(currentWidth == "mobileMd"){
    return {
      fontSize: 20,
      width: width/2.4,
      height: height*1.3
    }
  }
  else if(currentWidth == "mobileSm"){
    return {
      fontSize: 20,
      width: width/2.5,
      height: height*1.4
    }
  }
  else{
    return {
      width: width,
      height: height
    }
  }
}


handleResize = () => {
  var width = window.innerWidth
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });

}

componentDidMount(){
  this.handleResize();
  window.addEventListener('resize', this.handleResize)

  let authtoken = localStorage.getItem("auth_token")
  console.log(`thiis is the auth token ${authtoken}`)
  if(authtoken){
    this.setState({authTokenPresent: true, authtoken: authtoken})
    this.getDetails(authtoken)
  }
}

componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
}

showHide = ()=> {
  this.state.showHide === true ? this.setState({showHide:false}) : this.setState({showHide:true})
  console.log("testing function") 
}

goToPaymentPage = ()=> {
     this.props.history.push("/payment"); 
     // window.location.reload();
}

logOut = ()=> {
     localStorage.removeItem("auth_token");  
     window.location.reload();
}


getDetails = (authtoken) => {
  fetch(`${Url().getUserDetails}`, {
  method: "GET",
  headers: {
            "Content-Type": "application/json",
            "Authorization": authtoken
        },
})
  .then(result=>result.json())
  .then((data) => {
    this.setState({
      id: data.id,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email, 
      balance: this.nullToFloat(data.balance),
      link: `/library/${data.id}`
    })
  })
}
nullToFloat = (num) => {
  if(num == null){
    return "₦0.00"
  }
  else {
    return `₦${num}`
  }
}

// Authentication_token →eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE1NDk3MDI3NjN9.dvJM8w7OpfsIV6EmfhwENkHwF9lwEVDWWMJ2ibA9N8A
  render () {

    return (
 <Router>
 	<div>
 
  <div style={menubg}> 
        <div style={containerStyle}>
            <div style={bodyStyle}>
              <div style={logoDropdownStyle}>
                <div>
                <ul style={{listStyleType: 'none', margin: 0, padding: 0, overflow: 'hidden'}}>
                
                  <li style={{float: 'left', paddingLeft: 20, paddingTop: 10}}>
                    <FontAwesomeIcon icon="gavel" size="2x"/>
                 </li>

                  <li style={{fontSize:this.responsiveFontSize(14), float: 'left', paddingLeft: 20, paddingTop: 10}}>
                  <Link to="/">LawScope</Link>                   	
                  </li>
                  <li style={{fontSize:this.responsiveFontSize(14), float: 'left', paddingLeft: 20, paddingTop: 10}}>
                    Discover
                  </li>
                                             
                  <li style={liStyle}>
                    <form>               
                    <input type="text" name="search" placeholder="Search stories and authors" style={{width: this.responsiveTextBox(500,40).width, height: this.responsiveTextBox(500,40).height, fontSize: this.responsiveTextBox(500,40).fontSize}} />
                    </form>
                  </li>
                  {!this.state.authTokenPresent &&
                    <div>
                   <li style={{fontSize:this.responsiveFontSize(14), float: 'left', paddingLeft: 20, paddingTop: 10}}>                   
                    	<Link to="/registration">SignUp</Link>                   
                    </li>
                    <li style={{fontSize:this.responsiveFontSize(14), float: 'left', paddingLeft: 20, paddingTop: 10}}>
                     <Link to="/login/login">Login</Link>  
                    </li>
                  </div>
                     }
                      {this.state.authTokenPresent &&
                        <div>
                    <li style={liStyleMenu} onClick={this.showHide}>
                 
                   <FontAwesomeIcon icon="user" size="2x"/>
                  </li>
                  <li style={liStyleMenu}>                
                  </li>
                  <li style={liStyleMenu}>                
                  </li>

                  <li style={liStyleMenu}>                
                  </li>
  {this.state.showHide &&                
<div style={{width: 200, height: 350, zIndex: 3000, background: '#f8f9f9', top:'70px', right: '157px', position: 'absolute'}}>
<ul style={dulStyle}>
  <li style={dliStyle}><Link to="/dashboard">Discover stories</Link>  </li>
  <li style={dliStyle}><Link to={this.state.link}>My Library</Link></li>
<li style={divider}></li>
  <li style={dliStyle}><Link to="/paymentpage">Balance: {this.state.balance}</Link>  </li>
  <li style={dliStyle}><Link to="/dashboard">Profile</Link></li>
  <li style={dliStyle}><Link to="/package">Subscripe to a package</Link></li>
  <li style={divider}></li>
  <li style={dliStyle}>Help</li>
  <li style={dliStyle} onClick={this.logOut}>Sign out</li>
</ul>
</div>
}
                  </div>
                }
                </ul>
                </div>
              </div>       
            </div>
          </div>
          </div>
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      
    >
        <Route exact path="/" component={HomePage} />
        <Route path="/registration" component={Registration} />
      
        <Route path="/login/:msg" component={SignIn} />
        <Route exact path="/paymentpage" component={PaymentPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/show/:id/:user_id" component={BookView} />
        <Route exact path="/read/:id" component={ReadingPage} />
        <Route exact path="/package" component={PackagePage} />
        <Route exact path="/library/:id" component={MyLibrary} />
        
    </AnimatedSwitch>
      </div>
    </Router>
    );
  }
}
const sticker = {
  position: 'fixed',
  zIndex: 2000000
}
const ulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  overflow: 'hidden',
}
const divider = {
  borderBottom: '1px solid #2e4053',
  borderColor: '#2e4053',
}
const dulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  overflow: 'hidden',
}
const dliStyle = {
 padding:14,
 fontSize: 14,
 color: '#2e4053',
 cursor: 'pointer'
}

const containerStyle2 = {
  color: 'white',
  fontSize: 14,
  marginLeft: '7%',
  marginRight: '3%',
  maxWidth: '90%',
 
}


const liStyle = {
  float: 'left',
  paddingLeft: 20,
  cursor: 'pointer'
}
const liStyleMenu = {
  float: 'left',
  paddingLeft: 20,
  paddingTop: 10
}
const logoDropdownStyle = {
  flexDirection: 'row'
}

const bodyStyle = {
  paddingTop: 30,
  paddingBottom: 16,
  alignItems: 'flex-end',
  display: 'block'
}

const containerStyle = {
  color: 'white',
  fontSize: 14,
  height: 86,
  marginLeft: '10%',
  marginRight: '10%',
  maxWidth: '80%',

}
const mcontainerStyle = {
  color: 'white',
  fontSize: 10,
  height: 86,
  marginRight: '1%',
  
}
const mmenubg = {
  position:'fixed',
  height: 188,
  marginLeft: 0,
  marginRight: 0,
  width: '100%',
  backgroundImage: "-webkit-linear-gradient(45deg, #474747, #242424 100%, #e2ebf0)",
  
}

const menubg = {
  position:'fixed',
  height: 88,
  marginLeft: 0,
  marginRight: 0,
  width: '100%',
  backgroundImage: "-webkit-linear-gradient(45deg, #474747, #242424 100%, #e2ebf0)",
  zIndex: 2000
  
}


DesktopView.propTypes = {
  title: PropTypes.string
};
export default DesktopView
