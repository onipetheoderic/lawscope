import React from "react"
import PropTypes from "prop-types"
class HorizontalDivider extends React.Component {
  render () {
    return (
      <React.Fragment>
        Size: {this.props.size}
      </React.Fragment>
    );
  }
}

HorizontalDivider.propTypes = {
  size: PropTypes.number
};
export default HorizontalDivider
