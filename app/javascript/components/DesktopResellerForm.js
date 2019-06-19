import React from "react"
import PropTypes from "prop-types"
import Spacer from "./Spacer/Spacer"
import CurvyButton from "./CurvyButton/CurvyButton"
import Url from "../helpers/url"
import { ClipLoader } from 'react-spinners';
import { ScaleLoader } from 'react-spinners';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

class DesktopResellerForm extends React.Component {
  constructor() {
    super();
      this.state = {
        
        // To handle windows hieght and width
        windowHeight: undefined,
        windowWidth: undefined,

      };
  }

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

responsiveBodySize = (width) => {
  let currentWidth = this.screenAnalyzer(this.state.windowWidth)
  if(currentWidth == "desktopLg"){
    let newWidth = width
    let stringified_width = newWidth.toString()+"%"
    return stringified_width
  }
  else if(currentWidth == "desktopMd"){
    let newWidth = width
    let stringified_width = newWidth.toString()+"%"
    return stringified_width
  }
  else if(currentWidth == "desktopSm"){
    let newWidth = width
    let stringified_width = newWidth.toString()+"%"
    return stringified_width
  }
  else if(currentWidth == "tabletLg"){
    let newWidth = width*2
    let stringified_width = newWidth.toString()+"%"
    return stringified_width
  }
  else if(currentWidth == "tabletMd"){
   let newWidth = width*2
    let stringified_width = newWidth.toString()+"%"
    return stringified_width
  }
  else if(currentWidth == "tabletSm"){
   let newWidth = width*2
    let stringified_width = newWidth.toString()+"%"
    return stringified_width
  }
  else if(currentWidth == "mobileLg"){
    let newWidth = width*2
    let stringified_width = newWidth.toString()+"%"
    return stringified_width
  }
  else if(currentWidth == "mobileMd"){
    let newWidth = width*2
    let stringified_width = newWidth.toString()+"%"
    return stringified_width
  }
  else{
   let newWidth = width*2
    let stringified_width = newWidth.toString()+"%"
    return stringified_width
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
      width: '100%',
      height: height*1.5,
      fontSize: 30
    }
  }
  else if(currentWidth == "tabletMd"){
    return {
      width: '100%',
      height: height*1.5,
      fontSize: 30
    }
  }
  else if(currentWidth == "tabletSm"){
    return {
       width: '100%',
      height: height*1.5,
      fontSize: 30
    }
  }
  else if(currentWidth == "mobileLg"){
    return {
       width: '100%',
      height: height*1.5,
      fontSize: 30
    }
  }
  else if(currentWidth == "mobileMd"){
    return {
       width: '100%',
      height: height*1.5,
      fontSize: 30
    }
  }
  else if(currentWidth == "mobileSm"){
    return {
       width: '100%',
      height: height*1.5,
      fontSize: 30
    }
  }
  else if(currentWidth == "mobileXs"){
    return {
       width: '100%',
      height: height*1.5,
       fontSize: 30
    }
  }
  else{
    return {
      width: width,
      height: height
    }
  }
}

