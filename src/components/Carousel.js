import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./Carousel.css"; 

const MovieCarousel = ({ movies }) => {
  return (
    <Carousel>
      {movies.map((movie) => (
        <Carousel.Item key={movie.id}>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <Carousel.Caption>
            <h3>{movie.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MovieCarousel;
