import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

/*--------

Displays the list of books categorized by shelve.

--------*/
class ListBooks extends Component {

  /*
    [Required]
    - books: Array of books to show on shelves
    - onMoveToShelf: Function called when a book's state changes
  */
  static propTypes = {
    books: PropTypes.array.isRequired,
    onMoveToShelf: PropTypes.func.isRequired
  }

  filterByShelf = (shelfName) => {
    return (acc, book) => {
      if(book.shelf === shelfName) {
        acc.push(book)
      }
      return acc
    }
  }

  render() {

    const { books, onMoveToShelf } = this.props
    let currentBooks, wantBooks, readBooks

    // Separate the list of books by shelve
    currentBooks = books.reduce(this.filterByShelf('currentlyReading'), [])
    wantBooks = books.reduce(this.filterByShelf('wantToRead'), [])
    readBooks = books.reduce(this.filterByShelf('read'), [])

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <BookShelf
                  bookList={ currentBooks }
                  onMoveToShelf={ onMoveToShelf }/>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <BookShelf
                  bookList={ wantBooks }
                  onMoveToShelf={ onMoveToShelf } />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <BookShelf
                  bookList={ readBooks }
                  onMoveToShelf={ onMoveToShelf } />
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks;