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

  // Add a book to a new shelf
  moveToShelf = (newBook, shelfName) => {

    BooksAPI.update(newBook, shelfName)

    this.getAllMyBooks()
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          /*
            Component that contain book shelves
          */
          <ListBooks
            books={this.state.books}
            onMoveToShelf={this.moveToShelf}
          />
        )}/>

        <Route exact path='/search' render={({ history }) => (
          /*
            Component that contain search section
          */
          <SearchBook
            onMoveToShelf={this.moveToShelf}
            booksOnShelves={this.state.books}  />
        )}/>
      </div>
    )
  }
}

export default BooksApp
