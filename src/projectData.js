import project1 from "./assets/project1.webp";
import project2 from "./assets/project2.webp";
import project3 from "./assets/project3.webp";

/* // Importa las imágenes de la galería para cada proyecto
import p1_galeria1 from "./assets/project1-galeria1.webp";
import p1_galeria2 from "./assets/project1-galeria2.webp";
import p2_galeria1 from "./assets/project2-galeria1.webp";
import p2_galeria2 from "./assets/project2-galeria2.webp";
import p3_galeria1 from "./assets/project3-galeria1.webp";
import p3_galeria2 from "./assets/project3-galeria2.webp"; */

export const projectData = [
  {
    id: 1,
    image: project1,
    title: "Game Zone",
    description:
      "Página para una tienda online de videojuegos diseñada con HTML, CSS, Bootstrap y JavaScript. Ofrece una experiencia moderna e intuitiva para explorar y comprar juegos de diferentes plataformas.",
    link: "https://gamezoone.netlify.app/",
    githubLink: "https://github.com/NiicoVarelaa/GameZone",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    galleryImages: [
      project1, // Usas la imagen principal como la primera
      project2,
      project3,
    ],
  },
  {
    id: 2,
    image: project2,
    title: "AI Content Generator",
    description:
      "An AI-powered platform that helps create high-quality content using machine learning algorithms. Features include text generation, image creation, and content optimization.",
    link: "https://github.com/yourusername/ai-content-generator",
    technologies: ["React", "Python", "TensorFlow", "FastAPI", "Redis"],
    galleryImages: [
      project2,
      project2,
      project2,
    ],
  },
  {
    id: 3,
    image: project3,
    title: "Social Media Analytics",
    description:
      "A powerful analytics tool that provides insights into social media performance across multiple platforms. Includes customizable dashboards and automated reporting.",
    link: "https://github.com/yourusername/social-analytics",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Express", "D3.js"],
    galleryImages: [
      project3,
      project3,
      project3,
    ],
  },
];