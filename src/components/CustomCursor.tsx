import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
        },
    };

    return (
        <motion.div
            className={styles.cursor}
            variants={variants}
            animate="default"
        />
    );
};

export default CustomCursor;
