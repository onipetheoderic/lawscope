import React from "react"
import PropTypes from "prop-types"
import Spacer from "./Spacer/Spacer"
import CurvyButton from "./CurvyButton/CurvyButton"

class MobileHelloWorld extends React.Component {
  render () {
  	//document.body.style.backgroundImage = "-webkit-linear-gradient(45deg, #474747, #242424 100%, #e2ebf0)"
    return (
      <React.Fragment>
      	<div>
         <Spacer spaceWidth={30} />
      		<p style={divStyle}>{this.props.greeting}</p>
      		<div style={descStyle}>
      			<p>{this.props.description}</p>
      		</div>
           
          <div style={{ marginLeft: '15%'}}>
            <CurvyButton 
              statement= "Get A Free Book"
              fsize={13}
              width={200}
              height={35}
              radius={4}
              color="yellow"
              textColor="black"/>
              </div>
      	</div>
      </React.Fragment>
    );
  }
}
const descStyle = {
	display: 'block',
	width: '90%',
	marginRight: '5%',
	marginLeft: '5%',
	color: '#d4d4d4',
	fontSize: 13,
	textAlign: 'center'
}
const divStyle = {
	marginTop: 0,
    marginBottom: 25,
    color: '#f5f5f5',
    fontWeight: '200',
    marginRight: '4%',
    marginLeft: '4%',
    fontSize: 20,
    textAlign: 'center',
}

const pStyle = {
	color: 'white',
	fontSize: 13,
}


MobileHelloWorld.propTypes = {
  greeting: PropTypes.string,
  description: PropTypes.string
};
export default MobileHelloWorld
