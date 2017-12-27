import React , { Component } from 'react'
import Book from '../Book/Book'


class BookList extends Component {
    render() {
        return(
                <div className="books-grid">
                    {this.props.books.map( book => (
                        <Book
                            book={book}
                            key={book.id}
                        />
                    ))
                    }
                </div>
        )
    }
}

export default BookList;
