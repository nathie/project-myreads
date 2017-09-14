import React, { Component } from 'react'
import PropTypes from 'prop-types'

/*--------

Creates the list of books of a shelf.

--------*/
class BookShelf extends Component {

  /*
    [Required] bookList: List of books of a shelf
  */
  static propTypes = {
    bookList: PropTypes.array.isRequired
  }

  // Returns the list of authors of a book
  renderAuthorList = (authors) => {
    if (authors === undefined) {
      return (<p>This book has no authors</p>)
    }
    else {
      return authors.map((author, index) => (
          <div key={index} className="book-authors">{ author }</div>
      ))
    }
  }

  render() {

    const { bookList, onMoveToShelf, updateMainBookList } = this.props

    return (

      <ol className="books-grid">
        {bookList.map((book) => (
          <li key={book.id ? book.id : ""}>
            <div className="book">
              <div className="book-top">
                <img
                  alt="Book Cover"
                  className="book-cover"
                  src={ book.imageLinks ?
                    book.imageLinks.thumbnail :
                    "https://books.google.com/googlebooks/images/no_cover_thumb.gif"
                  }
                />
                <div className="book-shelf-changer">
                  <select
                    defaultValue={book.hasOwnProperty('shelf')? book.shelf: 'disabled'}
                    onChange={(event) => {

                      /*
                       If a book has the 'shelf' property,
                       means that it is assigned to a shelf
                       and just needs to be relocated

                       Otherwise, the book has to be added to
                       the list of displayed books.
                      */
                      if(book.hasOwnProperty('shelf'))
                        // Add a owned book to a new shelf
                        onMoveToShelf(book, event.target.value)
                      else {
                        // Add new book to a shelf
                        updateMainBookList(book, event.target.value)
                      }
                    }}>
                    <option value="disabled" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{ book.title }</div>
              {this.renderAuthorList(book.authors)}
            </div>
          </li>
        ))}
      </ol>
    );
  }
}

export default BookShelf;
