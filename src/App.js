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

  getAllMyBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  componentDidMount = () => {
    this.getAllMyBooks()
  }

  addToShelf = (newBook) => {
    /*let bookList = this.state.books
    let index = bookList.length

    // Add new book to my book list
    bookList.push({ index: index, book: newBook })
    this.setState({ books: bookList})

    BooksAPI.update(newBook, newBook.shelfName)*/

  }

  moveToShelf = (newBook, shelfName) => {

    BooksAPI.update(newBook, shelfName)

    this.getAllMyBooks()
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
