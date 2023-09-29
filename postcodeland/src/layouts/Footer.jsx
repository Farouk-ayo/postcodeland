// import React from 'react'
import classes from "./Layout.module.scss";
import { AiFillHome } from "react-icons/ai";

const Footer = () => {
  return (
    <section className={classes.footer}>
      <div className={classes.first}>
        <a href="#" className={classes.footerLink}>
          <AiFillHome />
          <span>Check My Postcode</span>
        </a>
        <div>
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Postcode by country</li>
            <li>Postcode by Introduction Date</li>
            <li>Postcode Near Me</li>
            <li>Postcode Lottery</li>
          </ul>
        </div>
        <div>
          <h3>MORE LINKS</h3>
          <ul>
            <li>Postcode Map by User Type</li>
            <li>Postcode Map by Use Category</li>
            <li>Postcode Map by Council Tax Band</li>
          </ul>
        </div>
        <div>
          <h3>SOCIALS</h3>
          <ul>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Youtube</li>
          </ul>
        </div>
        <div>
          <h3>ABOUT</h3>
          <ul>
            <li>About this Website</li>
            <li>Disclaimers and Limitations</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className={classes.second}>
        <h5>Check My Postcode</h5>
        <span>
          CheckMyPostcode.UK is a <a href="">Good Website</a>
        </span>
      </div>
    </section>
  );
};

export default Footer;
