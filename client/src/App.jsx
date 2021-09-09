import './app.scss';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const App = () => {
  const user = true;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/register" />}
        </Route>
        <Route path="/register">{!user ? <Register /> : <Home />}</Route>
        <Route path="/login">{!user ? <Login /> : <Home />}</Route>
        {user && (
          <>
            <Route path="/movies">
              <Home type="movie" />
            </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
          </>
        )}
        <Route path="*">
          <h1 style={{ color: 'red' }}>Error Page</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
