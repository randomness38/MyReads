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
        }
        this.changeShelves = this.changeShelves.bind(this);
    }


    componentDidMount() {
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
                     onUpdate={this.changeShelves}
                 />
              </div>
          )}/>


      </div>
    )
  }
}

export default App
