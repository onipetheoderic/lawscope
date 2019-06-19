import React from "react"
import PropTypes from "prop-types"
import CurvyButton from "./CurvyButton/CurvyButton"
import Carousel from "nuka-carousel"
import Url from "../helpers/url"
import Spacer from "./Spacer/Spacer"
import { ClipLoader } from 'react-spinners';
import { ScaleLoader } from 'react-spinners';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faUser, faGavel, faBars, faPowerOff } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

library.add(faEnvelope, faKey, faUser,faGavel,faBars, faPowerOff );

class BookView extends React.Component {
   constructor() {
    super();
      this.state = {
        loading: false,
        isValid: true,
        errorColor: "red",
        books: [],
        pointer: "auto",
        description:"",
        title: "",
        email: "",
        image: "",
        publisher: "",
        chapters: 0,
        num_of_pages: 0,
        chapter_count: 0,
        price: 0,
        author_fullname: "",
        chapter_list: [],
        id: 0,
        authtoken: "",
        user_id:0
      };
}


  logOut = ()=> {
     localStorage.removeItem("auth_token"); 
     this.props.history.push("/"); 
     window.location.reload();
  }
  componentDidMount(){
    this.setState({loading: true})
  let authtoken = localStorage.getItem("auth_token")
  console.log(`thiis is the auth token ${authtoken}`)
  if(authtoken){
    this.setState({authtoken: authtoken})
    this.getDetails(authtoken)
  }
    var bookId = this.props.book_id;
    var userId = this.props.user_id;
    this.setState({user_id: userId})
    this.getBook(bookId) 
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
      user_id: data.id,
      loading: false
    })
  })
}

gotoRead = (id) => {
  let user_id = this.state.user_id
  this.setState({loading: true})
    fetch(`${Url().saveInLibrary}/${id}/${user_id}`, {
      method: "POST",
    })
    .then(result=>result.json())
    .then((data) => {
      console.log(data)
      if(data.success == true){
        this.props.history.push("/read/"+id)
        this.setState({loading:false})
      }      
    })
  }

   getBook = (bookId) => {   
    this.setState({loading: true})
    fetch(`${Url().singleBook}/${bookId}`, {
      method: "GET",
    })
    .then(result=>result.json())
    .then((data) => {
      // console.log(data.book.description)
      // console.log(data.book.title)
      this.setState({
        id: data.book.id,
        description: data.book.description,
        title: data.book.title,
        image: data.book.image,
        publisher: data.book.publisher,
        chapters: data.book.chapters,
        num_of_pages: data.book.num_of_pages,
        price: data.book.price,
        chapter_count: data.chapter_count,
        author_fullname: data.author.fullname,
        author_email: data.author.email
      })
      
  })
  }

// public folder in rails should not be part of the url, as its default already
//the number is the maximum number of character that we want

  priceDetector = (price) => {
    if(price < 1){
      return "FREE"
    }
    else {
      return `₦${price}`
    }
  }
  upperCaser = (text) => {
    return text.toUpperCase()
  }

  capitalizer = (str) => {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  handleSubmit = () => {
    console.log("started reading")
  }

  render () {
   const listItems = this.state.books.map((d) => <li key={d.id}>{d.title}</li>);
    return (
      <div style={{background:'white'}}>
      <Spacer spaceWidth={50} />

      <div style={{ marginRight: '1%', transition: '0.3s', background: 'white'}}>
    <p style={{paddingTop: 10, textAlign: "center", justifyContent: 'center', fontWeight: '600', fontSize: 16}}>ABOUT THIS BOOK</p>

    <p style={{padding:10, textAlign: 'center', lineHeight: 2.4}}>{this.state.description}</p>
      </div>
      <div style={{background:'white'}}>
      
      <div style={{transition: '0.3s', boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)"}}>
  <div>
 <img src={`/uploads/${this.state.image}`} alt={`${this.state.title}`} />
     </div>
     <div style={{paddingTop: 5, paddingBottom: 4}}>
      <p style={{textAlign: "center", justifyContent: 'center', fontWeight: '600', fontSize: 14}}>{this.upperCaser(this.state.title)}</p>
      <p style={{textAlign: "center", justifyContent: 'center', fontWeight: '600', fontSize: 13}}>{this.capitalizer(this.state.author_fullname)}</p>
      <p style={{textAlign: "center", justifyContent: 'center', fontWeight: '400', fontSize: 12}}>{this.state.author_email}</p>
    </div>
    <div style={{textAlign: 'center', justifyContent: 'center', paddingLeft: '16%'}}>
  <CurvyButton 
    handleOnClick={()=>this.gotoRead(this.state.id)} 
    statement= "Start Reading"
    pointerEvent={this.state.pointer}//or none
    fsize={16}
    width={150}
    height={45}
    radius={5}
    color="yellow"
    textColor="black"
  />
   <Spacer spaceWidth={10} />
  </div>

      </div>



    </div>
        
      </div>
    );
  }
}

const Side = {
  width: '18%',
  marginRight: 15,
  background: 'yellow',
  float: 'left',
  boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)"
}
const midSection = {
  width: '56%',
  background: 'yellow',
  float: 'left',
  boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)"
}




BookView.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  photo: PropTypes.string
};
export default BookView
