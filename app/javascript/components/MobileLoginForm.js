import React from "react"
import PropTypes from "prop-types"
import Spacer from "./Spacer/Spacer"
import CurvyButton from "./CurvyButton/CurvyButton"


class MobileLoginForm extends React.Component {
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
              <Spacer spaceWidth={10}/> 
            <div style={{marginLeft: '12%'}}>
              <CurvyButton 
            statement= "Sign In"
            fsize={12}
            width={200}
            height={45}
            radius={3}
            color="white"
            textColor="black"/>     
            </div>
              <Spacer spaceWidth={20} />
              
            </div>  
          </div>
          <div style={floaterLeft2}>
          
          <Spacer spaceWidth={25} />
           <div style={{marginLeft: '12%'}}>
          <form>                
            <input type="text" name="search" placeholder="username" style={{width: 200, height: 50}} />
            <Spacer spaceWidth={10} />
            <input type="email" name="search" placeholder="password" style={{width: 200, height: 50}} />
            <Spacer spaceWidth={10} />
            
          </form>
          </div>
          <Spacer spaceWidth={10} />
           <div style={{marginLeft: '12%'}}>
           <CurvyButton 
            statement= "Sign In"
            fsize={12}
            width={200}
            height={45}
            radius={3}
            color="yellow"
            textColor="black"/>
          </div>
            <Spacer spaceWidth={7} />

            <div style={{textAlign: 'center', justifyContent: 'center', fontSize:10}}>
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

MobileLoginForm.propTypes = {
  leftHeader: PropTypes.string,
  description: PropTypes.string,
  termConditionText: PropTypes.string
};
export default MobileLoginForm
