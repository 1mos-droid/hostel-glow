import React from 'react';
import { useTheme } from '../context/ThemeContext';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.toggleButton} onClick={toggleTheme}>
      {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggle;
