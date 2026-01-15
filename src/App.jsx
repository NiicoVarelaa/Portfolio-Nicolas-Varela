import Navbar from "./components/layout/Navbar";
import Home from "./components/sections/home/Home";
import Projects from "./components/sections/projects/Projects";
import Skills from "./components/sections/skills/Skills";
import About from "./components/sections/about/About";
import Contact from "./components/sections/contact/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="fixed top-0 -z-10 min-h-screen w-full bg-gray-50 dark:bg-gray-950 [background-image:radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9)] dark:[background-image:radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
