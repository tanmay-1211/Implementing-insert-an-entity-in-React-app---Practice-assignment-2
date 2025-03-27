import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <img src={movie.posterUrl} alt={movie.title} width="200" />
      <h2>{movie.title}</h2>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Release Year:</strong> {movie.releaseYear}</p>
      <p>{movie.synopsis}</p>
    </div>
  );
};

export default MovieCard;
