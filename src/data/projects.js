import gesclubImg1 from "@assets/projects/gesclub/1.webp";
import gesclubImg2 from "@assets/projects/gesclub/2.webp";
import gesclubImg3 from "@assets/projects/gesclub/3.webp";
import gesclubImg4 from "@assets/projects/gesclub/4.webp";
import gesclubImg5 from "@assets/projects/gesclub/5.webp";
import gesclubImg6 from "@assets/projects/gesclub/6.webp";
import gesclubImg7 from "@assets/projects/gesclub/7.webp";
import gesclubImg8 from "@assets/projects/gesclub/8.webp";
import gesclubImg9 from "@assets/projects/gesclub/9.webp";
import gesclubImg10 from "@assets/projects/gesclub/10.webp";
import gesclubImg11 from "@assets/projects/gesclub/11.webp";
import gesclubImg12 from "@assets/projects/gesclub/12.webp";

import pixelImg1 from "@assets/projects/pixel/1.webp";
import pixelImg2 from "@assets/projects/pixel/2.webp";
import pixelImg3 from "@assets/projects/pixel/3.webp";
import pixelImg4 from "@assets/projects/pixel/4.webp";
import pixelImg5 from "@assets/projects/pixel/5.webp";
import pixelImg6 from "@assets/projects/pixel/6.webp";
import pixelImg7 from "@assets/projects/pixel/7.webp";
import pixelImg8 from "@assets/projects/pixel/8.webp";
import pixelImg9 from "@assets/projects/pixel/9.webp";
import pixelImg10 from "@assets/projects/pixel/10.webp";
import pixelImg11 from "@assets/projects/pixel/11.webp";
import pixelImg12 from "@assets/projects/pixel/12.webp";
import pixelImg13 from "@assets/projects/pixel/13.webp";
import pixelImg14 from "@assets/projects/pixel/14.webp";

import stockflowImg1 from "@assets/projects/stockflow/1.webp";
import stockflowImg2 from "@assets/projects/stockflow/2.webp";
import stockflowImg3 from "@assets/projects/stockflow/3.webp";
import stockflowImg4 from "@assets/projects/stockflow/4.webp";
import stockflowImg5 from "@assets/projects/stockflow/5.webp";
import stockflowImg6 from "@assets/projects/stockflow/6.webp";
import stockflowImg7 from "@assets/projects/stockflow/7.webp";
import stockflowImg8 from "@assets/projects/stockflow/8.webp";
import stockflowImg9 from "@assets/projects/stockflow/9.webp";
import stockflowImg10 from "@assets/projects/stockflow/10.webp";
import stockflowImg11 from "@assets/projects/stockflow/11.webp";
import stockflowImg12 from "@assets/projects/stockflow/12.webp";
import stockflowImg13 from "@assets/projects/stockflow/13.webp";

export const projects = [
  {
    id: 1,
    image: gesclubImg1,
    title: "GesClub",
    description:
      "Sistema de gestion deportiva completo con landing page animada, portal para socios y panel administrativo. Incluye CRUD de socios, deportes, inscripciones y pagos con graficos interactivos, exportacion a PDF/Excel y modo oscuro/claro.",
    link: "https://gestion-club-deportivo.vercel.app",
    githubLink: "https://github.com/NiicoVarelaa/Gestion-Club-Deportivo",
    technologies: [
      "JavaScript",
      "React",
      "Express",
      "Prisma",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "React Hook Form",
      "Zod",
      "Framer Motion",
      "Zustand",
    ],
    galleryImages: [
      gesclubImg1,
      gesclubImg2,
      gesclubImg3,
      gesclubImg4,
      gesclubImg5,
      gesclubImg6,
      gesclubImg7,
      gesclubImg8,
      gesclubImg9,
      gesclubImg10,
      gesclubImg11,
      gesclubImg12,
    ],
  },
{
    id: 2,
    image: pixelImg1,
    title: "Pixel Salud",
    description:
      "Plataforma de e-commerce y gestion farmaceutica con roles de administrador, empleado (POS) y cliente. Integra carrito de compras, pagos con Mercado Pago, campanas de descuento, cupones, reportes exportables y trail de auditoria.",
    link: "https://www.pixelsalud.com",
    githubLink: "https://github.com/NiicoVarelaa/PixelSalud",
    demoVideo: "51mfH78vcQM",
    technologies: [
      "JavaScript",
      "React",
      "Express",
      "MySQL",
      "Mercado Pago",
      "Tailwind CSS",
      "React Hook Form",
      "Zod",
      "Recharts",
      "JWT",
      "Zustand",
      "Cloudinary",
    ],
    galleryImages: [
      pixelImg1,
      pixelImg2,
      pixelImg3,
      pixelImg4,
      pixelImg5,
      pixelImg6,
      pixelImg7,
      pixelImg8,
      pixelImg9,
      pixelImg10,
      pixelImg11,
      pixelImg12,
      pixelImg13,
      pixelImg14,
    ],
  },
  {
    id: 3,
    image: stockflowImg1,
    title: "Flow Stock",
    description:
      "Sistema de gestion de stock y proveedores para tiendas de electronica. Panel con graficos interactivos, alertas de stock bajo, movimientos con transacciones ACID, subida de imagenes a Cloudinary y recuperacion de contrasena por email.",
    link: "https://mini-erp-demo.vercel.app",
    githubLink: "https://github.com/NiicoVarelaa/Gestion-Stock-Proveedores",
    technologies: [
      "React",
      "TypeScript",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Chart.js",
      "React Hook Form",
      "Zod",
      "JWT",
      "Zustand",
    ],
    galleryImages: [
      stockflowImg1,
      stockflowImg2,
      stockflowImg3,
      stockflowImg4,
      stockflowImg5,
      stockflowImg6,
      stockflowImg7,
      stockflowImg8,
      stockflowImg9,
      stockflowImg10,
      stockflowImg11,
      stockflowImg12,
      stockflowImg13,
    ],
  },
];
