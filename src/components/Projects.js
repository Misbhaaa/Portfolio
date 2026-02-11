import { motion } from "framer-motion";

function Projects() {
  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const projects = [
    {
      title: "Secure File Exchange System for Healthcare",
      period: "2024 – 2025",
      place: "LBS College, Kasaragod",
      tech: "Django, OpenStack, Docker, AES, Diffie-Hellman, PBKDF2",
      description:
        "Designed and developed a secure hospital file exchange system enabling encrypted file sharing between doctors. Implemented strong cryptographic techniques with role-based access control to ensure data confidentiality and integrity.",
      link: "https://github.com/Misbhaaa/MediCrypt", // add GitHub link if public
    },
    {
      title: "PowerPay – Electricity Billing System",
      period: "2023 – 2024",
      place: "LBS College, Kasaragod",
      tech: "Java Swing, MySQL",
      description:
        "Built a desktop-based electricity billing system for Kerala State Electricity Board with features like bill generation, payment tracking, and customer management.",
      link: "https://github.com/Misbhaaa/PowerPay",
    },
    {
      title: "Hospital Management System",
      period: "2022 – 2023",
      place: "LBS College, Kasaragod",
      tech: "MySQL, PHP / Java (CRUD)",
      description:
        "Developed a database-driven system to manage patients, doctors, appointments, and medical records with full CRUD functionality.",
      link: "https://github.com/Misbhaaa/Hospital-System",
    },
    {
      title: "Python Internship",
      period: "2023 – 2024",
      place: "Revertech IT Solutions",
      tech: "Python",
      description:
        "Completed a focused internship covering Python fundamentals, scripting, and problem-solving with hands-on exercises and mini tasks.",
      link: "",
    },
    {
  title: "Cybersecurity Internship",
  period: "June 2025",
  place: "SkillCraft Technology (Remote)",
  tech: "Python, Cyber Security, Encryption, Secure Key Exchange",
  description:
    "Built basic cybersecurity tools using Python, including a password strength checker and a keylogger. Gained hands-on experience with encryption techniques and secure key exchange mechanisms.",
  link: "",
}
  ];

  return (
    <motion.section
      className="py-16 px-6 bg-white"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.3, delayChildren: 0.2 },
        },
      }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-10 text-center text-indigo-700"
        variants={projectVariants}
      >
        Projects & Experience
      </motion.h2>

      <motion.ul className="max-w-4xl mx-auto space-y-6">
        {projects.map((project, index) => (
          <motion.li
            key={index}
            className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            variants={projectVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {project.title}
            </h3>

            <p className="text-sm text-gray-500 mb-2">
              {project.period} | {project.place}
            </p>

            <p className="text-sm text-indigo-600 mb-2">
              <strong>Tech:</strong> {project.tech}
            </p>

            <p className="text-gray-700 mb-3">{project.description}</p>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-700 underline"
              >
                View Project →
              </a>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}

export default Projects;
