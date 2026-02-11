import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
    >
      <div className={styles.logo}>
        <Link to="/">Hostel Glow</Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/design-studio">Design Studio</Link>
        <Link to="/booking">Book Appointment</Link>
        <a href="/#contact">Contact</a>
        <ThemeToggle />
      </nav>
    </motion.header>
  );
};

export default Header;
