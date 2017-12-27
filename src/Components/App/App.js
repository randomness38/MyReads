import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import BookShelf from '../BookShelf/BookShelf'
import SearchList from '../SearchList/SearchList'
import * as BooksAPI from '../../util/BooksAPI'

import './App.css'


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentList : [],
            wantToList : [],
            readList : [],
            searchList :[],
            searchTerm : '',
        }
        this.changeBookShelf = this.changeBookShelf.bind(this);
        this.searchBook = this.searchBook.bind(this);
    }


    // 이게 무슨 의미일까나
    changeBookShelf(book, shelf) {
        BooksAPI.update(book, shelf).then(() => {
            BooksAPI.getAll().then(books => book.shelf = books.find(b => b.id === book.id).shelf);
        });
    }

    searchBook(term) {
        BooksAPI.search(term).then(books => {
            this.setState({
                searchList : books
            })
        })

    }


  render() {
    return (

      <div className="app">


          {/*main page*/}
          <Route exact path="/" render={()=>(
             <BookShelf/>
          )}/>

          {/*search page*/}
          <Route path='/search' render={()=>(
              <div>
                 <SearchList onSearch={this.searchBook}
                             searchTerm={this.state.searchTerm}
                             searchList={this.state.searchList}/>
              </div>
          )}/>


      </div>
    )
  }
}

export default App
