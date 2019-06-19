import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WebFont from 'webfontloader';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faUser, faGavel, faEllipsisH, faEllipsisV, faBars, faAngleDown, faBook, faEdit, faSearch } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

library.add(faEnvelope, faKey, faUser,faGavel,faEllipsisH, faEllipsisV, faBars, faAngleDown, faBook, faEdit, faSearch);

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif', 'Baumans','Dosis', 'Dosis','Fahkwang','Gruppo','Harmattan','Josefin+Sans','Kodchasan','Michroma','Orbitron','Poiret+One','Quattrocento+Sans','Tangerine','Ubuntu']
  }
});

class PricePlan extends React.Component {
  constructor() {
  super();
  this.state = {
    windowHeight: undefined,
    windowWidth: undefined,
    show: true,
    showHide: false,
    menuIcon: "ellipsis-v"
  };
}
/*<link href="https://fonts.googleapis.com/css?family=Baumans|Dosis|Dosis|Fahkwang|Gruppo|Harmattan|Josefin+Sans|Kodchasan|Michroma|Orbitron|Poiret+One|Quattrocento+Sans|Tangerine|Ubuntu" rel="stylesheet">  */
handleResize = () => {
  var width = window.innerWidth
//   this.setState({
//     windowHeight: window.innerHeight,
//     windowWidth: window.innerWidth
// });
  if(width < 900){
    this.setState({
      show: false
    })
  }
  else {
    this.setState({show:true})
  }

}
showHide = ()=> {
  this.state.showHide == true ? this.setState({showHide:false, menuIcon: "ellipsis-v"}) : this.setState({showHide:true, menuIcon: "ellipsis-h"})
}


componentWillMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
}

componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
}
  render () {
    return (
      <div>
       {this.state.show ?
        <div style={{marginBottom: 50, marginTop: 20, float: 'left', pointerEvents: this.props.pointerEvent, width:'32%'}}>
          <div style={{height: 300, borderTopRightRadius: 7, marginBottom:2, cursor: 'pointer'}}>
            <ul style={{listStyleType: 'none', margin: 0, padding: 0, overflow: 'hidden'}}>
              <li style={{fontSize:40, cursor: 'pointer', marginTop:55,marginLeft:'32%'}}>{this.props.price}</li>
              <li style={{fontFamily:"'Baumans', Dosis", marginTop:35, float:'left', textAlign:'center',  width: '90%', lineHeight: 1.2}}>
              <p style={{fontFamily:"'Baumans', Dosis", fontSize:18, fontWeight:'600'}}>{this.props.title}</p>
              <p style={{fontFamily:"'Baumans', Dosis", fontSize:14, fontWeight:'500'}}>{this.props.description}</p>
              <p style={{fontFamily:"'Baumans', Dosis", fontSize:14, fontWeight:'500'}}>{this.props.duration} days</p>
               <div onClick={this.props.handleOnClick} style={{background:"yellow", width: '70%', marginLeft: '12%'}}>
              <p style={{padding: 10}}>Subscribe</p>
              </div>
              </li>            
            </ul>
          </div> 
        </div>

        :

        <div style={{pointerEvents: this.props.pointerEvent, width:'100%', marginBottom:30}}>
          <div style={{cursor: 'pointer'}}>
            <ul style={{listStyleType: 'none', margin: 0, padding: 0, overflow: 'hidden'}}>
              <li style={{fontSize:40, cursor: 'pointer', marginTop:15,marginLeft:'30%'}}>{this.props.price}</li>
              <li style={{fontFamily:"'Baumans', Dosis", marginTop:25, textAlign:'center', lineHeight: 1.2}}>
              <p style={{fontFamily:"'Baumans', Dosis", fontSize:18, fontWeight:'600'}}>{this.props.title}</p>
              <p style={{fontFamily:"'Baumans', Dosis", fontSize:14, fontWeight:'500'}}>{this.props.description}</p>
              <p style={{fontFamily:"'Baumans', Dosis", fontSize:14, fontWeight:'500'}}>{this.props.duration} days</p>
              <div onClick={this.props.handleOnClick} style={{background:"yellow", width: '70%', marginLeft: '12%'}}>
              <p style={{padding: 10}}>Subscribe</p>
              </div>
              </li>            
            </ul>
          </div> 
        </div>
    }

      </div>
    );
  }
}


PricePlan.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  titleSize: PropTypes.number,
  description: PropTypes.string,
  descriptionColor: PropTypes.string,
  descriptionSize: PropTypes.number,
  duration: PropTypes.number,
  durationColor: PropTypes.string,
  durationSize: PropTypes.number,
  price: PropTypes.number,
  priceColor: PropTypes.string,
  priceSize: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  radius: PropTypes.number,
  bgColor: PropTypes.string,
  pointerEvent: PropTypes.string,
  handleOnClick: PropTypes.func
};
export default PricePlan
