import React from "react";
import styles from "./Home.module.css";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import pic from '../Profilepic.jpg';

const Home = () => {
  return (
    <section className={styles.home_section} id="home">
      <div className={styles.home_left}>
        <div className={styles.home_img}>
          <div className={styles.cover}></div>
          <img
            className={styles.image}
            src={pic}
          />
        </div>
      </div>
      <div className={styles.home_right}>
        <p className={styles.greet}>Hi, my name is</p>
        <h1 className={styles.heading_1}>
          Priyadharsini <span>S.</span>
        </h1>
        {/* <h1 className={styles.heading_2}>I build things for the web.</h1> */}
        <p className={styles.desc}>
          Creative front-end developer with more than 2 years of experience in
          building web applications using JavaScript and React.
        </p>
        <div className={styles.social_icons}>
          <a href="https://github.com/priyadharsini02" target="_blank">
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/priyadharsini-s-753699258/"
            target="_blank"
          >
            <FiLinkedin />
          </a>
          <a href="https://www.instagram.com/priya._.encantadora/" target="_blank">
            <FiInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;