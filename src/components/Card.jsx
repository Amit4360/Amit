import React from "react";
import "./Card.css"
import Head from "./Head.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons'

export default function Card() {
  return (
    <>
      <div className="card">
        <img src={Head} alt="" className="img" />
        <h1 className="title">Isha Patade</h1>
        <div className="div"></div>
        <p>Technical Head</p>
        <ul className="sizes-box">
          <li><FontAwesomeIcon icon={faCoffee} /></li>
          <li><FontAwesomeIcon icon={faCoffee} /></li>
          <li><FontAwesomeIcon icon={faCoffee} /></li>
        </ul>
      </div>
    </>
  );
}