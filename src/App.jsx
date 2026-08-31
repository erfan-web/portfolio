import Aos from "aos";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import About from "./components/About.jsx";
import BottomNavbar from "./components/BottomNavbar.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import { useResponsiveToastPosition } from "./hooks/useResponsiveToastPosition.js";
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const position = useResponsiveToastPosition();
  useEffect(() => {
    Aos.init({ duration: 1000, once: false, offset: 100 });
    document.documentElement.classList.toggle("dark", darkMode);
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={
        darkMode
          ? "bg-linear-to-bl from-gray-900 via-[#202033] to-[#28283E] min-h-screen"
          : "bg-linear-to-bl from-[#F7F7FA] to-[#E7E7FF] min-h-screen"
      }
    >
      <div className="w-full max-w-6xl mx-auto">
        <Toaster
          position={position}
          offset={{ top: "20px" }}
          toastOptions={{
            className: "portfolio-toast",
          }}
        />
      </div>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BottomNavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;
