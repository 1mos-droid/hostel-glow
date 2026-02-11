import React from 'react';
import BookingForm from '../components/BookingForm';
import styles from './Booking.module.css';
import { motion } from 'framer-motion';

const Booking = () => {
  return (
    <motion.div
      className={styles.booking}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.header}>
        <h1 className={styles.title}>Book Your Transformation</h1>
        <p className={styles.subtitle}>Let's create the space of your dreams.</p>
      </div>
      <BookingForm />
    </motion.div>
  );
};

export default Booking;
