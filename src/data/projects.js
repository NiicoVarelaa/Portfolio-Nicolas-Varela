import project1 from "@assets/project1.webp";
import project2 from "@assets/project2.webp";
import project3 from "@assets/project3.webp";

export const projects = [
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
      project1,
      project2,
      project3,
    ],
  },
  {
    id: 2,
    image: project2,
    title: "TaskFlow",
    description:
      "Aplicación de gestión de tareas con drag & drop, filtros avanzados y sincronización en tiempo real. Construida con React, Zustand y Firebase para una experiencia fluida y colaborativa.",
    link: "https://taskflow-demo.netlify.app/",
    githubLink: "https://github.com/NiicoVarelaa/TaskFlow",
    technologies: ["React", "Zustand", "Firebase", "Tailwind CSS"],
    galleryImages: [
      project2,
      project1,
      project3,
    ],
  },
  {
    id: 3,
    image: project3,
    title: "WeatherPulse",
    description:
      "Dashboard meteorológico que muestra pronósticos en tiempo real con gráficos interactivos, geolocalización y alertas climáticas. Integración con OpenWeather API y visualizaciones con Chart.js.",
    link: "https://weatherpulse-demo.netlify.app/",
    githubLink: "https://github.com/NiicoVarelaa/WeatherPulse",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS Grid"],
    galleryImages: [
      project3,
      project1,
      project2,
    ],
  },
];