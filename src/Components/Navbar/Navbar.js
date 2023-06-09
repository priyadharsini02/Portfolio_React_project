import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { HiOutlineMoon } from "react-icons/hi";
import { CgSun } from "react-icons/cg";
import { useState, useContext } from "react";
import { ThemeContext } from "../../App";
import pdf from '../Resume.pdf';

function Navbar() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const { changeTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    changeTheme();
  };

  const toggleMobileMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <nav className={styles.nav_container}>
      <div className={styles.desktopMenu}>
        <div className={styles.nav_left}>
          <a href="#home">Priya.</a>
        </div>
        <div className={styles.nav}>
          <a href="#about" className={styles.nav_link}>
            About
          </a>
          <a href="#resume" className={styles.nav_link}>
            Resume
          </a>
          <a href="#work" className={styles.nav_link}>
            Work
          </a>
          <a href="#contact" className={styles.nav_link}>
            Contact
          </a>
        </div>
        <div className={styles.nav_right}>
          <div className={styles.theme_icon} onClick={toggleTheme}>
            {darkTheme ? <CgSun /> : <HiOutlineMoon />}
          </div>

          <a
            className={styles.nav_resume_btn}
            href={pdf}
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
      <div className={styles.mobileMenu}>
        {/* Hamburger menu */}
        <div className={styles.nav_left}>
          <a href="#home">Priya.</a>
        </div>
        <div
          className={`${styles.navMobile} ${
            isMenuClicked ? styles.active : ""
          }`}
        >
          <a href="#about" className={styles.nav_link}>
            About
          </a>
          <a href="#resume" className={styles.nav_link}>
            Resume
          </a>
          <a href="#work" className={styles.nav_link}>
            Work
          </a>
          <a href="#contact" className={styles.nav_link}>
            Contact
          </a>
          <a
            className={styles.nav_link}
            href={pdf}
            target="_blank"
          >
            Resume
          </a>
        </div>
        <div className={styles.nav_right}>
          <div className={styles.theme_icon} onClick={toggleTheme}>
            {darkTheme ? <CgSun /> : <HiOutlineMoon />}
          </div>
          <div className={styles.hamburgerMenu} onClick={toggleMobileMenu}>
            {isMenuClicked ? <IoClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;