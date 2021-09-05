import { ArrowBackOutlined } from '@material-ui/icons';
import './watch.scss';

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        muted
        autoPlay
        progress
        controls
        src="https://vod-progressive.akamaized.net/exp=1630882899~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4085%2F20%2F520427407%2F2427861506.mp4~hmac=98244cc30771ec179fe04411053b80611a658f9da770fe3dc647653b3aec736c/vimeo-prod-skyfire-std-us/01/4085/20/520427407/2427861506.mp4?filename=Flowers+-+66823.mp4"
      />
    </div>
  );
};

export default Watch;
