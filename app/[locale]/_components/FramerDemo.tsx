'use client';

import { motion } from 'framer-motion';

export const FramerDemo = () => {
  return (
    <motion.div
      style={{ padding: 8, border: '1px solid #ccc', margin: 4 }}
      initial={{ opacity: 0.5, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      Framer Motion demo
    </motion.div>
  );
};
