import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import BookList from "../BookList/BookList"
import * as BooksAPI from '../../util/BooksAPI'
import { Debounce } from 'react-throttle'

class SearchList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            searchBooks: [],
        }

        this.searchQuery = this.searchQuery.bind(this);

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
        }).catch( () => {
            this.setState({ searchBooks: [] })
        }); // BooksAPI.search
    }


    render() {
        return (
            <div>

                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/" className="close-search">Close</Link>
                        <div className="search-books-input-wrapper">
                            <Debounce time="400" handler="onChange">
                                {/*value={this.state.query} input 에 이 코드 쓰면 타이핑 안먹힘*/}
                                <input id='SearchBar'
                                       type="text"
                                       placeholder="Search by title or author"
                                       onChange={(event) => this.searchQuery(event.target.value)}/>
                            </Debounce>
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

SearchList.propTypes = {
    onUpdate: PropTypes.func.isRequired
}

export default SearchList;
