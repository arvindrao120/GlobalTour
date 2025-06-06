import React, { useEffect } from 'react';
import HeroForm from '../HeroPage/HeroForm';
import { motion } from 'framer-motion';

const pageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -40,
    transition: { duration: 0.5, ease: 'easeIn' },
  },
};

function Contact() {
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      
    });
  return (
    <>
      <motion.div
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
    
      >
        <HeroForm />
      </motion.div>
    </>
  );
}

export default Contact;
