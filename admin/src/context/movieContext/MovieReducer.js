const MovieReducer = (state, action) => {
  // GET MOVIES
  if (action.type === 'GET_MOVIES_START') {
    return {
      movies: [],
      isFetching: true,
      error: false,
    };
  }

  if (action.type === 'GET_MOVIES_SUCCESS') {
    return {
      movies: action.payload,
      isFetching: false,
      error: false,
    };
  }

  if (action.type === 'GET_MOVIES_FAILURE') {
    return {
      movies: [],
      isFetching: false,
      error: true,
    };
  }

  // DELETE MOVIE
  if (action.type === 'DELETE_MOVIE_START') {
    return {
      ...state,
      isFetching: true,
      error: false,
    };
  }

  if (action.type === 'DELETE_MOVIE_SUCCESS') {
    return {
      movies: state.movies.filter((movie) => movie._id !== action.payload),
      isFetching: false,
      error: false,
    };
  }

  if (action.type === 'DELETE_MOVIE_FAILURE') {
    return {
      ...state,
      isFetching: false,
      error: true,
    };
  }

  // CREATE MOVIE
  if (action.type === 'CREATE_MOVIE_START') {
    return {
      ...state,
      isFetching: true,
      error: false,
    };
  }

  if (action.type === 'CREATE_MOVIE_SUCCESS') {
    return {
      movies: [...state.movies, action.payload],
      isFetching: false,
      error: false,
    };
  }

  if (action.type === 'CREATE_MOVIE_FAILURE') {
    return {
      ...state,
      isFetching: false,
      error: true,
    };
  }

  // UPDATE MOVIE
  if (action.type === 'UPDATE_MOVIE_START') {
    return {
      ...state,
      isFetching: true,
      error: false,
    };
  }

  if (action.type === 'UPDATE_MOVIE_SUCCESS') {
    return {
      movies: state.movies.map(
        (movie) => movie._id === action.payload._id && action.payload
      ),
      isFetching: false,
      error: false,
    };
  }

  if (action.type === 'UPDATE_MOVIE_FAILURE') {
    return {
      ...state,
      isFetching: false,
      error: true,
    };
  }

  return { ...state };
};

export default MovieReducer;
