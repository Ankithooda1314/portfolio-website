import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (

    
    <div className="relative min-h-screen text-white">

<Toaster position="top-right" />
      {/* Background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center "
        style={{ backgroundImage: "url('/soft.jpg')" }}
      />
      <div className="fixed inset-0 -z-10 bg-black/70"></div>

      <Navbar />

      {/* Responsive spacing */}
      <main className="md:ml-24 px-6 md:px-12 py-12 space-y-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        
      </main>
    </div>
  );
}

export default App;