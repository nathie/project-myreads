import React, { Component } from 'react';

class BookShelf extends Component {
  render() {

    let { bookList, moveToShelf } = this.props

    return (
      <ol className="books-grid">
        {bookList.map((item) => (
          <li key={item.book.id}>
            <div className="book">
              <div className="book-top">
                <img alt="Book Cover" className="book-cover" src={ item.book.imageLinks.thumbnail }/>
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
              <div className="book-title">{ item.book.title }</div>
              {item.book.authors.map((author, index) => (
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