responsivePadder = (padding) => {
  let currentWidth = this.screenAnalyzer(this.state.windowWidth)
  
    if(currentWidth == "desktopLg"){
      let newWidth = padding
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }
    else if(currentWidth == "desktopMd"){
      let newWidth = padding
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }
    else if(currentWidth == "desktopSm"){
      let newWidth = padding
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }
    else if(currentWidth == "tabletLg"){
      let newWidth = padding/3
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }
    else if(currentWidth == "tabletMd"){
     let newWidth = padding/3
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }
    else if(currentWidth == "tabletSm"){
     let newWidth = padding/3
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }
    else if(currentWidth == "mobileLg"){
      let newWidth = padding/3
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }
    else if(currentWidth == "mobileMd"){
      let newWidth = padding/3
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }
    else{
      let newWidth = padding/3
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
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
    return fontSize*1.2
  }
  else if(currentWidth == "tabletMd"){
    return fontSize*1.3
  }
  else if(currentWidth == "tabletSm"){
    return fontSize*1.3
  }
  else if(currentWidth == "mobileLg"){
    return fontSize*1.5
  }
  else if(currentWidth == "mobileMd"){
    return fontSize*1.5
  }
  else{
    return fontSize*1.5
  }
}
responsivePageHeight = (pageHeight) => {
  let currentWidth = this.screenAnalyzer(this.state.windowWidth)
  if(currentWidth == "desktopLg"){
    return pageHeight
  }
  else if(currentWidth == "desktopMd"){
    return pageHeight
  }
  else if(currentWidth == "desktopSm"){
    return pageHeight
  }
  else if(currentWidth == "tabletLg"){
    return pageHeight*2.2
  }
  else if(currentWidth == "tabletMd"){
    return pageHeight*2.3
  }
  else if(currentWidth == "tabletSm"){
    return pageHeight*2.3
  }
  else if(currentWidth == "mobileLg"){
    return pageHeight*2.3
  }
  else if(currentWidth == "mobileMd"){
    return pageHeight*2.3
  }
  else{
    return pageHeight*2.3
  }
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






componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
}



  render () {
    return (
      <React.Fragment>
        <div style={{width: '100%',
  background: '#f0f3f4',
  marginBottom: 0,
  height: this.responsivePageHeight(720)}}>
          <div style={{float: 'left',justifyContent: 'center', alignItem: 'center', width: this.responsiveBodySize(45), paddingTop: 120, paddingBottom: 120, paddingLeft: '13%', paddingRight: '1%'}}>
            <div style={{color: '#1c2833',
  justifyContent: 'center',
  alignItem: 'center',
  textAlign: 'center',
  fontSize: this.responsiveFontSize(30),
  lineHeight: 1.5,
  fontWeight: '700',
  marginBottom: 50}}>
              {this.props.leftHeader}
            </div>
            <div style={{color: '#1c2833',
            justifyContent: 'center',
            alignItem: 'center',
            textAlign: 'center',
            fontSize: this.responsiveFontSize(18),
            lineHeight: 1.2,
            fontWeight: '500'}}>
              {this.props.description}      
           <Spacer spaceWidth={20} />
            {this.props.signUpText}
             </div>  
          </div>
          <div style={{float: 'left',justifyContent: 'center', alignItem: 'center', width: this.responsiveBodySize(45), paddingTop: 120, paddingBottom: 120, paddingLeft: this.responsivePadder(13), paddingRight: '1%'}}>
          <Spacer spaceWidth={25} />
          <form>                
            <input type="text" name="search" placeholder="Enter your username" style={{width: this.responsiveTextBox(400,50).width, height: this.responsiveTextBox(400,50).height, fontSize: this.responsiveTextBox(400,50).fontSize}} />
            <Spacer spaceWidth={10} />
            <input type="email" name="search" placeholder="Enter your email" style={{width: this.responsiveTextBox(400,50).width, height: this.responsiveTextBox(400,50).height, fontSize: this.responsiveTextBox(400,50).fontSize}} />
            <Spacer spaceWidth={10} />
            <input type="text" name="search" placeholder="Enter your phone number" style={{width: this.responsiveTextBox(400,50).width, height: this.responsiveTextBox(400,50).height, fontSize: this.responsiveTextBox(400,50).fontSize}} />
            <Spacer spaceWidth={10} />
            <input type="password" name="search" placeholder="Enter your password" style={{width: this.responsiveTextBox(400,50).width, height: this.responsiveTextBox(400,50).height, fontSize: this.responsiveTextBox(400,50).fontSize}} />
          </form>
          <Spacer spaceWidth={10} />
           <CurvyButton 
            statement= "Get A Free Book"
            fsize={16}
            width={250}
            height={55}
            radius={5}
            color="yellow"
            textColor="black"/>
            <Spacer spaceWidth={7} />
            <div style={{textAlign: 'center', justifyContent: 'center'}}>
           {this.props.termConditionText}
           </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const descriptionStyle = {
  color: '#1c2833',
  justifyContent: 'center',
  alignItem: 'center',
  textAlign: 'center',
  fontSize: 18,
  lineHeight: 1.2,
  fontWeight: '500',
}
const leftHeaderStyle = {
  color: '#1c2833',
  justifyContent: 'center',
  alignItem: 'center',
  textAlign: 'center',
  fontSize: 30,
  lineHeight: 1.5,
  fontWeight: '700',
  marginBottom: 50
}

const floaterLeft = {
  float: 'left',
  justifyContent: 'center',
  alignItem: 'center',
  width: '45%',
  paddingTop: 120,
  paddingBottom: 120,
  paddingLeft: '13%',
  paddingRight: '1%'
}

const container = {
  width: '100%',
  background: '#f0f3f4',
  marginBottom: 0,
  height: 620,
}

DesktopResellerForm.propTypes = {
  leftHeader: PropTypes.string,
  description: PropTypes.string,
  signUpText: PropTypes.string,
  termConditionText: PropTypes.string,
  termConditionLink: PropTypes.string,
  privacyPolicyLink: PropTypes.string
};
export default DesktopResellerForm
