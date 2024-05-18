export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=b450753e2f737d3e34742515c8976219&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };