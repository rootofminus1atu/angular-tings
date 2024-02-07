import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const movies: any[] = [
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

  return (
    <div>
      <ul>
        {
          movies.map((movie) => <li>
            {movie.title} ({movie.year}) - Directed by {movie.director}
          </li>)
        }
      </ul>
    </div>
  )
}

export default App
