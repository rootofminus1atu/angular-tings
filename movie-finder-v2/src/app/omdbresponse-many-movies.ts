export interface IMDBResponseManyMovies {
    Search: MovieDetails[]
    totalResults: number
    Error: string
}

export interface MovieDetails {
    Title: string
    Year: string
    Director: string
    Poster: string
    Type: string
    Error: string
}