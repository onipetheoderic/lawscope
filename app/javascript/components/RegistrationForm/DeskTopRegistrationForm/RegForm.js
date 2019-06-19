import React from "react"
import PropTypes from "prop-types"
import Spacer from "../../Spacer/Spacer"
import CurvyButton from "../../CurvyButton/CurvyButton"
import Url from "../../../helpers/url"
import { ClipLoader } from 'react-spinners';
import { ScaleLoader } from 'react-spinners';

import { BrowserRouter as Router, Route, Link, withRouter, Switch } from "react-router-dom";
import SignIn from "../../LoginForm/SignIn"
import { Redirect } from 'react-router';


class RegForm extends React.Component {
  constructor() {
    super();
      this.state = {
        loading: false,
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        password: '',
        color: "yellow",
        statement: "Sign Up",
        message: '',
        message2: '',
        isValid: true,
        errorColor: "red",
        pointer: "auto",
        emailExist: false,
        windowHeight: undefined,
    windowWidth: undefined,
    show: true
      };
}

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
      let newWidth = Math.round(padding/2)
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }
    else if(currentWidth == "tabletMd"){
     let newWidth = Math.round(padding/2)
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }
    else if(currentWidth == "tabletSm"){
     let newWidth = Math.round(padding/2)
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }
    else if(currentWidth == "mobileLg"){
      let newWidth = Math.round(padding/2)
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }
    else if(currentWidth == "mobileMd"){
      let newWidth = Math.round(padding/2)
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }
    else{
      let newWidth = Math.round(padding/2)
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }

}

responsivePadderButton = (padding) => {
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
      let newWidth = Math.round(padding*1.2)
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }
    else if(currentWidth == "tabletMd"){
     let newWidth = Math.round(padding*1.2)
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }
    else if(currentWidth == "tabletSm"){
     let newWidth = Math.round(padding*1.2)
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }
    else if(currentWidth == "mobileLg"){
      let newWidth = Math.round(padding/1.2)
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }
    else if(currentWidth == "mobileMd"){
      let newWidth = Math.round(padding/1.2)
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }
    else{
      let newWidth = Math.round(padding/1.2)
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }

}

responsivePad = (padder) => {
  let currentWidth = this.screenAnalyzer(this.state.windowWidth)
  if(currentWidth == "desktopLg"){
    return padder+"%"
  }
  else if(currentWidth == "desktopMd"){
    return padder+"%"
  }
  else if(currentWidth == "desktopSm"){
    return padder+"%"
  }
  else if(currentWidth == "tabletLg"){
    return 0
  }
  else if(currentWidth == "tabletMd"){
    return 0
  }
  else if(currentWidth == "tabletSm"){
    return 0
  }
  else if(currentWidth == "mobileLg"){
    return 0
  }
  else if(currentWidth == "mobileMd"){
    return 0
  }
  else{
    return 0
  }
}

responsiveWidth = (padding) => {
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
      let newWidth = Math.round(padding*2.5)
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }
    else if(currentWidth == "tabletMd"){
     let newWidth = Math.round(padding*2.5)
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }
    else if(currentWidth == "tabletSm"){
     let newWidth = Math.round(padding*2.5)
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }
    else if(currentWidth == "mobileLg"){
      let newWidth = Math.round(padding*2.5)
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }
    else if(currentWidth == "mobileMd"){
      let newWidth = Math.round(padding*2.5)
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }
    else{
      let newWidth = Math.round(padding*2.5)
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }

}

