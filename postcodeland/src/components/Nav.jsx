// import React from 'react'
import classes from "./Nav.module.scss";
import { AiFillHome, AiOutlineQuestionCircle } from "react-icons/ai";

const Nav = () => {
  return (
    <div className={classes.nav}>
      <a href="#">
        <AiFillHome />
        <span>Check My Postcode</span>
      </a>
      <a href="#">
        <AiOutlineQuestionCircle />
        <span> Help</span>
      </a>
    </div>
  );
};

export default Nav;
