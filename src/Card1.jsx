import React, { useState } from 'react';
import './Card1.css';
import './Card1.js'; // Assuming this file contains your animation function

function Card1() {
  const [showSocial, setShowSocial] = useState(false);

  const toggleSocial = () => {
    setShowSocial(!showSocial);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card__border">
          <img
            src="https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg"
            alt="card image"
            className="card__img"
          />
        </div>

        <h3 className="card__name">Mia Miranda</h3>
        <span className="card__profession">Interpreter</span>

        <div className={`card__social ${showSocial ? 'animation' : ''}`} id="card-social">
          <div className="card__social-control">
            <div className="card__social-toggle" onClick={toggleSocial} id="card-toggle">
              <span className="ri--add-line"></span>
            </div>

            <span className="card__social-text">My social networks</span>

            <ul className="card__social-list">
              <a href="https://www.facebook.com/" target="_blank" className="card__social-link">
                <i className="ri-facebook-line"></i>
              </a>

              <a href="https://www.instagram.com/" target="_blank" className="card__social-link">
                <i className="ri-instagram-line"></i>
              </a>

              <a href="https://www.twitter.com/" target="_blank" className="card__social-link">
              <i class="ri-twitter-x-line"></i>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
