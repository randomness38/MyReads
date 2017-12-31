import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from '../Book/Book'


class BookList extends Component{
render(){
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                <div className="books-grid">
                    {this.props.books.map( book => (
                        <Book
                            book={book}
                            key={book.id}
                            onUpdate={this.props.onUpdate}
                        />
                    ))
                    }
                </div>
                </div>
            </div>
        )


}
}
BookList.propTypes = {
    books: PropTypes.array.isRequired,
    onUpdate: PropTypes.func.isRequired
}


export default BookList;
