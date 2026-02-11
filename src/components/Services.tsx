import React from 'react';
import styles from './Services.module.css';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Interior Design',
    description: 'We create beautiful and functional interiors that reflect your brand and delight your guests.',
  },
  {
    title: 'Branding & Identity',
    description: 'We build a strong brand identity that resonates with your target audience and sets you apart from the competition.',
  },
  {
    title: 'Custom Furniture',
    description: 'We design and build custom furniture that is both stylish and durable, perfect for the modern hostel.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <motion.h2 className={styles.title}>Our Services</motion.h2>
      <motion.div
        className={styles.grid}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div key={index} className={styles.card} variants={item}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
