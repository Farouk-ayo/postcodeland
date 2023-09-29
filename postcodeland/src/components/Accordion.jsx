/* eslint-disable react/prop-types */
// import React from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import classes from "./Accordion.module.scss";
import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${classes.accordion} ${isOpen ? classes.open : ''}`}>
      <div className={classes.accordionHeader} onClick={toggleAccordion}>
        <p>{title}</p>
        {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </div>
      {isOpen && (
        <div className={classes.accordionContent}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
