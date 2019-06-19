import React from "react"
import PropTypes from "prop-types"
import Spacer from "../../Spacer/Spacer"


class DeskTopStackImage extends React.Component {
	constructor() {
    	super();
		  this.state = {
		    windowHeight: undefined,
		    windowWidth: undefined,

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

responsiveImage = (width, height) => {
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
      width: width*1.5,
      height: height*1.3
    }
  }
  else if(currentWidth == "tabletMd"){
    return {
      width: width*2,
      height: height*1.4
    }
  }
  else if(currentWidth == "tabletSm"){
    return {
      width: width*2,
      height: height*1.5
    }
  }
  else if(currentWidth == "mobileLg"){
    return {
      width: width*2.3,
      height: height*1.6
    }
  }
  else if(currentWidth == "mobileMd"){
    return {
      width: width*2.4,
      height: height*1.7
    }
  }
  else if(currentWidth == "mobileSm"){
    return {
      width: width*2.5,
      height: height*1.8
    }
  }
  else if(currentWidth == "mobileXs"){
    return {
      width: width*2.5,
      height: height*1.8
    }
  }
  else{
    return {
      width: width,
      height: height
    }
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
    return (
      <React.Fragment>
      	<div>
	      	<ul style={{listStyleType: 'none',  margin: 0,  padding: 0,  overflow: 'hidden'}}>
	      		<li style={{float: 'left', marginLeft: 30, width: this.responsiveImage(170,224).width, height: this.responsiveImage(170, 224).height, marginBottom:20, border: '3px solid green', borderColor: 'white', borderRadius: 4}}>
	      			<img src={'https://images.tandf.co.uk/common/jackets/agentjpg/978185941/9781859416914.jpg'} lt={"boohoo"} style={{width: '100%', height: this.responsiveImage(170, 224).height}}/>
		       	</li>
		        <li style={{float: 'left', marginLeft: 30, width: this.responsiveImage(170,224).width, height: this.responsiveImage(170, 224).height, marginBottom:20, border: '3px solid green', borderColor: 'white', borderRadius: 4}}>
		       		<img src={'https://secure.coverart.textbookrush.com/large/650/1-9780132540650.jpg'} alt={"boohoo"} style={{width: '100%', height: this.responsiveImage(170, 224).height}}/>
		       	</li>
		       	<li style={{float: 'left', marginLeft: 30, width: this.responsiveImage(170,224).width, height: this.responsiveImage(170, 224).height, marginBottom:20, border: '3px solid green', borderColor: 'white', borderRadius: 4}}>
		       		<img src={'https://www.lawctopus.com/wp-content/uploads/2015/06/law-as-a-career-book.jpg'} alt={"boohoo"} style={{width: '100%', height: this.responsiveImage(170, 224).height}}/>
		       	</li>
		       	<li style={{float: 'left', marginLeft: 30, width: this.responsiveImage(170,224).width, height: this.responsiveImage(170, 224).height, marginBottom:20, border: '3px solid green', borderColor: 'white', borderRadius: 4}}>
		       		<img src={'https://d1nmq8yw1yjo7e.cloudfront.net/images/covers/300/9781760020552.jpg'} alt={"boohoo"} style={{width: '100%', height: this.responsiveImage(170, 224).height}}/>
		       	</li>
		       	{this.state.windowWidth > 1000 &&
			       	<li style={{float: 'left', marginLeft: 30, width: this.responsiveImage(170,224).width, height: this.responsiveImage(170, 224).height, marginBottom:20, border: '3px solid green', borderColor: 'white', borderRadius: 4}}>
			       		<img src={'https://www.berghahnbooks.com/covers/AkcamSpirit.jpg'} alt={"boohoo"} style={{width: '100%', height: this.responsiveImage(170, 224).height}}/>
			       	</li>
		       	}
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

const imgStyle = {
	width: '100%',
    height: 223,
}

const liStyle = {
  float: 'left',
  marginLeft: 30,
	width: 170,
	height: 224,
	border: '3px solid green',
	borderColor: 'white',
	borderRadius: 4
}

DeskTopStackImage.propTypes = {
  image1: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
  image4: PropTypes.string,
  image5: PropTypes.string,
};
export default DeskTopStackImage
