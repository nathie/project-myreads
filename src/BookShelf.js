import React, { Component } from 'react';

class BookShelf extends Component {
  render() {

    let showingBooks = this.props.bookList

    return (
      <ol className="books-grid">
        {showingBooks.map((book) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <img alt="Book Cover" className="book-cover" src={ book.imageLinks.thumbnail }/>
                <div className="book-shelf-changer">
                  <select>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{ book.title }</div>
              {book.authors.map((author, index) => (
                <div key={index} className="book-authors">{ author }</div>
              ))}
            </div>
          </li>
        ))}
      </ol>
    );
  }
}

export default BookShelf;
