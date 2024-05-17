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
