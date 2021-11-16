import React, {useState} from 'react';
import { moviesData } from './Data';
import './App.css';
import MovieList from './Components/MovieList';
import Search from './Components/Search';
import AddMovie from './Components/AddMovie';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchTitle, setSearchTitle]= useState("")
  const [searchRating, setSearchRating]= useState(0)

  const handleMovie = (newMovie)=>{
    setMovies([...movies,newMovie])
  }
console.log(movies)
  return (
   <div>
     <Search setSearchTitle={setSearchTitle} setSearchRating={setSearchRating} />
     <AddMovie handleMovie={handleMovie} />
     <MovieList movies={movies} searchTitle={searchTitle} searchRating={searchRating} />
   </div>
  );
}

export default App;
