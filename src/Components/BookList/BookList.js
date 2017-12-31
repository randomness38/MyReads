import React from 'react'
import PropTypes from 'prop-types'
import Book from '../Book/Book'


function BookList (props) {

        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{props.title}</h2>
                <div className="bookshelf-books">
                <div className="books-grid">
                    {props.books.map(book=> (
                        <Book
                            book={book}
                            key={book.id}
                            onUpdate={props.onUpdate}
                        />
                    ))
                    }
                </div>
                </div>
            </div>
        )
}


BookList.propTypes = {
    books: PropTypes.array.isRequired,
    onUpdate: PropTypes.func.isRequired
}


export default BookList;
