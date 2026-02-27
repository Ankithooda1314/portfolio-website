import { useState, useEffect } from "react";
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope, FaBars } from "react-icons/fa";

const links = [
  { icon: <FaHome />, label: "Home", href: "#hero" },
  { icon: <FaUser />, label: "About", href: "#about" },
  { icon: <FaCode />, label: "Skills", href: "#skills" },
  { icon: <FaProjectDiagram />, label: "Projects", href: "#projects" },
  { icon: <FaEnvelope />, label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(link.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-20
        bg-blue-500/20 backdrop-blur-xl border-r border-blue-400/20
        flex-col items-center py-10 space-y-10 text-2xl">

        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className={`transition ${
              active === link.href
                ? "text-white"
                : "text-blue-200 hover:text-white"
            }`}
          >
            {link.icon}
          </a>
        ))}
      </aside>

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-black/70 backdrop-blur-lg flex justify-between items-center px-6 py-4 z-50">
        <span className="text-blue-400 font-semibold">My Portfolio</span>
        <button onClick={() => setIsOpen(!isOpen)}>
          <FaBars className="text-blue-300 text-xl" />
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-black/90 backdrop-blur-xl transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col mt-20 space-y-8 px-6 text-xl">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-blue-300 hover:text-white transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;