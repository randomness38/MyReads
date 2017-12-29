import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import BookList from "../BookList/BookList";
import escapeRegExp from 'escape-string-regexp'

class SearchList extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: '',
            displayBooks:[],
        }
        // this.handleTermChange = this.handleTermChange.bind(this);
        this.updateQuery = this.updateQuery.bind(this);
        // this.handleKeyPress = this.handleKeyPress.bind(this);
        this.search = this.search.bind(this);
    }

    updateQuery = (query) => {
        this.setState({query : query.trim() });

        let showingBooks
        if (this.state.query){
            const match = new RegExp(escapeRegExp(this.state.query),'i');
            showingBooks = this.props.searchList.filter((book) =>
                match.test(book.title))
        } else {
            showingBooks = this.props.searchList
        }

        this.setState({displayBooks: showingBooks})

    }

    search() {
        this.props.onSearch(this.state.query)

    }

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
        return(
            <div>

            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search" >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input id='SearchBar'
                               type="text"
                               placeholder="Search by title or author"
                               // onKeyPress={this.handleKeyPress}
                               value={this.state.query}
                               onChange={(event) => this.updateQuery(event.target.value)}
                               // defaultValue={this.props.searchTerm}
                        />
                        {JSON.stringify(this.state)}
                    </div>
                </div>

                <div className="search-books-results">
                    <BookList books={this.state.displayBooks}
                              onUpdate={this.props.onUpdate} />
                </div>
            </div>
            </div>
        )
    }
}

export default SearchList;
