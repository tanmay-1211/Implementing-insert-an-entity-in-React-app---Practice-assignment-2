import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddMovie from "./components/AddMovie";

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      director: "Christopher Nolan",
      genre: "Science Fiction",
      releaseYear: 2010,
      synopsis: "A thief who steals corporate secrets through dream-sharing technology.",
      posterUrl: "https://image.tmdb.org/t/p/original/xymM5aW6MDcH5AR9I3CamSegJd6.jpg",
    },
  ]);

  const addMovie = (newMovie) => {
    setMovies([...movies, { id: movies.length + 1, ...newMovie }]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard movies={movies} />} />
        <Route path="/add-movie" element={<AddMovie addMovie={addMovie} />} />
      </Routes>
    </Router>
  );
};

export default App;
