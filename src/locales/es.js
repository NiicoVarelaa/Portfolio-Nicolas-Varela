export default {
  navbar: {
    projects: "Proyectos",
    skills: "Habilidades",
    about: "Sobre mí",
    contact: "Contacto",
    lightMode: "Modo claro",
    darkMode: "Modo oscuro",
  },
  home: {
    availableForWork: "Disponible para trabajar",
    greeting: "¡Hola!",
    iAm: "Soy",
    fullStackDeveloper: "Desarrollador Full Stack",
    homeDescription:
      "Enfocado en crear productos digitales que impulsan negocios y mejoran la experiencia de usuario.",
    downloadCV: "Descargar CV",
  },
  floatingBadge: {
    specialty: "Especialidad",
    frontend: "Full Stack",
  },
  projects: {
    sectionTitle: "Proyectos",
    projectList: [
      {
        title: "GesClub",
        description:
          "Sistema de gestión deportiva completo con landing page animada, portal para socios y panel administrativo. Incluye CRUD de socios, deportes, inscripciones y pagos con gráficos interactivos, exportación a PDF/Excel y modo oscuro/claro.",
      },
      {
        title: "Pixel Salud",
        description:
          "Plataforma de e-commerce y gestión farmacéutica con roles de administrador, empleado (POS) y cliente. Integra carrito de compras, pagos con Mercado Pago, campañas de descuento, cupones, reportes exportables y trail de auditoría.",
      },
      {
        title: "StockFlow",
        description:
          "Sistema de gestión de stock y proveedores para tiendas de electrónica. Panel con gráficos interactivos, alertas de stock bajo, movimientos con transacciones ACID, subida de imágenes a Cloudinary y recuperación de contraseña por email.",
      },
    ],
    code: "Código",
    demo: "Demo",
  },
  skills: {
    sectionTitle: "Habilidades",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      databases: "Bases de Datos",
      tools: "Herramientas",
    },
    technologiesCount: "tecnologías",
    alwaysLearning: "Siempre Aprendiendo",
    currentlyExploring: "Actualmente explorando TypeScript y Next.js",
  },
  about: {
    sectionTitle: "Sobre Mí",
    intro:
      "Desarrollador Full Stack con 3+ años creando aplicaciones web modernas y escalables. Especialista en React, Node.js y bases de datos; disfruto trabajar en equipos donde la innovación es prioridad.",
    educationTitle: "Educación",
    educationText:
      "Estudiante de la Tecnicatura Universitaria en Programación en la Universidad Tecnológica Nacional - Facultad Regional Tucumán (UTN-FRT).",
    certificationTitle: "Certificaciones",
    certificates: [
      "FullStack Web Developer - RollingCode",
      "React - Coderhouse",
      "Backend con Node.js - Udemy",
    ],
  },
  contact: {
    sectionTitle: "Contacto",
    name: "Nombre",
    email: "Email",
    subject: "Asunto",
    message: "Mensaje",
    send: "Enviar Mensaje",
    sending: "Enviando...",
    successTitle: "¡Mensaje enviado!",
    successText: "Gracias por contactarme. Te responderé pronto.",
    errorTitle: "¡Ups! Algo salió mal",
    errorText: "No se pudo enviar tu mensaje. Intentalo más tarde.",
    errorGeneric: "Ocurrió un problema al enviar el mensaje",
    configError: "Error de configuración: Falta la clave de Web3Forms",
    sendingTitle: "Enviando...",
    sendingText: "Por favor esperá un momento",
    phone: "Teléfono",
    location: "Ubicación",
    validations: {
      nameRequired: "Tu nombre es requerido",
      nameTooLong: "El nombre es demasiado largo",
      emailRequired: "El email es requerido",
      emailInvalid: "Formato de email inválido",
      emailTooLong: "El email es demasiado largo",
      subjectRequired: "El asunto es obligatorio",
      subjectTooLong: "El asunto es demasiado largo",
      messageRequired: "Escribí un mensaje",
      messageTooLong: "El mensaje es demasiado largo",
      botDetected: "Error de validación. Recargá la página e intentá de nuevo.",
      captchaRequired: "Completá la verificación de seguridad",
      captchaExpired: "La verificación expiró. Completala de nuevo.",
    },
  },
  footer: {
    copyright: "© {year} Nicolás Varela.",
    projects: "Proyectos",
    aboutMe: "Sobre mí",
    contact: "Contacto",
    madeWith: "Hecho con",
    andReact: "y React",
  },
};
