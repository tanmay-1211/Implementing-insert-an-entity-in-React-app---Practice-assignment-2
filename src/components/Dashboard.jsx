import React from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";

const Dashboard = ({ movies }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Movie Collection</h1>
      <button onClick={() => navigate("/add-movie")}>Add Movie</button>
      <div>
        {movies.length === 0 ? <p>No movies available</p> : 
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Dashboard;
