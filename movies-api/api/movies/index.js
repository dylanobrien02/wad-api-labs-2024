import { getUpcomingMovies, getGenres, getPopularMovies, getTopRatedMovies, getTrendingMovies } from '../tmdb-api';
import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import authenticate from '../../authenticate'; // Import the authenticate middleware

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const movies = await movieModel.find();
    res.status(200).json(movies);
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

// New route to get genres
router.get('/tmdb/genres', asyncHandler(async (req, res) => {
    const genres = await getGenres();
    res.status(200).json(genres);
}));

// Route to get popular movies
router.get('/tmdb/popular', async (req, res) => {
    try {
      const movies = await getPopularMovies();
      res.status(200).json(movies);
    } catch (error) {
      next(error);
    }
  });

  // Route to get Top-Rated Movies
  router.get('/tmdb/top-rated', async (req, res) => {
    try {
      const movies = await getTopRatedMovies();
      res.status(200).json(movies);
    } catch (error) {
      next(error);
    }
  });

  // Route to get Trending Movies
  router.get('/tmdb/trending', async (req, res) => {
    try {
      const movies = await getTrendingMovies();
      res.status(200).json(movies);
    } catch (error) {
      next(error);
    }
  });

export default router;