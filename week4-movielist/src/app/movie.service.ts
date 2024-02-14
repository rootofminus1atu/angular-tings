import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movies: Movie[] = [
    {
      id: 1,
      title: "The movie",
      year: '1984',
      director: "That guy"
    },
    {
      id: 2,
      title: "Another movie",
      year: '1999',
      director: "Somebody"
    },
  ]

  getMovies() {
    return this.movies
  }

  addMovie(movieTitle: string, directorName: string, year: string) {
    console.log(movieTitle, directorName, year)

    this.movies.push({
      id: this.movies.length + 1,
      title: movieTitle,
      year: year,
      director: directorName
    })
  }
}