responsiveForm = (padding) => {
  let currentWidth = this.screenAnalyzer(this.state.windowWidth)
  
    if(currentWidth == "desktopLg"){
      return {
        width: 400,
        height: 50
      }
    }
    else if(currentWidth == "desktopMd"){
      return {
        width: 400,
        height: 50
      }
    }
    else if(currentWidth == "desktopSm"){
      return {
        width: 400,
        height: 50
      }
    }
    // fontSize: 50, width: "100%", padding: "50px 20px", margin: "12px 0", display: "inlineBlock", 
    //border: "1px solid #ccc", boxSizing: "borderBox"}} />
    else if(currentWidth == "tabletLg"){
      return {
        fontSize: 50, 
        width: "100%", 
        height: 100,
        padding: "20px 20px", 
        margin: "12px 0", 
        border: "1px solid #ccc", 
        boxSizing: "borderBox",
        display: "inlineBlock"  
      }
    }
    else if(currentWidth == "tabletMd"){
     return {
        fontSize: 50, 
        width: "100%", 
        height: 100,
        padding: "20px 20px", 
        margin: "12px 0", 
        border: "1px solid #ccc", 
        boxSizing: "borderBox",
        display: "inlineBlock" 
      }
    }
    else if(currentWidth == "tabletSm"){
      return {
        fontSize: 50, 
        width: "100%", 
        height: 100,
        padding: "20px 20px", 
        margin: "12px 0", 
        border: "1px solid #ccc", 
        boxSizing: "borderBox",
        display: "inlineBlock" 
      }
    }
    else if(currentWidth == "mobileLg"){
      return {
        fontSize: 50, 
        width: "100%", 
        height: 100,
        padding: "20px 20px", 
        margin: "12px 0", 
        border: "1px solid #ccc", 
        boxSizing: "borderBox",
        display: "inlineBlock" 
      }
    }
    else if(currentWidth == "mobileMd"){
      return {
        fontSize: 50, 
        width: "100%", 
        height: 100,
        padding: "20px 20px", 
        margin: "12px 0", 
        border: "1px solid #ccc", 
        boxSizing: "borderBox",
        display: "inlineBlock"  
      }
    }
    else{
      return {
        fontSize: 50, 
        width: "100%", 
        height: 100,
        padding: "20px 20px", 
        margin: "12px 0", 
        border: "1px solid #ccc", 
        boxSizing: "borderBox",
        display: "inlineBlock"  
      }
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
responsivePadderSize = (fontSize) => {
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
    return '20%'
  }
  else if(currentWidth == "tabletMd"){
    return '20%'
  }
  else if(currentWidth == "tabletSm"){
    return '20%'
  }
  else if(currentWidth == "mobileLg"){
    return '20%'
  }
  else if(currentWidth == "mobileMd"){
    return '20%'
  }
  else{
    return '20%'
  }
}
handleResize = () => {
  var width = window.innerWidth
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });

}

componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

//A universal onChange handler, embeded to the entire form
setField = (e) => {
  e.preventDefault()
  this.setState({[e.target.name]: e.target.value})
  
}
validateInputFirstName =(e) => {
   e.preventDefault()
  this.lengthValidator(e.target.name, e.target.value) 
}

validateInputLastName =(e) => {
   e.preventDefault()
  this.lengthValidator(e.target.name, e.target.value) 
}

isEmailValid = (e) =>{
  let msg =  `${e.target.name} is not valid`
   let validMsg = `${e.target.name} is valid`

    var EMAIL_REGEXP = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/);
    if(EMAIL_REGEXP.test(e.target.value)){
      let email = e.target.value
      this.setState({message: validMsg, pointer: "auto", errorColor: "green", color: "yellow"})
      
      let eMsg =  `${e.target.name} is not available` 
      let vMsg = `${e.target.name} is Available, proceed with registration`
      fetch(`${Url().checkEmail}?email=${email}`, {
        method: "POST",
      })
      .then(result=>result.json())
      .then((data) => {
        if(data == null){
           this.setState({message: vMsg, isValid: true, pointer: "auto", color: "yellow", errorColor: "green"})
        }
        else{
           console.log("Email exists")
           this.setState({message: eMsg, errorColor: "yellow", pointer: "none", color: "gray"})
        }
      })

    }
    else {
      this.setState({message: msg, isValid: false, errorColor: "red", color: "gray", pointer: "none"})
    }
    //return EMAIL_REGEXP.test(e.target.value)

}

lengthValidator = (fieldName, fieldValue)=> {
  let msg =  `${fieldName} must be more than 3 characters`
  let validMsg = `${fieldName} is valid, continue`
  let fValue = fieldValue.trim()
  if(fValue.length < 3){
    this.setState({message: msg, isValid: false, errorColor: "red", pointer: "none", color: "gray", loading: true })
  }
  else if(fValue.length >=3){
    this.setState({message: validMsg, errorColor: "green", pointer: "auto", color: "yellow", loading: false})
  }
}



