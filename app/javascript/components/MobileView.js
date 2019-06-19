import React from "react"
import PropTypes from "prop-types"
import HomePage from "./HomePage"
import MyLibrary from "./MyLibrary"
import Url from "../helpers/url"
import Registration from "./RegistrationForm/Registration"
import PaymentPage from "./PaymentPage"
import SignIn from "./LoginForm/SignIn"
import BookView from "./BookView"
import ReadingPage from "./ReadingPage"
import PackagePage from "./PackagePage"
import Dashboard from "./Dashboard"
import MediaQuery from 'react-responsive';
import { AnimatedSwitch } from 'react-router-transition';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faUser, faGavel, faEllipsisH, faEllipsisV, faBars, faAngleDown, faBook, faEdit, faSearch } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

library.add(faEnvelope, faKey, faUser,faGavel,faEllipsisH, faEllipsisV, faBars, faAngleDown, faBook, faEdit, faSearch);

class MobileView extends React.Component {
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
        menuIcon: "ellipsis-h"


      };
  }
componentDidMount(){
  let authtoken = localStorage.getItem("auth_token")
  console.log(`thiis is the auth token ${authtoken}`)
  if(authtoken){
    this.setState({authTokenPresent: true, authtoken: authtoken})
    this.getDetails(authtoken)
  }
}
showHide = ()=> {
  this.state.showHide === true ? this.setState({showHide:false, menuIcon: "ellipsis-h"}) : this.setState({showHide:true, menuIcon: "ellipsis-v"})
}


goToPaymentPage = ()=> {
     this.props.history.push("/payment"); 
     // window.location.reload();
}

logOut = ()=> {
     localStorage.removeItem("auth_token"); 
     this.props.history.push("/"); 
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



handleClick = (e) => {
  this.setState({
    searchClicked: true
  })
  console.log("Seach has been clicked", this.state.searchClicked);
}

  render () {
    return (
      <Router>
 	<div>
 
  <div style={menubg}> 
        <div style={containerStyle}>
            <div style={bodyStyle}>
              <div style={logoDropdownStyle}>
                <div>
                <ul style={ulStyle}>
                
                  <li style={liStyleMenu}>
                    <Link to="/"><FontAwesomeIcon icon="gavel" size="2x"/></Link>
                 </li>

                  <li style={liStyleMenu}>
                  <Link to="/login"><FontAwesomeIcon icon="book" size="2x"/></Link>                   	
                  </li>
                          
                  <li style={liStyleMenu}>
                  
                  	<Link to="/registration"><FontAwesomeIcon icon="edit" size="2x"/></Link>                   
                  </li>
                  <div onClick={this.myClick}>
                  <li style={liStyleMenu} onClick={((e) => this.handleClick(e))}>
                   <FontAwesomeIcon icon="search" size="2x"/>
                  </li>
                  </div>
                  <li style={liStyleMenu}>

                   <Link to="/dashboard"><FontAwesomeIcon icon="user" size="2x"/></Link>  

                  </li>
                   <li style={liStyleMenu} onClick={this.showHide}>
                   <FontAwesomeIcon icon={this.state.menuIcon} size="2x"/>
                  </li>
                  {this.state.showHide &&                
<div style={{height: 240, zIndex: 3000, background: '#f8f9f9', top:'50px', left: '130px', position: 'absolute'}}>
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
      
        <Route path="/login" component={SignIn} />
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

const containerStyle2 = {
  color: 'white',
  fontSize: 14,
  marginLeft: '7%',
  marginRight: '3%',
  maxWidth: '90%',
 
}


const liStyle = {
  float: 'left',
  paddingLeft: 20
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
  paddingTop: 5,
  paddingBottom: 5,
  alignItems: 'flex-end',
  display: 'block'
}

const containerStyle = {
 color: 'white',
  fontSize: 10,
  height: 48,
  marginRight: '1%',
  
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
 padding:4,
 fontSize: 10,
 color: '#2e4053', 
 cursor: 'pointer'
}

const menubg = {
  position:'fixed',
  height: 48,
  marginLeft: 0,
  marginRight: 0,
  width: '100%',
  backgroundImage: "-webkit-linear-gradient(45deg, #474747, #242424 100%, #e2ebf0)",
  zIndex: 2000
}


MobileView.propTypes = {
  title: PropTypes.string
};
export default MobileView
