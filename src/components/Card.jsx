import React from "react";
import "./Card.css"
import Head from "./Head.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Card() {
  return (
    <>
      <div className="card">
        <img src={Head} alt="" className="img" draggable={false} />
        <div className="container">
          <h1 className="title">Isha Patade</h1>
          <div className="ruler"></div>
          <p className="pos">Technical Head</p>
          <p className="quote">You Only Live Once</p>
          <ul className="sizes-box">
            <li><FontAwesomeIcon icon={faLinkedin} /></li>
            <li><FontAwesomeIcon icon={faFacebook} /></li>
            <li><FontAwesomeIcon icon={faInstagram} /></li>
          </ul>
        </div>
      </div>
    </>
  );
}