import { useReducedMotion as useFramerReducedMotion } from "framer-motion";

export default function useReducedMotion() {
  const prefersReducedMotion = useFramerReducedMotion();
  return prefersReducedMotion ?? false;
}
