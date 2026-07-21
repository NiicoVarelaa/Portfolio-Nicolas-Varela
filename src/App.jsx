import { lazy, Suspense, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./components/sections/home/Home";
import Footer from "./components/layout/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

const Projects = lazy(() => import("./components/sections/projects/Projects"));
const Skills = lazy(() => import("./components/sections/skills/Skills"));
const About = lazy(() => import("./components/sections/about/About"));
const Contact = lazy(() => import("./components/sections/contact/Contact"));

const SectionLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  useEffect(() => {
    let timeout;
    const onScroll = () => {
      document.documentElement.classList.add("is-scrolling");
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        document.documentElement.classList.remove("is-scrolling");
      }, 1000);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen overflow-x-hidden">
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to content
      </a>

      <div className="fixed top-0 -z-10 min-h-screen w-full bg-gray-50 dark:bg-gray-950 [background-image:radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9)] dark:[background-image:radial_gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Home />
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
