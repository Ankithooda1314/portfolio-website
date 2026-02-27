// function Hero() {
//   return (
//     <section id="hero" className="min-h-screen flex flex-col justify-center">

//       <h1 className="text-5xl md:text-7xl font-bold glow">
//         Hi, I'm Your Name
//       </h1>

//       <p className="text-xl md:text-2xl mt-6 text-blue-400">
//         React & TypeScript Developer
//       </p>

//       <p className="mt-4 text-gray-300 max-w-xl">
//         I build modern, responsive and high-performance web applications.
//       </p>

//       <a
//         href="/Ankit_Resume_DE.pdf"
//         download
//         className="mt-8 w-fit bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition"
//       >
//         Download Resume (German)
//       </a>

//        <a
//         href="/Ankit_Resume.pdf"
//         download
//         className="mt-8 w-fit bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition"
//       >
//         Download Resume (English)
//       </a>

//     </section>
//   );
// }

// export default Hero;

import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import CountUp from "react-countup";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 gap-16"
    >
      {/* LEFT SIDE */}
      <div className="flex-1 text-center md:text-left">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide
          bg-gradient-to-r from-blue-400 to-cyan-300 
          bg-clip-text text-transparent"
        >
          Ankit Hooda
        </h1>

        <div className="text-xl md:text-2xl mt-6 text-blue-300">
          <TypeAnimation
            sequence={[
              "React Developer",
              1500,
              "TypeScript Enthusiast",
              1500,
              "Frontend Engineer",
              1500,
              "Building Modern Web Applications",
              1500,
              "Clean UI & Smooth UX Specialist",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="mt-6 text-gray-300 max-w-lg">
          I craft clean, responsive and performance-driven web applications with
          modern UI and smooth user experiences.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 flex-wrap justify-center md:justify-start">
          <a
            href="/Ankit_Resume.pdf"
            download
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition shadow-lg hover:scale-105"
          >
            Resume
          </a>

          <a
            href="#projects"
            className="border border-blue-400 px-6 py-3 rounded-lg hover:bg-blue-500/20 transition"
          >
            View Work
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-8 justify-center md:justify-start text-2xl text-blue-300">
          <a href="https://github.com/ankithooda1314" target="_blank">
            <FaGithub className="hover:text-white transition" />
          </a>
          <a href="https://www.linkedin.com/in/ankit-ankit-a639b032a/" target="_blank">
            <FaLinkedin className="hover:text-white transition" />
          </a>
        </div>
      </div>

      {/* RIGHT SIDE VISUAL CARD */}
      <div className="flex-1 flex justify-center">
        <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-blue-400/20 w-full max-w-md">
          <h3 className="text-blue-400 font-semibold text-lg mb-6">
            Tech Stack
          </h3>

          <div className="flex flex-wrap gap-3">
            {["React.js", "TypeScript", "Tailwind", "Node.js", "MongoDB" , "Express.js"].map(
              (tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-blue-500/20 rounded-full text-sm text-blue-300 border border-blue-400/20"
                >
                  {tech}
                </span>
              ),
            )}
          </div>

          {/* Small Stats */}
    <div className="mt-8 flex justify-between text-center">

  <div>
    <h4 className="text-2xl font-bold text-white">
      <CountUp end={78} duration={3} />+
    </h4>
    <p className="text-gray-400 text-sm">Projects</p>
  </div>

  <div>
    <h4 className="text-2xl font-bold text-white">
      <CountUp end={7} duration={4} />+
    </h4>
    <p className="text-gray-400 text-sm">Years Learning</p>
  </div>

  <div>
    <h4 className="text-2xl font-bold text-white">
      <CountUp end={101} duration={5} />%
    </h4>
    <p className="text-gray-400 text-sm">Dedication</p>
  </div>

</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
