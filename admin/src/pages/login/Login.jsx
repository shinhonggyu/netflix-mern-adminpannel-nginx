import { useContext, useState } from 'react';
import './login.css';
import { AuthContext } from '../../context/authContext/AuthContext';
import { login } from '../../context/authContext/apiCalls';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isFetching, error, dispatch } = useContext(AuthContext);

  const loginHandler = (e) => {
    e.preventDefault();
    const userCredential = {
      email,
      password,
    };

    login(userCredential, dispatch);
  };

  return (
    <div className="login">
      <form className="loginForm">
        <input
          type="email"
          placeholder="email"
          className="loginInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="loginInput"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="loginButton"
          onClick={loginHandler}
          disabled={isFetching}
        >
          Login
        </button>
        {error && <span className="loginError">Something went wrong!!</span>}
      </form>
    </div>
  );
};

export default Login;
