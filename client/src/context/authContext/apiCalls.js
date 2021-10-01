import axios from 'axios';
import { loginStart, loginSuccess, loginFailure } from './AuthAction';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
