import React from 'react';
import { motion } from 'framer-motion';
import styles from './Loader.module.css';

const Loader = () => {
    return (
        <motion.div
            className={styles.loader}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className={styles.icon}
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                    repeat: Infinity,
                }}
            />
        </motion.div>
    );
};

export default Loader;
