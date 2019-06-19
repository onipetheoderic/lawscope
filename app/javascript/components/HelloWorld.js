import React from "react"
import PropTypes from "prop-types"
import DesktopHelloWorld from "./DesktopHelloWorld"
import CurvyButton from "./CurvyButton/CurvyButton"

class HelloWorld extends React.Component {
  constructor() {
  super();
  this.state = {
    windowHeight: undefined,
    windowWidth: undefined,
    show: true
  };
}


  render () {
  	//document.body.style.backgroundImage = "-webkit-linear-gradient(45deg, #474747, #242424 100%, #e2ebf0)"
    return (
      <div>
          <DesktopHelloWorld greeting="Books by Lawyers, for the world." description="LawScope is an online publishing platform designed for writers and readers. Read books online and offline, publish for free with just a click of a button. "/> 
      </div>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string,
  description: PropTypes.string
};
export default HelloWorld
