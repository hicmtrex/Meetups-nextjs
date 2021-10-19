import React from "react";
import classes from "./MeetupDetails.module.css";

const MeetupDetails = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt='lows' />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetupDetails;
