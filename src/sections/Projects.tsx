import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Frontend", "FullStack"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="min-h-screen px-6 md:px-16 py-20">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-blue-400 text-center">
        Projects
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full border transition ${
              filter === cat
                ? "bg-blue-500 border-blue-500 text-white"
                : "border-blue-400 text-blue-300 hover:bg-blue-500/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl 
              border border-blue-400/30 overflow-hidden
              hover:shadow-lg hover:shadow-blue-500/30 transition"
          >
            {/* Image */}
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4">
                {project.desc}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-blue-500/20 
                      rounded-full text-blue-300 border border-blue-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-sm text-blue-400 hover:text-white"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="text-sm text-blue-400 hover:text-white"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Projects;