import React from "react"
import PropTypes from "prop-types"
class Spacer extends React.Component {
  render () {
    return (
      <React.Fragment>
      <div style={{height: this.props.spaceWidth}}>
      </div>
      </React.Fragment>
    );
  }
}

Spacer.propTypes = {
  spaceWidth: PropTypes.number
};
export default Spacer
