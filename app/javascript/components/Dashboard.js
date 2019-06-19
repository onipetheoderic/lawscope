import React from "react"
import PropTypes from "prop-types"
import Carousel from "nuka-carousel"

import DesktopDashboard from "./DesktopDashboard"
import MobileDashboard from "./MobileDashboard"


class Dashboard extends React.Component {
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
       { this.state.show ? <DesktopDashboard/> : <MobileDashboard/> }
      </div>
    );
  }
}



Dashboard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  photo: PropTypes.string
};
export default Dashboard
