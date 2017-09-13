import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class SearchBook extends Component {
  static propTypes = {
    booksOnShelves: PropTypes.array.isRequired
  }

  state = {
    query: "",
    bookList: []
  }

  /*
    Finds the books on shelves that match the query
    to add them the 'shelf' property to keep/show their
    shelf location
  */
  mergeBookLists = (booksOnShelves, searchBooks) => {

    booksOnShelves.map((shelfBook) => {

      searchBooks.map((searchBook) => {
        if(shelfBook.id === searchBook.id)
          searchBook.shelf = shelfBook.shelf
        return false
      })
      return false
    })

    return searchBooks;
  }

  /*
    Updates results view.

    query: Search input text value
    booklist: List of books that match the query
  */
  updateSearchState = (query, bookList) => {
    let searchResults = null;

    if (bookList.error !== undefined &&
        bookList.error === "empty query") {
      this.setState({ query: query, bookList: [] });

    } else if (bookList.error !== undefined) {
      console.error("API Error: ", bookList.error)

    } else {
      searchResults = this.mergeBookLists(this.props.booksOnShelves, bookList)
      this.setState({ query: query, bookList: searchResults });
    }
  }

  // Creates new query after a key pressed
  updateQuery = (query) => {
    query.length ?
      BooksAPI.search(query).then(this.updateSearchState.bind(this, query)) :
      this.setState({ bookList: [] })
  }

  updateMainBookList = (newBook, shelfName) => {

    // Add Shelf property to the book object
    newBook.shelf = shelfName

    BooksAPI.get(newBook.id).then((book) => {
      BooksAPI.update(book, shelfName)
    })
  }

  render() {

    const bookList = this.state.bookList

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
            className="close-search"
          >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {bookList.length ? (
            <BookShelf
              bookList={ bookList }
              onMoveToShelf={this.props.onMoveToShelf}
              updateMainBookList={ this.updateMainBookList.bind(this) }
            />
          ) : (
            <h4>No results</h4>
          )}
        </div>
      </div>
    )
  }
}

export default SearchBook;
