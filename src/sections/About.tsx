import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserAlt,
  FaRocket,
  FaCode,
  FaBrain,
  FaLaptopCode,
  FaBullseye,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaUserAlt />,
    title: "Who I Am",
    short: "Frontend focused developer.",
    full: "I am a passionate frontend developer who enjoys building clean, scalable and performance-driven web applications with modern UI principles.",
  },
  {
    icon: <FaRocket />,
    title: "My Mission",
    short: "Building impactful products.",
    full: "My mission is to create scalable and user-focused web applications that solve real-world problems with elegant solutions.",
  },
  {
    icon: <FaCode />,
    title: "Tech Stack",
    short: "React & TypeScript.",
    full: "I work primarily with React, TypeScript, Tailwind CSS and Node.js. I focus on writing clean, maintainable and scalable code.",
  },
  {
    icon: <FaBrain />,
    title: "Strength",
    short: "Problem solving mindset.",
    full: "Strong understanding of component architecture, responsive layouts and performance optimization techniques.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Learning",
    short: "Improving backend skills.",
    full: "Currently deepening my knowledge in backend systems, APIs, authentication and system design patterns.",
  },
  {
    icon: <FaBullseye />,
    title: "Goal",
    short: "Full Stack Engineer.",
    full: "My goal is to become a highly skilled full stack engineer capable of building complete production-ready systems.",
  },
];

function About() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen px-6 md:px-16 py-20" id="about">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-blue-400 text-center">
        About Me
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {cards.map((card, index) => (
          <motion.div
            key={index}
            layout
            onClick={() => toggleCard(index)}
            className={`cursor-pointer bg-white/10 backdrop-blur-xl 
              p-6 rounded-3xl border 
              transition-all duration-300
              ${
                activeIndex === index
                  ? "border-blue-400 shadow-lg shadow-blue-500/30"
                  : "border-blue-400/30"
              }`}
          >
            <div className="text-3xl text-blue-400 mb-4">
              {card.icon}
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              {card.title}
            </h3>

            <p className="text-gray-300 text-sm">
              {card.short}
            </p>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-gray-300 text-sm leading-relaxed"
                >
                  {card.full}
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default About;