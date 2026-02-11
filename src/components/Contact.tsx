import React from 'react';
import styles from './Contact.module.css';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <motion.h2 className={styles.title}>Get in Touch</motion.h2>
      <motion.form
        className={styles.form}
        initial={{ opacity: 0, y: 50 }}
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className={styles.formGroup}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        >
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </motion.div>
        <motion.div
          className={styles.formGroup}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        >
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </motion.div>
        <motion.div
          className={styles.formGroup}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
        >
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} required></textarea>
        </motion.div>
        <motion.button
          type="submit"
          className={styles.submitButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
