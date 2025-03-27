import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = ({ addMovie }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    genre: "",
    releaseYear: "",
    synopsis: "",
    posterUrl: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(formData);
    navigate("/");
  };

  return (
    <div>
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
        <input type="text" name="director" placeholder="Director" onChange={handleChange} required />
        <input type="text" name="genre" placeholder="Genre" onChange={handleChange} required />
        <input type="number" name="releaseYear" placeholder="Release Year" onChange={handleChange} required />
        <textarea name="synopsis" placeholder="Synopsis" onChange={handleChange} required></textarea>
        <input type="url" name="posterUrl" placeholder="Poster URL" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => navigate("/")}>Cancel</button>
    </div>
  );
};

export default AddMovie;
