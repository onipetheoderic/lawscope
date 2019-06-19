import React from "react"
import PropTypes from "prop-types"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)


class Footer extends React.Component {
   constructor() {
    super();
      this.state = {
        email: '',
        password: '',
        errorColor: "red",
        pointer: "auto",
        loading: false,     
        windowHeight: undefined,
        windowWidth: undefined,
        show: true   
      };
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

  render () {

    return (
     
      <React.Fragment>
        <div style={{background: '#f0f3f4',
   height: 80,
   borderTop: '1px solid  #abb2b9',
   color: '#1c2833',
  fontSize: this.responsiveFontSize(15),
  position: 'fixed',
  width: '100%',
  bottom: 0}}>
          <ul style={ulStyle}>
          <li style={liStyleMenu}>
            {this.props.field1}   
          </li>       
          <li style={liStyleMenu}>
            {this.props.field2}   
          </li>  
          <li style={liStyleMenu}>
            {this.props.field3}   
          </li>          
          <li style={liStyleMenu}>
            {this.props.field4}   
          </li>  
          <li style={liStyleMenu}>
            {this.props.field}   
          </li> 

          </ul>   
  
        </div>
      </React.Fragment>
    );
  }
}

const ulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  overflow: 'hidden',
}
const liStyleMenu = {
  float: 'left',
  paddingLeft: 30,
  paddingTop: 33,
}
// #f0f3f4
const footerContainer = {
   background: '#f0f3f4',
   height: 80,
   borderTop: '1px solid  #abb2b9',
   color: '#1c2833',
  fontSize: 15,
  position: 'absolute',
  width: '100%',
  bottom: 0,
}

Footer.propTypes = {
  field1: PropTypes.string,
  field1Link: PropTypes.string,
  field2: PropTypes.string,
  field2Link: PropTypes.string,
  field3: PropTypes.string,
  field3Link: PropTypes.string,
  field4: PropTypes.string,
  field4Link: PropTypes.string,
  field5: PropTypes.string,
  field5Link: PropTypes.string
};
export default Footer
