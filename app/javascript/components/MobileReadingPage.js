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

class MobileReadingPage extends React.Component {
   constructor() {
    super();
      this.state = {
        prevable: false,
        currentPage: 0,
        previousPage: 0,
        first_chapter_pages_length: 0,
        current_chapter_pages_length: 0,
        nextable: true,
        currentPageNumber: 0,
        currentPageContent: "",
        all_pages: [],
        chapterList: [],
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
        chapter_list: []

      };
}


  logOut = ()=> {
     localStorage.removeItem("auth_token"); 
     this.props.history.push("/"); 
     window.location.reload();
  }

  componentDidMount(){
    var bookId = this.props.id;
    this.getBook(bookId)
    
    
  }
  firstChapterHandler = (chapterArray) => {
   return chapterArray[0].id
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
      let firstChapterId = this.firstChapterHandler(data.chapterlist)
      console.log("this is the irst chapter id: ", firstChapterId)
      this.setState({
        description: data.book.description,
        title: data.book.title,
        image: data.book.image,
        publisher: data.book.publisher,
        chapters: data.book.chapters,
        num_of_pages: data.book.num_of_pages,
        price: data.book.price,
        chapter_count: data.chapter_count,
        author_fullname: data.author.fullname,
        author_email: data.author.email,
        chapterList: data.chapterlist
      })
      fetch(`${Url().pages}/${firstChapterId}`, {
        method: "GET",
      })
      .then(results=>results.json())
      .then((pages) => {
        let mypages = []
        // console.log(pages.all_pages)
        mypages = pages.all_pages
        
        this.setState({all_pages: mypages})
        console.log(this.state.all_pages)
        // console.log("this is the chapter_page length",this.state.first_chapter_pages_length)
        this.paginator(this.state.all_pages, 1, 0)
      })
      
  })
  }
// public folder in rails should not be part of the url, as its default already
//the number is the maximum number of character that we want
chapterPages = (chapter_id) => {
  fetch(`${Url().pages}/${chapter_id}`, {
        method: "GET",
      })
  .then(results=>results.json())
      .then((pages) => {
        let mypages = []
        // console.log(pages.all_pages)
        mypages = pages.all_pages
        this.setState({all_pages: mypages})
        console.log(this.state.all_pages)
        this.paginator(this.state.all_pages, 1, 0)
      })
}

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

  paginator = (items, per_page, page) => {
    var page = page || 0
    var items_length = items.length
    var paginatedItems = items.slice(page, per_page)
    var totalPages = Math.ceil(items.length/per_page)
    var curr = page +1
    console.log("this is the curr",curr)
    // if(totalPages < items_lenght){
    //   this.setState({prevable: true})
    // }
    if(items.length/totalPages == items.length){
      let previousPage = items_length-1
      this.setState({nextable:false, prevable:true, currentPage: curr, previousPage})
      console.log("current page after state", items_length)
    }
    else if(curr == 1 && this.state.currentPage >curr ){
      this.setState({currentPage: 1, prevable: false, nextable: true})
    }
    else {
      let previousPage = this.state.currentPageNumber-1
       this.setState({currentPage: curr, nextable:true, previousPage})
    }

    console.log("this is the current page", this.state.currentPage)
    console.log("this is the total pages: ", totalPages)
    
    this.setState({currentPageContent: paginatedItems[0].content,
                  currentPageNumber: paginatedItems[0].page_number})

  }





  render () {
   const listItems = this.state.books.map((d) => <li key={d.id}>{d.title}</li>);
    return (
      <div style={{background:'white'}}>
      <Spacer spaceWidth={50} />

      <div style={{background:'white'}}>
      
  <div style={{marginLeft: '1%', transition: '0.3s', marginRight: '1%', background: 'white', boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)"}}>
  
  <div style={{fontWeight: '600', fontSize: 12}}>
    <p style={{fontWeight: '600', fontSize: 14, textAlign:'center'}}>Table of Content</p>
    <ul style={ulStyle}>

    {this.state.chapterList.map((d, i) =>
      <li onClick={()=> this.chapterPages(d.id)} key={d.id} style={{cursor: 'pointer', paddingTop:6, paddingBottom:6, paddingLeft:1, boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)"}}>Chapter {i+1}</li>
      )}
    </ul>
  </div>

  <div>
      <img src={`/uploads/${this.state.image}`} alt={`${this.state.title}`}/>
  </div>
     <div style={{paddingTop: 5, paddingBottom: 4}}>
      <p style={{textAlign: "center", justifyContent: 'center', fontWeight: '600', fontSize: 14}}>{this.upperCaser(this.state.title)}</p>
      <p style={{textAlign: "center", justifyContent: 'center', fontWeight: '600', fontSize: 13}}>{this.capitalizer(this.state.author_fullname)}</p>
      <p style={{textAlign: "center", justifyContent: 'center', fontWeight: '400', fontSize: 12}}>{this.state.author_email}</p>
    </div>
   

      </div>

      <div style={{ marginRight: '1%', transition: '0.3s', background: 'white',
  boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)"}}>
    <p style={{paddingTop: 10, textAlign: "center", justifyContent: 'center', fontWeight: '600', fontSize: 8}}>{this.state.currentPageNumber}</p>

    <p style={{padding:10, textAlign: 'center', lineHeight: 2.4}}>{this.state.currentPageContent}</p>
     {this.state.nextable &&
      <p onClick={()=>this.paginator(this.state.all_pages, this.state.currentPage+1, this.state.currentPage ) } style={{cursor: 'pointer', paddingLeft: 20, fontWeight: '700', fontSize: 14}}>Next>>>></p>
      }
      {this.state.prevable &&
      <p onClick={()=>this.paginator(this.state.all_pages, this.state.currentPage, this.state.currentPage-2) } style={{cursor: 'pointer', paddingLeft: 20, fontWeight: '700', fontSize: 14}}>Previous</p>
      }
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


const ulStyle = {
  listStyleType: 'none',
  paddingTop: 10
}



MobileReadingPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  photo: PropTypes.string
};
export default MobileReadingPage
