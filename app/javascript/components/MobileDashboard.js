import React from "react"
import PropTypes from "prop-types"
import Carousel from "nuka-carousel"
import Url from "../helpers/url"
import Spacer from "./Spacer/Spacer"
import BookView from "./BookView"
import { AnimatedSwitch } from 'react-router-transition';
import { ClipLoader } from 'react-spinners';
import { ScaleLoader } from 'react-spinners';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faUser, faGavel, faBars, faPowerOff } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Route, Link, withRouter, Switch } from "react-router-dom";

library.add(faEnvelope, faKey, faUser,faGavel,faBars, faPowerOff );


class MobileDashboard extends React.Component {
   constructor() {
    super();
      this.state = {
        loading: false,
        isValid: true,
        errorColor: "red",
        books: [],
        pointer: "auto",
        bestSellerBooks: [],
        route_id: 0,
        id: 0,
        first_name: "",
        last_name: "",
        email: "", 
        balance: undefined,
        authTokenPresent: false,        
        authtoken: '',
      };
}

 
  componentDidMount(){
      let authtoken = localStorage.getItem("auth_token")
      console.log(`thiis is the auth token ${authtoken}`)
      if(authtoken){
        this.setState({authTokenPresent: true, authtoken: authtoken})
        this.getDetails(authtoken)
      }
    this.getBooks()
    this.getBestSellerBooks()
  }

    getDetails = (authtoken) => {
      fetch(`${Url().getUserDetails}`, {
      method: "GET",
      headers: {
                "Content-Type": "application/json",
                "Authorization": authtoken
            },
    })
      .then(result=>result.json())
      .then((data) => {
        this.setState({
          id: data.id,
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email, 
          balance: this.nullToFloat(data.balance),
        })
      })
    }
    nullToFloat = (num) => {
      if(num == null){
        return "₦0.00"
      }
      else {
        return `₦${num}`
      }
    }

  getBooks = () => {
    let books = []
    this.setState({loading: true})
    fetch(`${Url().allBooks}`, {
      method: "GET",
    })
    .then(result=>result.json())
    .then((data) => {
      // console.log(data)
      this.setState({books: data})
      console.log(this.state.books)
  })
  }
   getBestSellerBooks = () => {   
    this.setState({loading: true})
    fetch(`${Url().bestSellers}`, {
      method: "GET",
    })
    .then(result=>result.json())
    .then((data) => {
      // console.log(data)
      this.setState({bestSellerBooks: data})
      console.log(this.state.bestSellerBooks)
  })
  }
  gotoShow = (id) => {
      let user_id = this.state.id
      this.props.history.push("/show/"+id+"/"+user_id)
  }
// public folder in rails should not be part of the url, as its default already
//the number is the maximum number of character that we want
  truncator = (str, num) => {
    if(num < str.length){
      var newString = str.slice(0, num);
      console.log(newString)
      return newString + "...";
    }
    else {
      return str
    }
  }
  priceDetector = (price) => {
    if(price < 1){
      return "FREE"
    }
    else {
      return `₦${price}`
    }
  }


  render () {
   const listItems = this.state.books.map((d) => <li key={d.id}>{d.title}</li>);
    return (
     <Router>
      <div style={{background:'white'}}>
        <div>
          <ul style={ulStyle}>
           <Spacer spaceWidth={50} />
           {this.state.books.map((d) =>

              <div style={{position: 'relative', zIndex:1, marginLeft: 34, height: 190, width: 150, marginBottom: 100}}>
                <div style={{position: 'absolute', top: '150px', zIndex:2, height: 150, width: 190, border: '1px solid gray', borderColor: '#eaecee'}}>
              <p style={{ textAlign: 'center', justifyContent: 'center', fontSize: 18, fontWeight: '500', color: "#17202a", marginTop: 40, lineHeight: 0.6, fontStyle: 'normal' }}  onClick={()=>this.gotoShow(d.id)} >{this.truncator(d.title, 17)}</p>
              <p style={{lineHeight: 1.4, fontStyle: 'italic', textAlign: 'center', justifyContent: 'center', fontSize: 10, color: "#17202a"}}>{this.truncator(d.description, 50)}</p>
              <p style={{lineHeight: 0, textAlign: 'center', justifyContent: 'center', fontSize: 11, fontWeight: '500', color: "#17202a" }}>{this.priceDetector(d.price)}</p>
                <p style={{lineHeight:0, paddingTop:3, paddingRight:10, textAlign: 'center', justifyContent: 'center', fontSize: 10, color: "#17202a"}}>chapters: {d.chapters} |  pages: {d.num_of_pages}</p>

                </div>
                  <li key={d.id} style={liStyle}>
                    <img src={`/uploads/${d.image}`} alt={`${d.title}`} style={imgStyle} onClick={()=>this.gotoShow(d.id)} />
                  </li>
                               
              </div>
               )
            }
              </ul>  
        </div>
        
        <Switch>
  <Route exact path="/show/:id" component={BookView} />
  </Switch>
 
      </div>
      </Router>
    );
  }
}
const ulStyle = {
  listStyleType: 'none',
  margin:0,
  padding: 0,
  overflow: 'hidden',
  width: "900px"

}

const ulStylex = {
  listStyleType: 'none',
  margin:0,
  padding: 0,
  overflow: 'hidden',

}

const imgStyle = {
  width: '100%',
  height: 150,
  marginLeft: '13%',
  cursor: 'pointer'
}

const liStyle = {
  float: 'left',
  width: 150,
  height: 224,
  marginTop: '10px',
  top: '20px',
  position: 'absolute',
  zIndex: 3,
}


const imgStylex = {
  width: '30%',
  height: 130,
  cursor: 'pointer',
  float: 'left'
}

const liStylex= {
  width: 90,
  height: 130,
  marginTop: '10px',

}

const sideNav = {
  width: '22%',
  position: 'fixed',
  zIndex: 1,
  top: 90,
  right: 5,
  background: 'white',
  height: 800,
  paddingBottom: 10,
  float: 'left'
}

MobileDashboard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  photo: PropTypes.string
};
export default withRouter(MobileDashboard)
