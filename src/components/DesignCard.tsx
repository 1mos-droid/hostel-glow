import React from 'react';
import styles from './DesignCard.module.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface DesignCardProps {
  id: string;
  title: string;
  image: string;
}

const DesignCard: React.FC<DesignCardProps> = ({ id, title, image }) => {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <Link to={`/design/${id}`}>
        <img src={image} alt={title} />
        <div className={styles.overlay}>
          <h3>{title}</h3>
        </div>
      </Link>
    </motion.div>
  );
};

export default DesignCard;
