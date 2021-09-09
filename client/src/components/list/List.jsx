import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@material-ui/icons';
import './list.scss';
import ListItem from '../listItem/ListItem';
import { useRef, useState } from 'react';

const List = ({ list }) => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    // return first
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === 'right' && slideNumber < 4) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          style={{ display: !isMoved && 'none' }}
          className="sliderArrow left"
          onClick={() => handleClick('left')}
        />
        <div className="container" ref={listRef}>
          {list.content.map((item, index) => (
            <ListItem item={item} index={index} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  );
};

export default List;
