import React, { Component } from 'react';
import BookList from "../BookList/BookList";
import {Link} from 'react-router-dom'
class BookShelf extends Component {


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


                    <BookList
                        books={ this.props.books.filter(book => book.shelf === "currentlyReading") }
                        title='Currently Reading'
                        onUpdate={this.props.onUpdate}
                    />

                    <BookList
                        books={ this.props.books.filter(book => book.shelf === "wantToRead") }
                        title='WantToRead'
                        onUpdate={this.props.onUpdate}
                    />

                    <BookList
                        books={ this.props.books.filter(book => book.shelf === "read") }
                        title='Read'
                        onUpdate={this.props.onUpdate}
                    />




                </div>
            </div>
        )
    }
}

export default BookShelf
