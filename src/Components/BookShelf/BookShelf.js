import React, { Component } from 'react';
import BookList from "../BookList/BookList";
import {Link} from 'react-router-dom'
class BookShelf extends Component {
    state = {
        currentList : [],
        wantToList: [],
        readList:[]
    }

    render(){
        return (
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

                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <BookList books={this.state.currentList}/>
                        </div>
                    </div>

                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <BookList books={this.state.wantToList}/>
                        </div>
                    </div>

                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <BookList books={this.state.readList}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookShelf
