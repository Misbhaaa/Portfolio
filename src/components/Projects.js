import { motion } from 'framer-motion';

function Projects() {
  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      className="py-16 px-6 bg-white"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.4, delayChildren: 0.2 } },
      }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-indigo-700"
        variants={projectVariants}
      >
        Projects & Experience
      </motion.h2>
      <motion.ul className="max-w-3xl mx-auto space-y-6">
        <motion.li
          className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          variants={projectVariants}
          whileHover={{ scale: 1.02 }}
        >
          <strong>Secure File Exchange System for Healthcare using Containers (2024-2025)</strong> - LBS College, Kasaragod<br />
          Developed a secure hospital file exchange system using OpenStack containers, AES encryption, Diffie-Hellman key exchange, and PBKDF2. Built a Django-based web app for doctors to manage encrypted files with seamless access control.
        </motion.li>
        <motion.li
          className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          variants={projectVariants}
          whileHover={{ scale: 1.02 }}
        >
          <strong>PowerPay (2023-2024)</strong> - LBS College, Kasaragod<br />
          Created an electricity billing system for Kerala State Electricity Board using Java Swing and MySQL, featuring bill generation, payment tracking, and customer management.
        </motion.li>
        <motion.li
          className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          variants={projectVariants}
          whileHover={{ scale: 1.02 }}
        >
          <strong>Hospital Management System (2022-2023)</strong> - LBS College, Kasaragod<br />
          Developed a database-driven system to manage patients, doctors, appointments, and medical records with full CRUD operations.
        </motion.li>
        <motion.li
          className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          variants={projectVariants}
          whileHover={{ scale: 1.02 }}
        >
          <strong>Python Internship (2023-2024)</strong> - Revertech IT Solutions<br />
          Completed a one-week internship focusing on Python basics, scripting, and problem-solving.
        </motion.li>
      </motion.ul>
    </motion.section>
  );
}

export default Projects;