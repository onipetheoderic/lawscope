import React from "react"
import PropTypes from "prop-types"
class BigHorizontalDivider extends React.Component {
  render () {
    return (
      <React.Fragment>
        Size: {this.props.size}
      </React.Fragment>
    );
  }
}

BigHorizontalDivider.propTypes = {
  size: PropTypes.number
};
export default BigHorizontalDivider
