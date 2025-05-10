import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.section
      className="py-16 px-6 bg-gradient-to-r from-indigo-100 to-purple-100 text-gray-800 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6 text-indigo-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        whileHover={{ scale: 1.03 }}
      >
        Contact Me
      </motion.h2>
      <motion.div
        className="space-y-4 text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <p>
          Email:{' '}
          <a
            href="mailto:misbhanafeesath@gmail.com"
            className="text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            misbhanafeesath@gmail.com
          </a>
        </p>
        <p>
          Phone:{' '}
          <a
            href="tel:+917994688991"
            className="text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            +91-7994688991
          </a>
        </p>
        <p>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/nafeesathmisbha/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            nafeesathmisbha
          </a>
        </p>
        <p>
          GitHub:{' '}
          <a
            href="https://github.com/Misbhaaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            Misbhaaa
          </a>
        </p>
      </motion.div>
    </motion.section>
  );
}

export default Contact;