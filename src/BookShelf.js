import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelf extends Component {
  static propTypes = {
    bookList: PropTypes.array.isRequired,
    onMoveToShelf: PropTypes.func.isRequired
  }

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

    let { bookList, onMoveToShelf } = this.props

    return (
      <ol className="books-grid">
        {bookList.map((item) => (
          <li key={item.book.id}>
            <div className="book">
              <div className="book-top">
                <img alt="Book Cover" className="book-cover" src={ item.book.imageLinks.thumbnail }/>
                <div className="book-shelf-changer">
                  <select
                    defaultValue={item.book.shelf}
                    onChange={(event) => {
                      onMoveToShelf(item.index, event.target.value)
                    }}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{ item.book.title }</div>
              {this.renderAuthorList(item.book.authors)}
            </div>
          </li>
        ))}
      </ol>
    );
  }
}

export default BookShelf;
