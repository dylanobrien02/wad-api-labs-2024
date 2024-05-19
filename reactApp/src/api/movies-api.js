
export const getMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

  export const login = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const signup = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

const API_BASE_URL = 'http://localhost:8080/api';

export const getPopularMovies = async () => {
  const response = await fetch(`${API_BASE_URL}/movies/tmdb/popular`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  });
  if (!response.ok) {
    throw new Error('Failed to fetch popular movies');
  }
  return response.json();
};

export const getUpcomingMovies = async () => {
  const response = await fetch(`${API_BASE_URL}/movies/tmdb/upcoming`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  });
  if (!response.ok) {
    throw new Error('Failed to fetch upcoming movies');
  }
  return response.json();
};

export const getTrendingMovies = async () => {
  const response = await fetch(`${API_BASE_URL}/movies/tmdb/trending`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  });
  if (!response.ok) {
    throw new Error('Failed to fetch trending movies');
  }
  return response.json();
};



