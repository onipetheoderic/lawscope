import React from "react"
import PropTypes from "prop-types"
import StackImage from "../../StackImage/StackImage"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)


class MobileFooter extends React.Component {


  render () {

    return (
     
      <React.Fragment>
        <div>

          <ul style={ulStyle}>
            <div style={footerContainer}>
              <li style={liStyleMenu}>
                {this.props.field1}   
              </li>       
              <li style={liStyleMenu}>
                {this.props.field2}   
              </li>  
              <li style={liStyleMenu}>
                {this.props.field3}   
              </li>          
              <li style={liStyleMenu}>
                {this.props.field4}   
              </li>  
              <li style={liStyleMenu}>
                {this.props.field}   
              </li> 
            </div>

          </ul>   
  
        </div>
      </React.Fragment>
    );
  }
}

const ulStyle = {
  listStyleType: 'none',
  marginTop: 10,
  marginLeft: '2%'
 
}
const liStyleMenu = {
  float: 'left',
  padding: 5
}

const footerContainer= {
   height: 80,
   color: '#1c2833',
  fontSize: 10,
  bottom: 0,
}

MobileFooter.propTypes = {
  field1: PropTypes.string,
  field1Link: PropTypes.string,
  field2: PropTypes.string,
  field2Link: PropTypes.string,
  field3: PropTypes.string,
  field3Link: PropTypes.string,
  field4: PropTypes.string,
  field4Link: PropTypes.string,
  field5: PropTypes.string,
  field5Link: PropTypes.string
};
export default MobileFooter
