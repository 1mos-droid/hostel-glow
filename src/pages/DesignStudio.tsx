import React from 'react';
import styles from './DesignStudio.module.css';
import { motion } from 'framer-motion';
import DesignCard from '../components/DesignCard';

const designs = [
  { id: '1', title: 'Bohemian Dream', image: 'https://picsum.photos/seed/design1/800/600' },
  { id: '2', title: 'Industrial Chic', image: 'https://picsum.photos/seed/design2/800/600' },
  { id: '3', title: 'Minimalist Haven', image: 'https://picsum.photos/seed/design3/800/600' },
  { id: '4', title: 'Coastal Vibes', image: 'https://picsum.photos/seed/design4/800/600' },
  { id: '5', title: 'Urban Jungle', image: 'https://picsum.photos/seed/design5/800/600' },
  { id: '6', title: 'Retro Funk', image: 'https://picsum.photos/seed/design6/800/600' },
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

const DesignStudio = () => {
  return (
    <motion.div
      className={styles.studio}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.header}>
        <h1 className={styles.title}>Design Studio</h1>
        <p className={styles.subtitle}>Find the perfect look for your space.</p>
      </div>
      <motion.div
        className={styles.grid}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {designs.map((design) => (
          <DesignCard key={design.id} {...design} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default DesignStudio;
