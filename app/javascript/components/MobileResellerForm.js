import React from "react"
import PropTypes from "prop-types"
import Spacer from "./Spacer/Spacer"
import CurvyButton from "./CurvyButton/CurvyButton"

class MobileResellerForm extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div style={container}>
          <div style={floaterLeft}>
            <div style={leftHeaderStyle}>
              {this.props.leftHeader}
            </div>
            <div style={descriptionStyle}>
              {this.props.description}      
           <Spacer spaceWidth={20} />
            {this.props.signUpText}
             </div>  
          </div>
          <div style={floaterLeft}>
          <Spacer spaceWidth={15} />
          <div style={{paddingLeft: '7%'}}>
          <form>                
            <input type="text" name="search" placeholder="Enter your username" style={{width: 200, height: 40}} />
            <Spacer spaceWidth={10} />
            <input type="email" name="search" placeholder="Enter your email" style={{width: 200, height: 40}} />
            <Spacer spaceWidth={10} />
            <input type="text" name="search" placeholder="Enter your phone number" style={{width: 200, height: 40}} />
            <Spacer spaceWidth={10} />
            <input type="password" name="search" placeholder="Enter your password" style={{width: 200, height: 40}} />
          </form>
          </div>
          <Spacer spaceWidth={10} />
          <div style={{textAlign: 'center', justifyContent: 'center', marginLeft: '17%'}}>
           <CurvyButton 
            statement= "Get A Free Book"
            fsize={13}
            width={150}
            height={40}
            radius={5}
            color="yellow"
            textColor="black"/>
          </div>
            <Spacer spaceWidth={7} />
            <div style={{textAlign: 'center', justifyContent: 'center', fontSize: 10}}>
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
  fontSize: 14,
  lineHeight: 1.2,
  fontWeight: '200',
}
const leftHeaderStyle = {
  color: '#1c2833',
   float: 'left',
    width: '100%',
  justifyContent: 'center',
  alignItem: 'center',
  textAlign: 'center',
  fontSize: 20,
  lineHeight: 1.5,
  fontWeight: '200',
  marginBottom: 20
}

const floaterLeft = {
  float: 'left',
  justifyContent: 'center',
  alignItem: 'center',
  width: '100%',
  paddingTop: 20,
  paddingBottom: 20,
  paddingLeft: '4%',
  paddingRight: '2%'
}

const container = {
  width: '100%',
  background: '#f0f3f4',
  marginBottom: 0,
 
}

MobileResellerForm.propTypes = {
  leftHeader: PropTypes.string,
  description: PropTypes.string,
  signUpText: PropTypes.string,
  termConditionText: PropTypes.string,
  termConditionLink: PropTypes.string,
  privacyPolicyLink: PropTypes.string
};
export default MobileResellerForm
