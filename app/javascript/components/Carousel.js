import React from "react"
import PropTypes from "prop-types"
class Carousel extends React.Component {
  render () {
    return (
      <React.Fragment>
        Size: {this.props.size}
      </React.Fragment>
    );
  }
}

Carousel.propTypes = {
  size: PropTypes.number
};
export default Carousel
