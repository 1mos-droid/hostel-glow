import React from 'react';
import styles from './Footer.module.css';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <motion.a href="#" whileHover={{ scale: 1.2 }}>Facebook</motion.a>
        <motion.a href="#" whileHover={{ scale: 1.2 }}>Instagram</motion.a>
        <motion.a href="#" whileHover={{ scale: 1.2 }}>Twitter</motion.a>
      </div>
      <p>&copy; {new Date().getFullYear()} Hostel Glow. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
