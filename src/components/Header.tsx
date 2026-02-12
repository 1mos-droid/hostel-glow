import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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
      <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
        <div className={mobileMenuOpen ? `${styles.bar} ${styles.open}` : styles.bar}></div>
        <div className={mobileMenuOpen ? `${styles.bar} ${styles.open}` : styles.bar}></div>
        <div className={mobileMenuOpen ? `${styles.bar} ${styles.open}` : styles.bar}></div>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ ease: 'easeOut', duration: 0.3 }}
          >
            <nav className={styles.mobileNav}>
              <Link to="/design-studio" onClick={toggleMobileMenu}>Design Studio</Link>
              <Link to="/booking" onClick={toggleMobileMenu}>Book Appointment</Link>
              <a href="/#contact" onClick={toggleMobileMenu}>Contact</a>
              <ThemeToggle />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
