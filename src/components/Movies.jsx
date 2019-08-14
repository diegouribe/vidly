import React, { Component } from "react";
import {
  getMovies,
  deleteMovie
} from "../Starter Code/services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  /*
  Helper function to delete a movie from the state. 
  Used Arrow Function to be able to access the current object without 
  the need to bind it in the constructor.
  */
  handleDelete = movie => {
    deleteMovie(movie._id);
    this.setState({ movies: getMovies() });
  };

  render() {
    const { length: moviesCount } = this.state.movies;
    if (moviesCount === 0) return <p>There are no movies in the database.</p>;
    return (
      <React.Fragment>
        <p> Showing {moviesCount} movies in the database. </p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
