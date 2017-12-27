import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf';

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
                    <Bookshelf books={this.props.searchList}/>
                </div>
            </div>
            </div>
        )
    }
}

export default SearchList;
