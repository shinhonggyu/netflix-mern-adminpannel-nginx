import { ArrowBackOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './watch.scss';
import { useLocation } from 'react-router-dom';

const Watch = () => {
  const location = useLocation();
  const movie = location.movie;
  console.log(movie);

  return (
    <div className="watch">
      <Link to="/" className="link">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={movie.video} />
    </div>
  );
};

export default Watch;
