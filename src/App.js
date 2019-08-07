import React from 'react';
import './App.css';
import { getMovies, deleteMovie } from './Starter Code/services/fakeMovieService';

function App() {

  function deleteMovieHelper(_id) {
    deleteMovie(_id);
    console.log(getMovies())
  }

  function populateTable() {
   return getMovies().map(movie => 
      <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.id}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td> <button type="button" className="btn btn-danger" onClick={() => deleteMovieHelper(movie._id)}>Delete</button> </td>
        </tr>
    )
  }

  return (
    <main className="container">
      <p> Showing {} movies in the database. </p>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Genre</th>
      <th scope="col">Stock</th>
      <th scope="col">Rate</th>
      <th scope="col"></th>
    </tr>
  </thead>
    <tbody>
      {populateTable()}
    </tbody>
      </table>
      </main>
  );
}

export default App;
