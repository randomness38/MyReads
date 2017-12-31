import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BookList from "../BookList/BookList";
import * as BooksAPI from '../../util/BooksAPI'

class SearchList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            searchBooks: [],
        }

        // this.handleTermChange = this.handleTermChange.bind(this);
        this.searchQuery = this.searchQuery.bind(this);
        // this.handleKeyPress = this.handleKeyPress.bind(this);
        // this.search = this.search.bind(this);
    }

    searchQuery = (query) => {
        this.setState({query: query});
        BooksAPI.search(query, 20).then(books => {
            if (books) {
                const searchBooks = books && !books.hasOwnProperty("error") ? books : [];
                BooksAPI.getAll().then((userBooks) => {
                    searchBooks.map(searchBook => {
                        const shelfBook = userBooks.find(userBook => userBook.id === searchBook.id)
                        if (shelfBook)
                            searchBook.shelf = shelfBook.shelf
                    })
                    this.setState({ searchBooks });
                })

            } // if
        }).catch(err => {
            console.error(err);
        }); // BooksAPI.search
    }

    render() {
        return (
            <div>

                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/" className="close-search">Close</Link>
                        <div className="search-books-input-wrapper">
                            <input id='SearchBar'
                                   type="text"
                                   placeholder="Search by title or author"
                                // onKeyPress={this.handleKeyPress}
                                   value={this.state.query}
                                   onChange={(event) => this.searchQuery(event.target.value)}
                                // defaultValue={this.props.searchTerm}
                            />
                        </div>
                    </div>

                    <div className="search-books-results">
                        <BookList books={this.state.searchBooks}
                                  onUpdate={this.props.onUpdate}/>
                    </div>
                </div>
            </div>
        )
    }
}


export default SearchList;
