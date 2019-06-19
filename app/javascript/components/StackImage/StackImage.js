import React from "react"
import PropTypes from "prop-types"
import DeskTopStackImage from "./DeskTopStackImage/DeskTopStackImage"

class StackImage extends React.Component {
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
         <DeskTopStackImage/>
      </div>
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

StackImage.propTypes = {
  image1: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
  image4: PropTypes.string,
  image5: PropTypes.string,
};
export default StackImage
