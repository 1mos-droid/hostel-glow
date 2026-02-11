import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './DesignDetail.module.css';
import { motion } from 'framer-motion';

const designs = [
    { id: '1', title: 'Bohemian Dream', image: 'https://picsum.photos/seed/design1/1200/800', description: 'A cozy and eclectic design with a mix of patterns, textures, and natural elements.' },
    { id: '2', title: 'Industrial Chic', image: 'https://picsum.photos/seed/design2/1200/800', description: 'A modern and edgy design with raw materials, exposed brick, and metal accents.' },
    { id: '3', title: 'Minimalist Haven', image: 'https://picsum.photos/seed/design3/1200/800', description: 'A clean and serene design with a neutral color palette and simple, functional furniture.' },
    { id: '4', title: 'Coastal Vibes', image: 'https://picsum.photos/seed/design4/1200/800', description: 'A light and airy design with a beach-inspired color palette and natural materials.' },
    { id: '5', title: 'Urban Jungle', image: 'https://picsum.photos/seed/design5/1200/800', description: 'A vibrant and lively design with an abundance of plants, bold colors, and natural light.' },
    { id: '6', title: 'Retro Funk', image: 'https://picsum.photos/seed/design6/1200/800', description: 'A fun and playful design with a nod to the 70s, featuring bold patterns, bright colors, and vintage furniture.' },
];

const DesignDetail = () => {
    const { id } = useParams<{ id: string }>();
    const design = designs.find((d) => d.id === id);

    if (!design) {
        return <div>Design not found</div>;
    }

    return (
        <motion.div
            className={styles.detail}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.image}>
                <img src={design.image} alt={design.title} />
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>{design.title}</h1>
                <p className={styles.description}>{design.description}</p>
                <Link to="/booking" className={styles.bookButton}>
                    Book this design
                </Link>
            </div>
        </motion.div>
    );
};

export default DesignDetail;
