import React , { Component } from 'react'
import Book from '../Book/Book'


class BookList extends Component {
    render() {
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                <div className="books-grid">
                    {this.props.books.map( book => (
                        <Book
                            book={book}
                            key={book.id}
                            onUpdate={this.props.changeShelves}
                        />
                    ))
                    }
                </div>
                </div>
            </div>
        )
    }
}

export default BookList;
