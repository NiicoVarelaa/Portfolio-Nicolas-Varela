# Portfolio Nicolás Varela

Portfolio personal desarrollado con **React** y **Vite**, diseñado para mostrar proyectos, habilidades y experiencia profesional como desarrollador.

## ✨ Características

- **Diseño moderno** con Tailwind CSS y animaciones fluidas con Framer Motion
- **Dark mode** con persistencia de preferencia
- **Internacionalización (i18n)** con soporte para Español e Inglés
- **Formulario de contacto** con validación usando React Hook Form y Zod
- **Notificaciones** con Sonner y React Hot Toast
- **Testing** con Vitest y React Testing Library
- **Deploy automatizado** a GitHub Pages
- **Responsive** y optimizado para todos los dispositivos

## 🛠️ Tecnologías

| Categoría | Tecnologías |
|-----------|-------------|
| **Frontend** | React 18, Vite 5 |
| **Estilos** | Tailwind CSS 3, PostCSS, Autoprefixer |
| **Animaciones** | Framer Motion 12 |
| **Iconos** | Lucide React |
| **Forms** | React Hook Form, Zod (validación) |
| **Notificaciones** | Sonner |
| **Testing** | Vitest, React Testing Library, JSDOM |
| **Linting** | ESLint 9 |
| **Deploy** | Vercel |
| **Estado** | Context API (Theme + Language) |

## 📁 Estructura del proyecto

```
src/
├── assets/         # Imágenes y archivos estáticos
├── components/     # Componentes reutilizables
│   ├── common/     # Componentes compartidos
│   ├── layout/     # Estructura de layout
│   ├── sections/   # Secciones del portfolio
│   └── ui/         # Componentes UI base
├── constants/      # Constantes y configuraciones
├── context/        # Contextos de React (Theme, Language)
├── data/           # Datos estáticos (proyectos, experiencia, etc.)
├── hooks/          # Custom hooks
├── locales/        # Archivos de internacionalización (es.js, en.js)
├── test/           # Configuración y archivos de test
├── App.jsx         # Componente raíz
├── main.jsx        # Entry point
└── index.css       # Estilos globales
```

## 🚀 Instalación y uso

### Prerrequisitos

- Node.js >= 18
- npm >= 9

### Pasos

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/tu-repo-portfolio.git
   cd tu-repo-portfolio
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno (opcional):**
   ```bash
   cp .env.example .env
   ```

4. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

   La aplicación estará disponible en `http://localhost:5173`

## 📜 Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la app para producción |
| `npm run preview` | Previsualiza el build de producción |
| `npm run lint` | Ejecuta ESLint para analizar el código |
| `npm run typecheck` | Verifica tipos con TypeScript |
| `npm run test` | Ejecuta tests en modo watch |
| `npm run test:run` | Ejecuta tests una vez |
| `npm run test:coverage` | Ejecuta tests con cobertura |
| `npm run deploy` | Construye y despliega a GitHub Pages |

## 🌐 Deploy

### Vercel

```bash
npm run deploy
```

### Build manual

```bash
npm run build
```

Los archivos generados en `dist/` pueden ser desplegados en cualquier servidor estático (Vercel, Netlify, etc.).

## 🧪 Testing

El proyecto utiliza **Vitest** y **React Testing Library** para tests unitarios y de componentes.

```bash
# Ejecutar tests
npm run test

# Ejecutar con cobertura
npm run test:coverage
```

## 🤝 Contribuir

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Haz push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia [MIT](LICENSE).

---

Desarrollado por **Nicolás Varela** | [GitHub](https://github.com/NiicoVarelaa) | [LinkedIn](https://www.linkedin.com/in/niicolasvarelaa/)
