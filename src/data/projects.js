import gesclubCard from "@assets/gesclub-card.webp";
import gesclubG1 from "@assets/gesclub-g1.webp";
import gesclubG2 from "@assets/gesclub-g2.webp";
import gesclubG3 from "@assets/gesclub-g3.webp";
import gesclubG4 from "@assets/gesclub-g4.webp";
import gesclubG5 from "@assets/gesclub-g5.webp";
import gesclubG6 from "@assets/gesclub-g6.webp";

import pixelCard from "@assets/pixel-card.webp";
import pixelG1 from "@assets/pixel-g1.webp";
import pixelG2 from "@assets/pixel-g2.webp";
import pixelG3 from "@assets/pixel-g3.webp";
import pixelG4 from "@assets/pixel-g4.webp";
import pixelG5 from "@assets/pixel-g5.webp";
import pixelG6 from "@assets/pixel-g6.webp";

import stockflowCard from "@assets/stockflow-card.webp";
import stockflowG1 from "@assets/stockflow-g1.webp";
import stockflowG2 from "@assets/stockflow-g2.webp";
import stockflowG3 from "@assets/stockflow-g3.webp";
import stockflowG4 from "@assets/stockflow-g4.webp";
import stockflowG5 from "@assets/stockflow-g5.webp";
import stockflowG6 from "@assets/stockflow-g6.webp";

export const projects = [
  {
    id: 1,
    image: gesclubCard,
    title: "GesClub",
    description:
      "Sistema de gestion deportiva completo con landing page animada, portal para socios y panel administrativo. Incluye CRUD de socios, deportes, inscripciones y pagos con graficos interactivos, exportacion a PDF/Excel y modo oscuro/claro.",
    link: "https://gestion-club-deportivo.vercel.app",
    githubLink: "https://github.com/NiicoVarelaa/Gestion-Club-Deportivo",
    technologies: [
      "React",
      "Express",
      "Prisma",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
    ],
    galleryImages: [
      gesclubCard,
      gesclubG1,
      gesclubG2,
      gesclubG3,
      gesclubG4,
      gesclubG5,
      gesclubG6,
    ],
  },
  {
    id: 2,
    image: pixelCard,
    title: "Pixel Salud",
    description:
      "Plataforma de e-commerce y gestion farmaceutica con roles de administrador, empleado (POS) y cliente. Integra carrito de compras, pagos con Mercado Pago, campanas de descuento, cupones, reportes exportables y trail de auditoria.",
    link: "https://www.pixelsalud.com",
    githubLink: "https://github.com/NiicoVarelaa/PixelSalud",
    technologies: [
      "React 19",
      "Express",
      "MySQL",
      "Mercado Pago",
      "Tailwind CSS",
      "Zustand",
      "Cloudinary",
    ],
    galleryImages: [
      pixelCard,
      pixelG1,
      pixelG2,
      pixelG3,
      pixelG4,
      pixelG5,
      pixelG6,
    ],
  },
  {
    id: 3,
    image: stockflowCard,
    title: "StockFlow",
    description:
      "Sistema de gestion de stock y proveedores para tiendas de electronica. Panel con graficos interactivos, alertas de stock bajo, movimientos con transacciones ACID, subida de imagenes a Cloudinary y recuperacion de contrasena por email.",
    link: "https://mini-erp-demo.vercel.app",
    githubLink: "https://github.com/NiicoVarelaa/Gestion-Stock-Proveedores",
    technologies: [
      "React 19",
      "TypeScript",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Chart.js",
      "Zustand",
    ],
    galleryImages: [
      stockflowCard,
      stockflowG1,
      stockflowG2,
      stockflowG3,
      stockflowG4,
      stockflowG5,
      stockflowG6,
    ],
  },
];
