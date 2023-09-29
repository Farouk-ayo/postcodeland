/* eslint-disable react/prop-types */
// import React from 'react'
import classes from "./Card.module.scss";
import locationImage from "../assets/location.svg";

const Card = ({ id, image, locationId, popularity }) => {
  return (
    <a href={"#"} className={classes.card} id={id}>
      <img className={classes.localImage} src={image} alt="" />
      <div className={classes.cardInfo}>
        <img src={locationImage} alt="" />
        <h6>{locationId}</h6>
      </div>
      <p>{popularity}</p>
    </a>
  );
};

export default Card;
