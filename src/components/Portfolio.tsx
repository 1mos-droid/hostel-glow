import React from 'react';
import styles from './Portfolio.module.css';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 'the-wanderers-inn',
    title: 'The Wanderer\'s Inn',
    image: 'https://images.unsplash.com/photo-1582582494705-580a59a3523d',
    description: 'A cozy and inviting hostel designed for backpackers and solo travelers. The design focuses on creating a sense of community, with a large common area, a shared kitchen, and a variety of dorm room options.'
  },
  {
    id: 'the-digital-nomads-hub',
    title: 'The Digital Nomad\'s Hub',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
    description: 'A modern and stylish hostel designed for digital nomads and remote workers. The design includes a co-working space, high-speed internet, and a variety of private rooms and apartments.'
  },
  {
    id: 'the-urban-explorers-basecamp',
    title: 'The Urban Explorer\'s Basecamp',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
    description: 'A trendy and vibrant hostel located in the heart of the city. The design is inspired by street art and urban culture, with a rooftop bar, a music venue, and a variety of social events.'
  },
  {
    id: 'the-coastal-retreat',
    title: 'The Coastal Retreat',
    image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed',
    description: 'A peaceful and relaxing hostel located on the coast. The design is inspired by nature, with a focus on natural materials, ocean views, and a variety of wellness activities.'
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <motion.h2 className={styles.title}>Our Work</motion.h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={styles.card}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <img src={project.image} alt={project.title} />
            <div className={styles.overlay}>
              <h3>{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
