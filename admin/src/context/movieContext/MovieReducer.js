const MovieReducer = (state, action) => {
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

  return { ...state };
};

export default MovieReducer;
