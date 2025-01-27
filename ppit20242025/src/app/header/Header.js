import React from "react";
import styles from "./Header.module.css"; // Assuming you have a CSS module for this header component
import Link from "next/link";

const Header = ({ menuOpen, toggleMenu }) => {
  return (

    <header className={styles.header}>
        <div className={styles.logo}>
           <img src="/images/PPITSZlogoheader.png"></img>
        </div>

        <div className={`${styles.overlay} ${menuOpen ? styles.show : ""}`} onClick={toggleMenu}></div>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <a href="/">Home</a> 
        <a href="/about">About</a> 
        <a href="/committee">Committee</a> 
        <a href="/events">Events</a> 
        <a href="/living">Living</a> 
        <a href="/faq">FAQ</a> 

        </nav>
    </header>
  )
};

export default Header;