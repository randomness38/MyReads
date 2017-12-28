import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import BookList from "../BookList/BookList";

class SearchList extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: '',
        }
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.search = this.search.bind(this);
    }



    search() {
        this.props.onSearch(this.state.query)

    }


    handleTermChange(event) {
        this.setState({
            query: event.target.value
        });
    }


    handleKeyPress(event) {
        if (event.key === 'Enter') this.search();
        }


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
                               onChange={this.handleTermChange}
                               onKeyPress={this.handleKeyPress}
                               defaultValue={this.props.searchTerm} />
                    </div>
                </div>
                <div className="search-books-results">
                    <BookList books={this.props.searchList}
                              onUpdate={this.props.onUpdate} />
                </div>
            </div>
            </div>
        )
    }
}

export default SearchList;
