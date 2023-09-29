// import React from "react";

import Nav from "../components/Nav";
import SubNav from "../components/SubNav";
import classes from "./Layout.module.scss";
import earth from "../assets/earth.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <section>
      <Nav />
      <SubNav />
      <div className={classes.map}>
        <img src={earth} alt="" />
        <div className={classes.title}>
          <h1>HELLO</h1>
          <h6>Do you want to check your Postcode?</h6>
          <form
            action="
          "
          >
            <div className={classes.radioGroup}>
              <span>
                <input
                  type="radio"
                  name="radio"
                  id="radio--one"
                  className={classes.radioInput}
                />
                <label htmlFor="radio--one">
                  <span className={classes.radioButton}></span>
                  <span>Check My Postcode</span>
                </label>
              </span>
              <span>
                <input
                  type="radio"
                  name="radio"
                  id="radio--two"
                  className={classes.radioInput}
                />
                <label htmlFor="radio--two">
                  <span className={classes.radioButton}></span>
                  <span> Locate Me</span>
                </label>
              </span>
            </div>
            <div className={classes.searchInput}>
              <span className={classes.search}>
                <input
                  type="text"
                  placeholder="Address, Country, City or Postcode..."
                />
                <AiOutlineSearch
                  className={classes.icon}
                  color="#979390"
                  size={25}
                />
                <button>Search</button>
              </span>
              <span className={classes.select}>
                <select name="" id="">
                  <option value="State/Province">State/Province</option>
                </select>
                <MdKeyboardArrowDown
                  className={classes.iconArrow}
                  color="#979390"
                  size={25}
                />
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Header;
