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
            onMoveToShelf={this.moveToShelf.bind(this)}
            booksOnShelves={this.state.books}  />
        )}/>
      </div>
    )
  }
}

export default BooksApp
