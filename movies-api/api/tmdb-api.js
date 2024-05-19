import fetch from 'node-fetch';

const API_KEY = 'b450753e2f737d3e34742515c8976219';

export const getUpcomingMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message);
        }

        return await response.json();
    } catch (error) {
        console.error('Failed to fetch upcoming movies:', error.message);
        throw error;
    }
};

// Function to get genres from TMDB
export const getGenres = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        console.error('Failed to fetch genres:', error.message);
        throw error;
    }
};
//Function to get Popular Movies
export const getPopularMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
  
      if (!response.ok) {
        throw new Error('Failed to fetch popular movies');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error fetching popular movies:', error);
      throw error;
    }
  };
  
  //Function to get Top-Rated Movies
  export const getTopRatedMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
  
      if (!response.ok) {
        throw new Error('Failed to fetch top-rated movies');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error fetching top-rated movies:', error);
      throw error;
    }
  };

  //Function to get Trending Movies
export const getTrendingMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US&page=1`
      );
  
      if (!response.ok) {
        throw new Error('Failed to fetch trending movies');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error fetching trending movies:', error);
      throw error;
    }
  };
  