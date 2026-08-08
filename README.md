# Portfolio Nicolás Varela

Portfolio personal desarrollado con **React** y **Vite**, diseñado para mostrar proyectos, habilidades y experiencia profesional como desarrollador Full Stack.

🔗 **Sitio en vivo:** https://niicovarelaa.github.io/Portfolio-Nicolas-Varela

## ✨ Características

- **Diseño moderno** con Tailwind CSS y animaciones fluidas con Framer Motion
- **Dark mode** con persistencia de preferencia
- **Internacionalización (i18n)** con soporte para Español e Inglés
- **Galería de imágenes** por proyecto (GesClub, Flow Stock y Pixel Salud) con vistas desktop/mobile y zoom
- **Video demo integrado**: Pixel Salud reproduce su demo de YouTube en un modal desde la card y la galería
- **Formulario de contacto** protegido con Cloudflare Turnstile, enviado mediante Cloudflare Worker
- **Validación de formularios** con React Hook Form y Zod
- **Notificaciones** con Sonner
- **SEO**: meta tags Open Graph, Twitter Cards, JSON-LD, sitemap y robots.txt
- **Testing** con Vitest y React Testing Library (97 tests)
- **Deploy automatizado** a GitHub Pages

## 🛠️ Tecnologías

| Categoría | Tecnologías |
|-----------|-------------|
| **Frontend** | React 18, Vite 5 |
| **Estilos** | Tailwind CSS 3, PostCSS, Autoprefixer |
| **Animaciones** | Framer Motion 12 |
| **Iconos** | Lucide React, React Icons |
| **Forms** | React Hook Form, Zod (validación) |
| **Notificaciones** | Sonner |
| **Seguridad** | Cloudflare Turnstile |
| **Testing** | Vitest, React Testing Library, JSDOM |
| **Linting** | ESLint 9 |
| **Deploy** | GitHub Pages |
| **Estado** | Context API (Theme + Language) |
| **Imágenes** | Sharp (optimización de assets) |

## 📁 Estructura del proyecto

```
src/
├── assets/         # Imágenes de proyectos y archivos estáticos
├── components/     # Componentes reutilizables
│   ├── common/     # Componentes compartidos
│   ├── layout/     # Estructura de layout
│   ├── sections/   # Secciones del portfolio (home, projects, about, skills, contact)
│   └── ui/         # Componentes UI base
├── constants/      # Constantes y configuraciones
├── context/        # Contextos de React (Theme, Language)
├── data/           # Datos estáticos (proyectos, skills)
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
   git clone https://github.com/NiicoVarelaa/Portfolio-Nicolas-Varela.git
   cd Portfolio-Nicolas-Varela
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno (opcional):**
   ```bash
   cp .env.example .env
   ```
   Se necesitan `VITE_API_URL` (Worker de Cloudflare que envía los mensajes del formulario) y `VITE_TURNSTILE_SITE_KEY` (Cloudflare Turnstile).

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
| `npm run test` | Ejecuta tests en modo watch |
| `npm run test:run` | Ejecuta tests una vez |
| `npm run test:coverage` | Ejecuta tests con cobertura |
| `npm run deploy` | Prebuild y despliegue a GitHub Pages (`gh-pages -d dist`) |

## 🌐 Deploy

El sitio se publica en **GitHub Pages**:

```bash
npm run deploy
```

También puede desplegarse en cualquier servidor estático (Vercel, Netlify, etc.) construyendo el proyecto:

```bash
npm run build
```

Los archivos generados en `dist/` pueden servirse desde cualquier hosting estático.

## 🧪 Testing

El proyecto utiliza **Vitest** y **React Testing Library** para tests unitarios y de componentes (97 tests).

```bash
# Ejecutar tests en modo watch
npm run test

# Ejecutar tests una vez
npm run test:run

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

Este proyecto está disponible bajo la licencia [MIT](LICENSE).

---

Desarrollado por **Nicolás Varela** | [GitHub](https://github.com/NiicoVarelaa) | [LinkedIn](https://www.linkedin.com/in/niicolasvarelaa/)