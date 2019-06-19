import React from "react"
import PropTypes from "prop-types"
// pointerEvent can either be none
class CurvyButton extends React.Component {
 constructor() {
  super();
  this.state = {
    windowHeight: undefined,
    windowWidth: undefined,
    show: true
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

responsiveButtonSize = (buttonSize, buttonHeight, fontSize) => {
  let currentWidth = this.screenAnalyzer(this.state.windowWidth)
  if(currentWidth == "desktopLg"){
    return {buttonSize, buttonHeight, fontSize}
  }
  else if(currentWidth == "desktopMd"){
    return {buttonSize, buttonHeight, fontSize}
  }
  else if(currentWidth == "desktopSm"){
    return {buttonSize, buttonHeight, fontSize}
  }
  else if(currentWidth == "tabletLg"){
      let newButtonSize = buttonSize
      let newButtonHeight = buttonHeight*1.5
      let newFontSize = fontSize*2
     return {newButtonSize, newButtonHeight, newFontSize}
  }
  else if(currentWidth == "tabletMd"){
    let newButtonSize = buttonSize
      let newButtonHeight = buttonHeight*1.5
      let newFontSize = fontSize*2
     return {newButtonSize, newButtonHeight, newFontSize}
  }
  else if(currentWidth == "tabletSm"){
    let newButtonSize = buttonSize*2
      let newButtonHeight = buttonHeight*1.5
      let newFontSize = fontSize*2
     return {newButtonSize, newButtonHeight, newFontSize}
  }
  else if(currentWidth == "mobileLg"){
    let newButtonSize = buttonSize*2
      let newButtonHeight = buttonHeight*1.5
      let newFontSize = fontSize*2
     return {newButtonSize, newButtonHeight, newFontSize}
  }
  else if(currentWidth == "mobileMd"){
   let newButtonSize = buttonSize*2
      let newButtonHeight = buttonHeight*1.5
      let newFontSize = fontSize*2
     return {newButtonSize, newButtonHeight, newFontSize}
  }
  else{
    let newButtonSize = buttonSize*2
      let newButtonHeight = buttonHeight*1.5
      let newFontSize = fontSize*2
     return {newButtonSize, newButtonHeight, newFontSize}
  }
}
handleResize = () => {
  var width = window.innerWidth
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });

}
responsivePadder = (padding) => {
  let currentWidth = this.screenAnalyzer(this.state.windowWidth)
  if(currentWidth == "desktopLg"){
    return padding
  }
  else if(currentWidth == "desktopMd"){
    return padding*1
  }
  else if(currentWidth == "desktopSm"){
    return padding*1
  }
  else if(currentWidth == "tabletLg"){
    return padding*1.3
  }
  else if(currentWidth == "tabletMd"){
    return padding*2.3
  }
  else if(currentWidth == "tabletSm"){
    return padding*3.2
  }
  else if(currentWidth == "mobileLg"){
    return padding*3.3
  }
  else if(currentWidth == "mobileMd"){
    return padding*3.3
  }
  else{
    return padding*3.3
  }
}

componentDidMount(){
  this.handleResize();
  window.addEventListener('resize', this.handleResize)
}

componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
}

  render () {
    return (
      <React.Fragment>
      <div onClick={this.props.handleOnClick} style ={{cursor: "pointer", pointerEvents: this.props.pointerEvent, fontSize: this.responsiveButtonSize(this.props.width, this.props.height, this.props.fsize).newFontSize, color: this.props.textColor, 
      background: this.props.color, height: this.responsiveButtonSize(this.props.width, this.props.height, this.props.fsize).newButtonHeight, 
      width: this.responsiveButtonSize(this.props.width, this.props.height, this.props.fsize).newButtonSize, borderRadius: this.props.radius}}>
        <p style={{textAlign: 'center', justifyContent: 'center', fontWeight: '700', paddingTop:this.responsivePadder(12)}}>
        {this.props.statement}
        </p>
      </div>
      </React.Fragment>
    );
  }
}

const pStyle = {
  textAlign: 'center',
  justifyContent: 'center',
  fontWeight: '700',
  paddingTop: 18
}

CurvyButton.propTypes = {
  statement: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  radius: PropTypes.number,
  color: PropTypes.string,
  textColor: PropTypes.string,
  fsize: PropTypes.number,
  pointerEvent: PropTypes.string,
  handleOnClick: PropTypes.func
};
export default CurvyButton
