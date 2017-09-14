# My Reads

This project will allow you to keep track of books that you are reading, want to read or you have read already, categorizing them into these three shelves. Also, includes a Search functionality to let you choose other books from the library to make them part of one of the shelves too.

### General Behavior
#### Home Page:
There are three shelves named: "Currently Reading," "Want to Read" and "Read.".
The first time you visit the page, there will be a series of books assigned to those three shelves, which you can move around changing their shelve. The new location of your books is saved so if you reload the page they will remain in their new shelve.

#### Search:
You can search books by title or author. The list of displayed books will refresh with each key pressed. You can add each shown book to any shelve, and its new status will be registered.
On the search results, you can find titles you already have this allows you to relocate them.

## Installing and Starting
Installing and starting the project is simple. Use `npm install` to get all dependencies, then `npm start` will run the project locally.

## create-react-app
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Udacity React Fundamentals
This project is the final project for the first section of the [Udacity React Fundamentals Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019). It was originally forked from the starter code provided for us in the course and edited to include the required functionality.
