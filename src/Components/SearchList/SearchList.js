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
            // searchList:[]
        }
        // this.handleTermChange = this.handleTermChange.bind(this);
        this.searchQuery = this.searchQuery.bind(this);
        // this.handleKeyPress = this.handleKeyPress.bind(this);
        // this.search = this.search.bind(this);
    }

    searchQuery = (query) => {
        this.setState({query: query});
        BooksAPI.search(query).then((books) => {
            if (books) {
                const searchBooks = books
                BooksAPI.getAll().then((userBooks) => {
                    searchBooks.map((searchBook) => {
                        const shelfBook = userBooks.find(userBook => userBook.id === searchBook.id)
                        if (shelfBook)
                            searchBooks.shelf = shelfBook.shelf
                    })
                })
                this.setState({ searchBooks });
            } // if
        }); // BooksAPI.search
    }

// let showingBooks
// if (this.state.query) {
//     const match = new RegExp(escapeRegExp(this.state.query), 'i');
//     showingBooks = this.state.searchList.find((book) =>
//         match.test(book.title))
// } else {
//     showingBooks = this.state.searchList
// }
//
// this.setState({displayBooks:showingBooks})
// throw 'error'
//     .catch(function(e) {
//     console.log(e);
// })

// searchQuery = (query) => {
//     this.setState({ query: query.trim()});
//     if (query.length > 0) {
//         BooksAPI.search(query, 20).then((searchedBooks) => {
//             const displayBooks = searchedBooks && !searchedBooks.hasOwnProperty("error") ? searchedBooks : [];
//             // displayBokks 는 에러가 없고 검색결과가 있을때 저장되는 북 리스트 -> 버그 거르기 코드 완료
//             BooksAPI.getAll().then((books) => {
//                 for (const displayBook of displayBooks) {
//                     const shelfBook = books.find(book => book.id === displayBook.id)
//                     if (shelfBook)
//                         displayBook.shelf = shelfBook.shelf;
//                 }
//                 this.setState({ displayBooks });
//             });
//         });
//     }
//
// }

// search() {
//     this.props.onSearch(this.state.query)
//
// }

//
// handleTermChange(event) {
//     this.setState({
//         query: event.target.value
//     });
// }

//
// handleKeyPress(event) {
//     if (event.key === 'Enter') this.search();
//     }


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