// Note: Use console.log(FormDataInstanceName.get('inputname')) for debugging, console.log(data) will not display the appended data.
// 
handleSubmit = () => {
  this.setState({loading: true})
  let first_name = this.state.first_name
  let last_name = this.state.last_name
  let phone = this.state.phone
  let email = this.state.email
  let password = this.state.password
  let msg = "Registration successful, Please Login"
  let fd = new FormData()
    fd.append('first_name', first_name)
    fd.append('last_name', last_name)
    fd.append('phone', phone)
    fd.append('email', email)
    fd.append('password', password)
   console.log(fd.get('first_name'))
  console.log(`${first_name}, ${last_name}, ${phone}, ${email}, ${password}`)
    fetch(`${Url().signUp}`, {
      method: "POST",
      body: fd,
    })
    .then(result=>result.json())
    .then((data) => {
      console.log(data)
      if(data){
        console.log("registration successful")
        this.setState({loading: false})
         // this.props.history.push("login");
          this.props.history.push("/login/"+msg)
        
      }
      else {
        console.log("registration not successful")
      }
    })
      
}

  render () {
    return (
      <Router>
       <React.Fragment>
         <div style={{width: '100%',
  background: '#f0f3f4',
  marginBottom: 0,
  height: 820}}>


<div style={{float: 'left',
  justifyContent: 'center',
  alignItem: 'center',
  width: this.responsiveWidth(40),
  paddingTop: 120,
  paddingBottom: 10,
  paddingLeft: this.responsivePad(10),
  paddingRight: this.responsivePad(1)}}>

           <div style={{color: '#1c2833',
  justifyContent: 'center',
  alignItem: 'center',
  textAlign: 'center',
  fontSize: this.responsiveFontSize(30),
  lineHeight: 1.5,
  fontWeight: '700',
  marginBottom: 10}}>
              {this.props.leftHeader}

            </div>
            

  <div style={{color: '#1c2833',  justifyContent: 'center',  alignItem: 'center',  textAlign: 'center',  fontSize: this.responsiveFontSize(18),  lineHeight: 1.2,  fontWeight: '500'}}>
              {this.props.description}
        <Spacer spaceWidth={15}/> 
  <div style={{width: '50%', paddingLeft:this.responsivePadderSize(0)}}>
              <CurvyButton 
            statement= "Sign In"
            fsize={16}
            width={300}
            height={55}
            radius={5}
            color="white"
            textColor="black"/>     
  </div>
              <Spacer spaceWidth={20} />
              
            </div>  
  </div>
           <div style={{float: 'left',
  justifyContent: 'center',
  alignItem: 'center',
  width: this.responsiveWidth(40),
  paddingTop: 120,
  paddingBottom: 120,
  paddingLeft: this.responsivePad(10),
  paddingRight: this.responsivePad(1)}}>

          
          <Spacer spaceWidth={15} />
          <form onChange={this.setField}>
        <div>
            <ScaleLoader
              sizeUnit={"px"}
              size={100}
              color={'#123abc'}
              loading={this.state.loading}
            />
          </div>  
            <input type="text" name="first_name" onChange={((e) => this.validateInputFirstName(e))} value={this.state.first_name} placeholder="Enter Your First Name" style={{height: this.responsiveForm().height, width: this.responsiveForm().width, fontSize: this.responsiveForm().fontSize, 
        padding: this.responsiveForm().padding, margin: this.responsiveForm().margin, border: "1px solid #ccc", 
        boxSizing: this.responsiveForm().boxSizing, display: this.responsiveForm().display }} />
            <Spacer spaceWidth={5} />

            <input type="text" name="last_name" onChange={((e) => this.validateInputLastName(e))} value={this.state.last_name} placeholder="Enter Your Last Name" style={{height: this.responsiveForm().height, width: this.responsiveForm().width, fontSize: this.responsiveForm().fontSize, 
        padding: this.responsiveForm().padding, margin: this.responsiveForm().margin, border: "1px solid #ccc", 
        boxSizing: this.responsiveForm().boxSizing, display: this.responsiveForm().display }} />
            <Spacer spaceWidth={5} />

            <input type="text" name="phone" value={this.state.phone} placeholder="Enter your phone number" style={{height: this.responsiveForm().height, width: this.responsiveForm().width, fontSize: this.responsiveForm().fontSize, 
        padding: this.responsiveForm().padding, margin: this.responsiveForm().margin, border: "1px solid #ccc", 
        boxSizing: this.responsiveForm().boxSizing, display: this.responsiveForm().display }} />
            <Spacer spaceWidth={5} />

            <input type="text" name="email" placeholder="Email" style={{height: this.responsiveForm().height, width: this.responsiveForm().width, fontSize: this.responsiveForm().fontSize, 
        padding: this.responsiveForm().padding, margin: this.responsiveForm().margin, border: "1px solid #ccc", 
        boxSizing: this.responsiveForm().boxSizing, display: this.responsiveForm().display }} />
            <Spacer spaceWidth={5} />
           
            <input type="password" name="password" placeholder="Password" style={{height: this.responsiveForm().height, width: this.responsiveForm().width, fontSize: this.responsiveForm().fontSize, 
        padding: this.responsiveForm().padding, margin: this.responsiveForm().margin, border: "1px solid #ccc", 
        boxSizing: this.responsiveForm().boxSizing, display: this.responsiveForm().display }} />
            <Spacer spaceWidth={5} />
          </form>
          <Spacer spaceWidth={10} />
           <CurvyButton 
            handleOnClick={this.handleSubmit}
            statement= "Sign Up"
            pointerEvent={this.state.pointer}//or none
            fsize={16}
            width={400}
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
      </Router>
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
  width: '40%',
  paddingTop: 120,
  paddingBottom: 120,
  paddingLeft: '10%',
  paddingRight: '1%',
  
}
const seperator = {
  borderRight: '1px solid  #abb2b9',

}
const container = {
  width: '100%',
  background: '#f0f3f4',
  marginBottom: 0,
  height: 700,
}

RegForm.propTypes = {
  leftHeader: PropTypes.string,
  description: PropTypes.string,
  termConditionText: PropTypes.string
};
export default withRouter(RegForm)
