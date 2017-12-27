import React from 'react';
import SearchList from './SearchList';
import ListBooks from './ListBooks';
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';
import './App.css'


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            books : [],
            searchList :[],
            searchTerm : '',
        }
        this.searchBook = this.searchBook.bind(this);
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
             <ListBooks/>
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
