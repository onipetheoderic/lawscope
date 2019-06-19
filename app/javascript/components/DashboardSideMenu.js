import React from "react"
import PropTypes from "prop-types"
class DashboardSideMenu extends React.Component {
  render () {
    return (
      <React.Fragment>
        Field1: {this.props.field1}
        Field2: {this.props.field2}
      </React.Fragment>
    );
  }
}

DashboardSideMenu.propTypes = {
  field1: PropTypes.string,
  field2: PropTypes.string
};
export default DashboardSideMenu
