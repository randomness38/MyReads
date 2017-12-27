import React, { Component } from 'react';
import BookList from "../BookList/BookList";
import {Link} from 'react-router-dom'
class BookShelf extends Component {
    state = {
        books:[],
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


                    <BookList
                        books={ this.props.books.filter(book => book.shelf === "currentlyReading") }
                        title='Currently Reading'
                        onUpdate={this.props.changeShelves}
                    />

                    <BookList
                        books={ this.props.books.filter(book => book.shelf === "wantToRead") }
                        title='WantToRead'
                        onUpdate={this.props.changeShelves}
                    />

                    <BookList
                        books={ this.props.books.filter(book => book.shelf === "read") }
                        title='Read'
                        onUpdate={this.props.changeShelves}
                    />




                </div>
            </div>
        )
    }
}

export default BookShelf
