import {
  getMoviesStart,
  getMoviesSuccess,
  getMoviesFailure,
} from './MovieActions';
import axios from 'axios';

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get('/movies', {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (error) {
    dispatch(getMoviesFailure());
  }
};
