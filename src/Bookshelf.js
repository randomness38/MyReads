import React , { Component } from 'react'
import Book from './Book'



class Bookshelf extends Component {

    setupBooks() {
        const books = this.props.books.map( (b) => {
           return(
            <li key={b.id}>
            <Book
            book={b}
            selfchange={this.props.shelfchange}
            />
            </li>
           )
        });
        return books;
    }

    render() {
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.setupBooks()}
                    </ol>
                </div>
            </div>

        )
    }
}

export default Bookshelf;
