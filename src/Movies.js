import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./components/MovieCard";
import Organizer from "./components/Organizer";
//a4830a92

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${title}&apikey=a4830a92`
    );
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies(`avengers`);
  }, []);

  // const movie1 = {
  //   Title: "Avengers: Age of Ultron",
  //   Year: "2015",
  //   imdbID: "tt2395427",
  //   Type: "movie",
  //   Poster:
  //     "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
  // };

  return (
    <div>
      <div className="search">
        <input
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      <div className="flex">
      {movies?.length > 0 ? (
        <div className="container">
          {/* <div className="movie">
          <div>
          <p>{movie1.Year}</p>
          </div>
          <div>
          <img src={movie1.Poster !== 'N/A'? movie1.Poster: 'https://via.placeholder.com/400'} alt={movie1.Title}/>
          </div>
          <div>
          <span>{movie1.Type}</span>
          <h3>{movie1.Title}</h3>
          </div>
        </div> */}
          {movies.map((movie) => (
            <MovieCard movie1={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
      <Organizer/>
      </div>
    </div>
  );
}
