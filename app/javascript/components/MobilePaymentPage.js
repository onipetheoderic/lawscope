import React from "react"
import PropTypes from "prop-types"
import CurvyButton from "./CurvyButton/CurvyButton"
import Carousel from "nuka-carousel"
import Url from "../helpers/url"
import Spacer from "./Spacer/Spacer"
import PaystackButton from 'react-paystack';
import { ClipLoader } from 'react-spinners';
import { ScaleLoader } from 'react-spinners';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faUser, faGavel, faBars, faPowerOff } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

library.add(faEnvelope, faKey, faUser,faGavel,faBars, faPowerOff );

class MobilePaymentPage extends React.Component {
   constructor() {
    super();
      this.state = {
        loading: false,
        key: "pk_test_2c73105df10a7a0d0d3ecc57953ed3844b23a33e", //PAYSTACK PUBLIC KEY
        email: "",  // customer email
        amount: 0, //equals NGN100,
        authTokenPresent: false,        
        authtoken: '',
        id: 0,
        first_name: "",
        last_name: "",
        balance: undefined,
        amount: 0,
        amount_valid_present: false,
        amount_paystack: 0
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
getDetails = (authtoken) => {
  this.setState({loading: true})
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
      loading: false
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
setField = (e) => {
  e.preventDefault()
  this.setState({[e.target.name]: e.target.value}) 
}

// public folder in rails should not be part of the url, as its default already
//the number is the maximum number of character that we want

  priceDetector = (price) => {
    if(price < 1){
      return "FREE"
    }
    else {
      return `₦${price}`
    }
  }
  upperCaser = (text) => {
    return text.toUpperCase()
  }

  capitalizer = (str) => {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  handleSubmit = () => {
    if(this.state.amount >= 100){
       let amount = this.state.amount
       let amount_paystack = `${amount}00`
      this.setState({
        amount_paystack,
        amount_valid_present: true,
      })   
      
    }
    else{
      alert("amount cannot be less than 100")
    }
    
  }
      callback = (response) => {
        if(response.status=="success")
        {
          let newBalance = this.state.amount
          this.sendPaymentToServer(newBalance)
        }
       //  console.log(response)
       // // card charged successfully, get reference here
      }

      close = () => {
        console.log("Payment closed");
      }

      getReference = () => {
        //you can put any unique reference implementation code here
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

        for( let i=0; i < 15; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
      }

    sendPaymentToServer = (balance)=>{
      let id = this.state.id
      fetch(`${Url().savePayment}/${id}/${balance}`, {
        method: "POST",
      })
    .then(result=>result.json())
    .then((data) => {
     if(data.success==true){
      this.props.history.push("/"); 
     window.location.reload();
     }
    })

    }




  render () {
   
    return (
      <div style={container}>
          <div style={floaterLeft}>
            <div style={leftHeaderStyle}>
              {this.props.leftHeader}

            </div>
            <div style={descriptionStyle}>
              <Spacer spaceWidth={10}/> 
              
              
            </div>  
          </div>
          
<div style={floaterLeft}>
  {!this.state.amount_valid_present &&
  <div>
          <Spacer spaceWidth={25} />
          <form onChange={this.setField}> 
          <div>
            <ScaleLoader
              sizeUnit={"px"}
              size={100}
              color={'#123abc'}
              loading={this.state.loading}
            />
          </div>     
      <div style={{width: '100%'}}>
            
            <input type="number" name="amount" value={this.state.amount} placeholder="Enter Amount" style={{marginLeft: '5%', width: '90%', height: 40}} />
            <Spacer spaceWidth={10} />
      </div>  
          </form>
          <Spacer spaceWidth={10} />
        <div style={{width: '100%'}}>
        <div style={{width: '90%', marginLeft: '5%'}}>
           <CurvyButton 
            handleOnClick={this.handleSubmit}
            statement= "Proceed >"
            fsize={12}
            width='100%'
            height={45}
            radius={3}
            pointerEvent="auto"//or none
            color="yellow"
            textColor="black"/>
          </div>
        </div>
  </div>
}
  {this.state.amount_valid_present &&
            <div>
            
              <PaystackButton
                text="Make Payment"
                class="payButton"
                callback={this.callback}
                close={this.close}
                disabled={false}
                embed={false} 
                reference={this.getReference()}
                email={this.state.email}
                amount={this.state.amount_paystack}
                paystackkey={this.state.key}
                tag="button"
              />

            </div>
          }            
    </div>
        </div>
    );
  }
}

const Side = {
  width: '18%',
  marginRight: 15,
  background: 'yellow',
  
  height: 600,
  float: 'left',
  boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)"
}
const midSection = {
  width: '56%',
  background: 'yellow',
  height: 600,
  float: 'left',
  boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)"
}
const imgStyle = {
  width: 170,
  height: 223,
}
const descriptionStyle = {
  color: '#1c2833',
  justifyContent: 'center',
  alignItem: 'center',
  textAlign: 'center',
  fontSize: 14,
  lineHeight: 1.2,
  fontWeight: '500',
}
const leftHeaderStyle = {
  color: '#1c2833',
  justifyContent: 'center',
  alignItem: 'center',
  textAlign: 'center',
  fontSize: 18,
  lineHeight: 1.5,
  fontWeight: '200',
  marginBottom: 10
}

const floaterLeft = {
  float: 'left',
  justifyContent: 'center',
  alignItem: 'center',
  width: '100%',
  paddingTop: 60,
  paddingBottom: 20,
  paddingLeft: '1%',
  paddingRight: '1%',
  
}

const floaterLeft2 = {
  float: 'left',
  justifyContent: 'center',
  alignItem: 'center',
  width: '100%',
  paddingTop: 10,
  paddingBottom: 20,
  paddingLeft: '1%',
  paddingRight: '1%',
  
}


const seperator = {
  borderRight: '1px solid  #abb2b9',

}
const container = {
  width: '100%',
  background: '#f0f3f4',
  marginBottom: 0,
  height: 620,
}


MobilePaymentPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  photo: PropTypes.string
};
export default withRouter(MobilePaymentPage)
