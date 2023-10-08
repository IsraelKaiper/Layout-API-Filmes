import React, { useEffect, useState } from "react";
import { Container, Movie, MovieList, Btn } from "./style";
import { Link } from "react-router-dom";
import Logo from "./logo";

import MovieCarousel from "../../components/Carousel";
import SearchBar from "../../components/SearchBar"; 

function Home() {
  const imagePath = "https://image.tmdb.org/t/p/w500";

  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const KEY = process.env.REACT_APP_KEY;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [KEY]);

  const handleSearch = (query) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=pt-BR&query=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.results);
      });
  };

  return (
    <Container>
      <Logo />
      <SearchBar onSearch={handleSearch} />
      <MovieCarousel movies={movies} />
      <MovieList>
        {(searchResults.length > 0 ? searchResults : movies).map((movie) => (
          <Movie key={movie.id}>
            <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
            <span>{movie.title}</span>
            <Link to={`/${movie.id}`}>
              <Btn>Details</Btn>
            </Link>
          </Movie>
        ))}
      </MovieList>
    </Container>
  );
}

export default Home;
