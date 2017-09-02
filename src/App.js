import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'

class BooksApp extends React.Component {
  state = {
    books: [],
    booksWithIndex: []
  }

  componentDidMount() {

    let bookIndexed

    BooksAPI.getAll().then((books) => {
      this.setState({ books })

      bookIndexed = books.map((book, i) => ({index: i, book: book}));
      this.setState({ booksWithIndex: bookIndexed })
    })
  }



  moveToShelf = () => {
    //this.setState({ books[bookIndex].shelf = shelf })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.booksWithIndex}
            onMoveToShelf={this.moveToShelf.bind(this)}
          />
        )}/>

        <Route exact path='/search' render={({ history }) => (
          <SearchBook />
        )}/>
      </div>
    )
  }
}

export default BooksApp
