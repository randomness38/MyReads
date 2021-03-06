import React from 'react';
import BookList from "../BookList/BookList";
import {Link} from 'react-router-dom'

function BookShelf (props) {
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
                        books={ props.books.filter(book => book.shelf === "currentlyReading") }
                        title='Currently Reading'
                        onUpdate={props.onUpdate}
                    />

                    <BookList
                        books={ props.books.filter(book => book.shelf === "wantToRead") }
                        title='WantToRead'
                        onUpdate={props.onUpdate}
                    />

                    <BookList
                        books={ props.books.filter(book => book.shelf === "read") }
                        title='Read'
                        onUpdate={props.onUpdate}
                    />

                </div>
            </div>
        )
    }

export default BookShelf
