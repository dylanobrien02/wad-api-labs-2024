import React, { useEffect, useState } from 'react';
import { getUpcomingMovies } from '../api/movies-api'; // Corrected the function name

const UpcomingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const data = await getUpcomingMovies();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching upcoming movies:', error);
      }
    };

    fetchUpcomingMovies();
  }, []);

  return (
    <div>
      <h1>Upcoming Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingMovies;
