import React from 'react'
import { Route } from 'react-router-dom'
import BookShelf from '../BookShelf/BookShelf'
import SearchList from '../SearchList/SearchList'
import * as BooksAPI from '../../util/BooksAPI'

import './App.css'


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayList:[],
            searchList:[],
            searchTerm: '',
        }
        this.changeShelves = this.changeShelves.bind(this);
        this.searchBook = this.searchBook.bind(this);
    }


    componentWillMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ displayList : books });
        });
    }

    changeShelves(book, shelf) {
        BooksAPI.update(book, shelf).then(() => {
            BooksAPI.getAll().then((books) => {
                this.setState({ displayList : books });
            });
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
             <BookShelf
                 onUpdate={this.changeShelves}
                 books={this.state.displayList}
             />
          )}/>

          {/*search page*/}
          <Route path='/search' render={()=>(
              <div>
                 <SearchList
                     onSearch={this.searchBook}
                     searchTerm={this.state.searchTerm}
                     searchList={this.state.searchList}
                 />
              </div>
          )}/>


      </div>
    )
  }
}

export default App
