import React from "react"
import PropTypes from "prop-types"
import Spacer from "./Spacer/Spacer"
import CurvyButton from "./CurvyButton/CurvyButton"

class DesktopHelloWorld extends React.Component {
  constructor() {
  super();
  this.state = {
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
      let newWidth = Math.round(padding*1.5)
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }
    else if(currentWidth == "tabletMd"){
     let newWidth = Math.round(padding*1.5)
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }
    else if(currentWidth == "tabletSm"){
     let newWidth = Math.round(padding*1.5)
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }
    else if(currentWidth == "mobileLg"){
      let newWidth = Math.round(padding*1.5)
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }
    else if(currentWidth == "mobileMd"){
      let newWidth = Math.round(padding*1.5)
      let stringified_width = newWidth.toString()+"%"
      return stringified_width
    }
    else{
      let newWidth = Math.round(padding*1.5)
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
}

componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
}
  render () {
  	//document.body.style.backgroundImage = "-webkit-linear-gradient(45deg, #474747, #242424 100%, #e2ebf0)"
    return (
      <React.Fragment>
      	<div>
        <Spacer spaceWidth={130} />
      		<p style={{marginTop: 0, marginBottom: 35, color: '#f5f5f5', fontWeight: '300', fontSize: 40, textAlign: 'center'}}>{this.props.greeting}</p>
      		<div style={{display: 'block', width: this.responsiveWidth(50), marginRight: this.responsivePadder(25) , marginLeft: this.responsivePadder(25), color: '#d4d4d4', fontSize: this.responsiveFontSize(16), textAlign: 'center'}}>
      			<p>{this.props.description}</p>
      		</div>
            <Spacer spaceWidth={50} />
          <div style={{marginLeft:this.responsivePadderButton(20), marginRight: '20%'}}>
            <CurvyButton 
                statement= "Get A Free Book"
                fsize={16}
                width={250}
                height={65}
                radius={5}
                color="yellow"
                textColor="black"/>
          </div>
      	</div>
      </React.Fragment>
    );
  }
}
const descStyle = {
	display: 'block',
	width: '50%',
	marginRight: '25%',
	marginLeft: '25%',
	color: '#d4d4d4',
	fontSize: 16,
	textAlign: 'center'
}
const divStyle = {
	marginTop: 0,
    marginBottom: 35,
    color: '#f5f5f5',
    fontWeight: '300',
    fontSize: 40,
    textAlign: 'center',
}

const pStyle = {
	color: 'white',
	fontSize: 16,
}


DesktopHelloWorld.propTypes = {
  greeting: PropTypes.string,
  description: PropTypes.string
};
export default DesktopHelloWorld
