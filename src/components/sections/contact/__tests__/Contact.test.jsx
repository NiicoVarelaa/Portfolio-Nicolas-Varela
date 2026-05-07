import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Contact from "../Contact";
import LanguageContext from "@context/LanguageContext";
import ThemeContext from "@context/ThemeContext";

const mockT = {
  navbar: {
    projects: "Proyectos",
    skills: "Skills",
    about: "Sobre mí",
    contact: "Contacto",
  },
  home: {
    availableForWork: "Disponible para trabajar",
    greeting: "Hola, soy",
    iAm: "",
    fullStackDeveloper: "Desarrollador Full Stack",
    homeDescription: "Descripción",
    downloadCV: "Descargar CV",
  },
  projects: {
    sectionTitle: "Proyectos",
    projectList: [],
  },
  skills: {
    sectionTitle: "Habilidades",
    technologiesCount: "tecnologías",
    alwaysLearning: "Siempre aprendiendo",
    currentlyExploring: "Explorando nuevas tecnologías",
  },
  about: {
    sectionTitle: "Sobre mí",
    timeline: [],
  },
  contact: {
    sectionTitle: "Contacto",
    name: "Nombre",
    email: "Email",
    subject: "Asunto",
    message: "Mensaje",
    send: "Enviar mensaje",
    sending: "Enviando...",
    validations: {
      nameRequired: "El nombre es requerido",
      emailRequired: "El email es requerido",
      emailInvalid: "Email inválido",
      subjectRequired: "El asunto es requerido",
      messageRequired: "El mensaje es requerido",
    },
  },
  floatingBadge: { specialty: "Especialidad", frontend: "Frontend" },
  footer: {
    copyright: "Todos los derechos reservados",
    projects: "Proyectos",
    aboutMe: "Sobre mí",
  },
};

const wrapper = ({ children }) => (
  <LanguageContext.Provider value={{ lang: "es", toggleLanguage: vi.fn() }}>
    <ThemeContext.Provider value={{ isDarkMode: false, toggleTheme: vi.fn() }}>
      {children}
    </ThemeContext.Provider>
  </LanguageContext.Provider>
);

vi.mock("@hooks/useTranslation", () => ({
  default: () => mockT,
  useLang: () => "es",
}));

vi.mock("@hooks/useReducedMotion", () => ({
  default: () => true,
}));

vi.mock("@components/common/Turnstile.jsx", () => ({
  default: ({ onVerify }) => {
    onVerify("mock-turnstile-token");
    return <div data-testid="turnstile" />;
  },
}));

describe("Contact", () => {
  it("renders the contact section", () => {
    render(<Contact />, { wrapper });
    expect(document.getElementById("contacto")).toBeInTheDocument();
  });

  it("renders the contact form with all fields", () => {
    render(<Contact />, { wrapper });
    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/asunto/i)).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /mensaje/i }),
    ).toBeInTheDocument();
  });

  it("renders a submit button", () => {
    render(<Contact />, { wrapper });
    expect(
      screen.getByRole("button", { name: /enviar mensaje/i }),
    ).toBeInTheDocument();
  });

  it("renders the section with correct id", () => {
    render(<Contact />, { wrapper });
    expect(document.getElementById("contacto")).toHaveAttribute(
      "aria-labelledby",
      "contact-heading",
    );
  });

  it("renders a honeypot field for bots", () => {
    render(<Contact />, { wrapper });
    const honeypot = document.querySelector('input[name="botcheck"]');
    expect(honeypot).toBeInTheDocument();
    expect(honeypot).toHaveAttribute("type", "text");
    expect(honeypot).toHaveValue("");
  });
});
