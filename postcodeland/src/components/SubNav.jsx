// import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import classes from "./Nav.module.scss";

const SubNav = () => {
  return (
    <section className={classes.subnav}>
      <a href="">
        <span>Postcode Lists</span>
        <MdKeyboardArrowDown />
      </a>
      <a href="">
        <span>Postcode Maps</span>
        <MdKeyboardArrowDown />
      </a>
      <a href="">Nearest Postcode</a>
      <a href="">Postcode Lottery</a>
    </section>
  );
};

export default SubNav;
