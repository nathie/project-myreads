import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks />
        )}/>

        <Route exact path='/search' render={({ history }) => (
          <SearchBook />
        )}/>
      </div>
    )
  }
}

export default BooksApp
