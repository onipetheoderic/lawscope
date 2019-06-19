import React from "react"
import PropTypes from "prop-types"
import Spacer from "./Spacer/Spacer"
import CurvyButton from "./CurvyButton/CurvyButton"
import DesktopResellerForm from "./DesktopResellerForm"
import MobileResellerForm from "./MobileResellerForm"

class ResellerForm extends React.Component {
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
  if(width < 1200){
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
    return (
      <div>
        <DesktopResellerForm leftHeader="Your first bestseller is on the house."
          description= "Welcome to the home of the best law books and topics you can find in all of Africa! Whatever you want, from basic Laws to advanced law books, we've got you covered. "
          signUpText= "Sign up now and get your first  law book on the house."
          termConditionText= "By clicking Get your first book you are agreeing to our Terms & Condition and Privacy policy"
        /> 
    </div>
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

ResellerForm.propTypes = {
  leftHeader: PropTypes.string,
  description: PropTypes.string,
  signUpText: PropTypes.string,
  termConditionText: PropTypes.string,
  termConditionLink: PropTypes.string,
  privacyPolicyLink: PropTypes.string
};
export default ResellerForm
