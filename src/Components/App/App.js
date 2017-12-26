import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import CurrentlyList from '../CurrentlyList/CurrentlyList'
import WantToList from '../WantToLIst/WantToList'
import ReadList from '../ReadList/ReadList'
import SearchList from '../SearchList/SearchList'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }

  render() {
    return (

      <div className="app">


          {/*main page*/}
          <Route exact path="/" render={()=>(
              <div className="list-books-content">
                  <div className="open-search">
                      <Link to='/search'>Add a book</Link>
                  </div>

                  <div className="list-books">
                      <div className="list-books-title">
                          <h1>MyReads</h1>
                      </div>
                  </div>
                  <div>
                      {/*여기부터 BookList - Book 이라고!*/}
                      <CurrentlyList />
                      <WantToList />
                      <ReadList />
                  </div>
              </div>
          )}/>

          {/*search page*/}
          <Route path='/search' render={()=>(
              <div>
                 <SearchList />
              </div>
          )}/>


      </div>
    )
  }
}

export default BooksApp
