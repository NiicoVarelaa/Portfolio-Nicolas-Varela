import PropTypes from "prop-types";

const TECH_COLORS = {
  React: "bg-cyan-500/10 text-cyan-700 border-cyan-500/30 dark:text-cyan-400",
  JavaScript:
    "bg-amber-400/10 text-amber-700 border-amber-400/30 dark:text-amber-300",
  "Tailwind CSS":
    "bg-sky-500/10 text-sky-700 border-sky-500/30 dark:text-sky-400",
  "React Hook Form":
    "bg-pink-500/10 text-pink-700 border-pink-500/30 dark:text-pink-400",
  Zustand: "bg-lime-500/10 text-lime-700 border-lime-500/30 dark:text-lime-400",
  MySQL: "bg-blue-600/10 text-blue-700 border-blue-600/30 dark:text-blue-400",
  Express:
    "bg-zinc-500/15 text-zinc-700 border-zinc-500/30 dark:text-zinc-200",
  JWT: "bg-purple-500/10 text-purple-700 border-purple-500/30 dark:text-purple-400",
  Zod: "bg-indigo-500/10 text-indigo-700 border-indigo-500/30 dark:text-indigo-400",
  "Mercado Pago":
    "bg-sky-400/10 text-sky-700 border-sky-400/30 dark:text-sky-300",
  Cloudinary: "bg-blue-500/10 text-blue-700 border-blue-500/30 dark:text-blue-300",
  Recharts: "bg-teal-500/10 text-teal-700 border-teal-500/30 dark:text-teal-400",
  Prisma: "bg-emerald-500/10 text-emerald-700 border-emerald-500/30 dark:text-emerald-400",
  Supabase: "bg-green-500/10 text-green-700 border-green-500/30 dark:text-green-400",
  PostgreSQL:
    "bg-blue-800/10 text-blue-800 border-blue-800/30 dark:text-blue-300",
  "Framer Motion":
    "bg-fuchsia-500/10 text-fuchsia-700 border-fuchsia-500/30 dark:text-fuchsia-400",
  TypeScript:
    "bg-blue-700/10 text-blue-700 border-blue-700/30 dark:text-blue-300",
  "Chart.js": "bg-rose-500/10 text-rose-700 border-rose-500/30 dark:text-rose-400",
};

const DEFAULT_COLOR =
  "bg-gray-500/10 text-gray-700 border-gray-500/30 dark:text-gray-300";

const TechBadge = ({ tech }) => (
  <span
    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 hover:-translate-y-0.5 ${
      TECH_COLORS[tech] || DEFAULT_COLOR
    }`}
  >
    {tech}
  </span>
);

TechBadge.propTypes = {
  tech: PropTypes.string.isRequired,
};

export default TechBadge;