import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import './SearchList.css'

class SearchList extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>

            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search" >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" name="term" placeholder="Search by title or author"/>
                    </div>
                </div>

                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
            </div>
            </div>
        )
    }
}

export default SearchList;
