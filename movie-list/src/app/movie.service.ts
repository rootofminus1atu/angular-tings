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
}
