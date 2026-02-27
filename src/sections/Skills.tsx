import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMongodb } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact />, level: 85 },
  { name: "TypeScript", icon: <SiTypescript />, level: 75 },
  { name: "JavaScript", icon: <FaJs />, level: 85 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 80 },
  { name: "Node.js", icon: <FaNodeJs />, level: 70 },
  { name: "MongoDB", icon: <SiMongodb />, level: 65 },
  { name: "HTML", icon: <FaHtml5 />, level: 90 },
  { name: "CSS", icon: <FaCss3Alt />, level: 85 },
  { name: "Git", icon: <FaGitAlt />, level: 80 },
];

function Skills() {
  return (
    <section id="skills" className="min-h-screen px-6 md:px-16 py-20">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-blue-400 text-center">
        Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl 
              border border-blue-400/30 
              hover:shadow-lg hover:shadow-blue-500/30
              transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4 text-blue-400 text-2xl">
              {skill.icon}
              <h3 className="text-lg font-semibold text-white">
                {skill.name}
              </h3>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700/40 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="bg-blue-500 h-2 rounded-full"
              />
            </div>

            <p className="text-sm text-gray-400 mt-2">
              {skill.level}% Proficiency
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Skills;