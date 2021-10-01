import './navbar.scss';
import { Search, Notifications, ArrowDropDown } from '@material-ui/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../context/authContext/AuthAction';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  // window.addEventListener('scroll', () => {
  //   if (window.pageYOffset > 0) {
  //     setIsScrolled(true);
  //   } else {
  //     setIsScrolled(false);
  //   }
  // });

  return (
    <div className={isScrolled ? 'navbar active' : 'navbar'}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="netflix logo"
          />
          <Link to="/" className="link">
            <span className="active">HomePage</span>
          </Link>
          <Link to="/series" className="link">
            <span className="active">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="active">Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrrLGoDGT5sZR3ksH7ydvQ9Y0UICZ8-As8GQ&usqp=CAU"
            alt=""
          />
          <div className="dropdown">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={() => dispatch(logout())}>
                <Link className="link" to="/register">
                  Logout
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
