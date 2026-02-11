import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      className="py-16 px-6 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 text-center"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6 text-indigo-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        whileHover={{ scale: 1.03 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-2xl mx-auto text-lg leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        I’m a B.Tech Computer Science graduate passionate about cybersecurity and backend development.
        With hands-on experience in building secure, cloud-based applications using Python, Java, and OpenStack,
        I thrive on solving complex problems and collaborating in dynamic teams.
      </motion.p>

      <motion.div
        className="mt-6 max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <h3 className="text-xl font-semibold text-indigo-600 mb-3">
          Skills
        </h3>

        <p>
          <strong>Programming Languages:</strong> C, Python, Java, SQL
        </p>

        <p>
          <strong>Frameworks:</strong> Django
        </p>

        <p>
          <strong>Developer Tools & Databases:</strong> VS Code, Git, MySQL
        </p>

        <p>
          <strong>Soft Skills:</strong> Problem Solving, Attention to Detail, Team Collaboration, Communication
        </p>
      </motion.div>
    </motion.section>
  );
}

export default About;
