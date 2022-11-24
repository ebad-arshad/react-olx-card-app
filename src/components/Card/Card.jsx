import React, { useState } from 'react';
import './Card.css';
import { BsFillSuitHeartFill, BsSuitHeart } from 'react-icons/bs';

const Card = ({ title, price, location, image, feature }) => {

  const [toggleHeart, setToggleHeart] = useState(false);


  return (
    <div className='Card'>
      <div className="cardImage">
        <img src={image} alt="card image" />
        <div className={feature ? 'featured_text' : 'hidden'}>FEATURED</div>
      </div>
      <div className="desc">
        <div className={feature ? 'featured_line' : 'hidden'}></div>
        <div>
          <div className="title">
            <div className="text">{title}</div>
            <div className="iconHeart">
              {
                toggleHeart ? <BsFillSuitHeartFill onClick={() => setToggleHeart(!toggleHeart)} />
                  :
                  <BsSuitHeart onClick={() => setToggleHeart(!toggleHeart)} />
              }
            </div>
          </div>
          <div className="price">RS {price}</div>
        </div>
        <div className="location">{location}</div>

      </div>
    </div >
  )
}

export default Card;