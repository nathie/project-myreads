import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount = () => {

    let bookIndexed

    BooksAPI.getAll().then((books) => {
      bookIndexed = books.map((book, i) => ({index: i, book: book}));
      this.setState({ books: bookIndexed })
    })
  }

  addToShelf = (newBook) => {
    let bookList = this.state.books
    let index = bookList.length

    // Add new book to my book list
    bookList.push({ index: index, book: newBook })
    this.setState({ books: bookList})

    BooksAPI.update(newBook, newBook.shelfName)

  }

  moveToShelf = (index, shelfName) => {
    let book, bookList = this.state.books

    bookList.filter((item) => {
      if(item.index === index) {
        book = item.book
        book.shelf = shelfName
      }
      return false;
    })

    this.setState({ books: bookList })

    BooksAPI.update(book, shelfName)
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            onMoveToShelf={this.moveToShelf.bind(this)}
          />
        )}/>

        <Route exact path='/search' render={({ history }) => (
          <SearchBook
            addToShelf={this.addToShelf.bind(this)}
            onMoveToShelf={this.moveToShelf.bind(this)} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
