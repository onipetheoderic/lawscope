import React from "react"
import PropTypes from "prop-types"
import Spacer from "./Spacer/Spacer"
import { ClipLoader } from 'react-spinners';
import { ScaleLoader } from 'react-spinners';
import CurvyButton from "./CurvyButton/CurvyButton"
import PricePlans from "./PricePlans"
import AlertBox from "./AlertBox"
import Url from "../helpers/url"
import WebFont from 'webfontloader';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";


class PackagePage extends React.Component {
constructor() {
    super();
      this.state = {
        loading: false,
        isValid: true,
        errorColor: "red",
        packages: [],
        pointer: "auto", 
        id: 0,
        message: "",
        showAlert: false,
        first_name: "",
        last_name: "",
        balance: undefined,
        amount: 0,
        amount_valid_present: false,
        amount_paystack: 0
      };
}

componentWillMount(){
  
  let authtoken = localStorage.getItem("auth_token")
  console.log(`thiis is the auth token ${authtoken}`)
  if(authtoken){
    this.setState({authTokenPresent: true, authtoken: authtoken})
    this.getDetails(authtoken)
  }
}

componentDidMount(){
  this.getPackages()
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
      loading: false
    })
    console.log("this is the id: ", this.state.id)
  })
}

getPackages = () => {
    let books = []
    this.setState({loading: true})
    fetch(`${Url().packages}`, {
      method: "GET",
    })
    .then(result=>result.json())
    .then((data) => {
      // console.log(data)
      this.setState({packages: data, loading:false})
      console.log(this.state.packages)
  })
  }

  subscribe = (package_id) => {
    let user_id = this.state.id
    // http://localhost:3000/api/v1/create_subscription/1/3
     this.setState({loading: true})
    fetch(`${Url().subscribe}/${package_id}/${user_id}`, {
      method: "POST",
    })
    .then(result=>result.json())
    .then((data) => {
      if(data.success==true){
        console.log("this is the sub reply",data.success)
        this.setState({showAlert: true, message: "Subscripion was successful"})
        setTimeout(() => {
          this.props.history.push("/"); 
          window.location.reload();
        }, 4000);
        
      }
    })
  }

  


  render () {
    return (
      <React.Fragment>
        <div style={container}>
          <div style={floaterLeft}>
          {this.state.showAlert &&
            <div>
             <AlertBox 
              height= {200}
              width = {450}
              radius = {5}
              message = {this.state.message}
              bg="#f2f4f4"
              topPercent = '30%'
              leftPercent='30%'
              />
            </div>
          }
          <ScaleLoader
              sizeUnit={"px"}
              size={100}
              color={'#123abc'}
              loading={this.state.loading}
            />
            {this.state.packages.map((d) =>
              <div>
            <PricePlans 
            title = {d.name}
            description ={d.description}
            duration= {d.duration}
            price= {d.amount}
            handleOnClick = {() => this.subscribe(d.id)}
            pointerEvent= "auto"/>
            </div>
            )}
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
  justifyContent: 'center',
  alignItem: 'center',
  width: '100%',
  paddingTop: 120,
  paddingBottom: 120,
  paddingLeft: '2%',
  paddingRight: '1%'
}

const container = {
  width: '100%',
  background: '#f0f3f4',
  marginBottom: 0,
  height: 620,
}

PackagePage.propTypes = {
  leftHeader: PropTypes.string,
  description: PropTypes.string,
  signUpText: PropTypes.string,
  termConditionText: PropTypes.string,
  termConditionLink: PropTypes.string,
  privacyPolicyLink: PropTypes.string
};
export default withRouter(PackagePage)
