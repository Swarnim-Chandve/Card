import React, { useState } from 'react';
import './Card1.css';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";


function Card1(props) {
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

        <h3 className="card__name">{props.name}</h3>
        <span className="card__profession">{props.role}</span>

        <div className={`card__social ${showSocial ? 'animation' : ''}`} id="card-social">
          <div className="card__social-control">
            <div className="card__social-toggle" onClick={toggleSocial} id="card-toggle">
              <span className="ri--add-line"></span>
            </div>

            <span className="card__social-text">Social Networks</span>

            <ul className="card__social-list">
              <a href={props.Linkedin} target="_blank" className="card__social-link">
              <FaLinkedin  />
              </a>

              <a href={props.Instagram} target="_blank" className="card__social-link">
              <FaSquareInstagram />
              </a>

              <a href={props.Twitter} target="_blank" className="card__social-link">
              <FaSquareXTwitter />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
