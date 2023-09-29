// import React from 'react'
import group from "../assets/group.png";
import Accordion from "../components/Accordion";
import Card from "../components/Card";
import { according, cardDatas, paragraphs } from "../utils/utils";
import classes from "./Layout.module.scss";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Main = () => {
  return (
    <setion className={`${classes.marginTop} ${classes.main}`}>
      <img src={group} alt="" />
      <div className={classes.popular}>
        <span className={classes.popularTitle}>
          <h4>Popular Postcode</h4>
          <a href="">View All</a>
        </span>
        <span className={classes.grid}>
          {cardDatas.map((each, index) => (
            <Card
              key={index}
              id={index}
              image={each.image}
              locationId={each.locationId}
              popularity={each.popularity}
            />
          ))}
        </span>
      </div>
      <div className={classes.things}>
        <h1>Things to note:</h1>
        <div className={classes.paraContainer}>
          {paragraphs.map((each) => (
            <span key={each.index}>
              <AiOutlineCheckCircle size={25} color="#ffff" />
              <p>{each.content}</p>
            </span>
          ))}
        </div>
      </div>
      <div className={classes.freq}>
        <h1>Frequently Asked Questions</h1>
        <div className={classes.accordionCon}>
          {according.map((each, index) => (
            <Accordion key={index} title={each.title} content={each.content} />
          ))}
        </div>
      </div>
    </setion>
  );
};

export default Main;
