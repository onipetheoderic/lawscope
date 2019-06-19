import React from "react"
import PropTypes from "prop-types"
class DashboardHeader extends React.Component {
  render () {
    return (
      <React.Fragment>
        Field1: {this.props.field1}
        Field2: {this.props.field2}
        Field3: {this.props.field3}
        Field4: {this.props.field4}
      </React.Fragment>
    );
  }
}

DashboardHeader.propTypes = {
  field1: PropTypes.string,
  field2: PropTypes.string,
  field3: PropTypes.string,
  field4: PropTypes.string
};
export default DashboardHeader
