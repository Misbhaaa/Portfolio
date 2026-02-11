import { motion } from 'framer-motion';

function Header() {
  return (
    <motion.header
      className="text-center py-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold tracking-tight"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        whileHover={{ scale: 1.05 }}
      >
        Nafeesath Misbha C B
      </motion.h1>
      <motion.p
        className="mt-4 text-lg md:text-xl font-medium opacity-90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        B.Tech Computer Science | Software Developer
      </motion.p>
    </motion.header>
  );
}

export default Header;
