import React from "react"
import PropTypes from "prop-types"
class AlertBox extends React.Component {
	constructor() {
    super();
      this.state = {
      	show2: true,
        show: true,
        buttonColor: '#17202a',
        buttonColor2: '#17202a'
      };
  }
	close = () => {
		this.setState({show: false})
	}
handleResize = () => {
  var width = window.innerWidth
//   this.setState({
//     windowHeight: window.innerHeight,
//     windowWidth: window.innerWidth
// });
  if(width < 900){
    this.setState({
      show2: false
    })
  }
  else {
    this.setState({show2:true})
  }

}
	componentWillMount() {
	    this.handleResize();
	    window.addEventListener('resize', this.handleResize)
	}

	componentWillUnmount() {
	    window.removeEventListener('resize', this.handleResize)
	}
	onMouseEnter(str) {
		if(str=="close"){
	    	this.setState({buttonColor: '#34495e', buttonColor2: '#17202a' })
		}
		else {
			this.setState({buttonColor2: '#34495e', buttonColor: '#17202a'})
		}
	}

	onMouseLeave(str) {
		if(str=="close"){
			 this.setState({buttonColor: '#17202a'})
		}
		else if(str=="ok"){
			 this.setState({buttonColor2: '#17202a'})
		}
	   
	}

  render () {

    return (
    	<div>
    	{this.state.show2 ?
    		<div>
		    {this.state.show &&
		      <div style={{top:this.props.topPercent, border: '2px solid #aab7b8', 
		      	left: this.props.leftPercent, position: 'fixed',
		      	background: this.props.bg, zIndex:90000000000, 
		      	borderRadius: this.props.radius, height: this.props.height, width: this.props.width}}>
		      <p style={{fontSize: 15, paddingTop: 30, textAlign: 'center', justifyContent: 'center'}}>{this.props.message}</p>
			   <div style={{width: '100%', marginTop: 40}}>   
			    <div onMouseEnter={() => this.onMouseEnter("close")} onMouseLeave={() => this.onMouseLeave("close")} onClick={()=> this.close()} style={{cursor: 'pointer', float: 'left', marginLeft:'30%', width: 70, height: 45, background: '#f4f6f7', borderRadius: 4, textAlign: 'center', 
			       border: '1px solid #2e4053', borderColor: '#aab7b8', justifyContent: 'center'}}> 
			      <p style={{color: this.state.buttonColor, fontWeight:'600', paddingBottom: 10,textAlign: 'center', justifyContent: 'center', fontSize:12}}>Close</p>
			    </div>

			    <div onMouseEnter={() => this.onMouseEnter("ok")} onMouseLeave={() => this.onMouseLeave("ok")} onClick={this.props.handleOnOkClick} style={{cursor: 'pointer', float: 'left', marginLeft: 15, width: 70, height: 45, background: '#f4f6f7', borderRadius: 4, textAlign: 'center', 
			       border: '1px solid #2e4053', borderColor: '#aab7b8', justifyContent: 'center'}}> 
			      <p style={{color: this.state.buttonColor2, fontWeight:'600', paddingBottom:30, textAlign: 'center', justifyContent: 'center', fontSize:12}}>OK</p>

			    </div>
			   </div>
		      </div>
		    }
	    	</div>

	    	:
	    	<div>
		    {this.state.show &&
		      <div style={{top:this.props.topPercent, border: '2px solid #aab7b8', 
		      	left:'13%', position: 'fixed',
		      	background: this.props.bg, zIndex:90000000000, 
		      	borderRadius: this.props.radius}}>
		      <p style={{fontSize: 12, paddingTop: 20, textAlign: 'center', justifyContent: 'center'}}>{this.props.message}</p>
			   <div style={{marginTop: 10}}>   
			    <div onMouseEnter={() => this.onMouseEnter("close")} onMouseLeave={() => this.onMouseLeave("close")} onClick={()=> this.close()} style={{cursor: 'pointer', float: 'left', width: 70, height: 45, background: '#f4f6f7', borderRadius: 4, textAlign: 'center', 
			       border: '1px solid #2e4053', borderColor: '#aab7b8', justifyContent: 'center'}}> 
			      <p style={{color: this.state.buttonColor, fontWeight:'600', paddingBottom: 10,textAlign: 'center', justifyContent: 'center', fontSize:12}}>Close</p>
			    </div>

			    <div onMouseEnter={() => this.onMouseEnter("ok")} onMouseLeave={() => this.onMouseLeave("ok")} onClick={this.props.handleOnOkClick} style={{cursor: 'pointer', float: 'left', marginLeft: 15, width: 70, height: 45, background: '#f4f6f7', borderRadius: 4, textAlign: 'center', 
			       border: '1px solid #2e4053', borderColor: '#aab7b8', justifyContent: 'center'}}> 
			      <p style={{color: this.state.buttonColor2, fontWeight:'600', paddingBottom:30, textAlign: 'center', justifyContent: 'center', fontSize:12}}>OK</p>

			    </div>
			   </div>
		      </div>
		    }
	    	</div>
	    }
	    </div>
       );
  }
}

AlertBox.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  radius: PropTypes.number,
  bg: PropTypes.string,
  topPercent: PropTypes.any,
  leftPercent: PropTypes.any,
  message: PropTypes.message
};
export default AlertBox