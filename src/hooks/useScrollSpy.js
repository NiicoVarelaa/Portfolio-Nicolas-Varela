import { useState, useEffect, useCallback } from "react";

/**
 * Custom hook para detectar la sección activa en el viewport
 * @param {Array} sectionIds - Array de IDs de las secciones a observar
 * @param {number} offset - Offset desde el top para considerar la sección activa
 * @returns {Object} - { activeSection, hasShadow }
 */
const useScrollSpy = (sectionIds, offset = 200) => {
  const [activeSection, setActiveSection] = useState("");
  const [hasShadow, setHasShadow] = useState(false);

  const handleScroll = useCallback(() => {
    // Detectar shadow en navbar
    const shouldShowShadow = window.scrollY > 10;
    setHasShadow(shouldShowShadow);

    // Detectar sección activa con throttle mediante requestAnimationFrame
    const scrollPosition = window.scrollY + offset;

    let current = "";
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element && element.offsetTop <= scrollPosition) {
        current = id;
      }
    });

    if (current !== activeSection) {
      setActiveSection(current);
    }
  }, [sectionIds, offset, activeSection]);

  useEffect(() => {
    // Throttle con requestAnimationFrame para mejor performance
    let rafId = null;
    let isThrottled = false;

    const throttledScroll = () => {
      if (isThrottled) return;

      isThrottled = true;
      rafId = requestAnimationFrame(() => {
        handleScroll();
        isThrottled = false;
      });
    };

    // Ejecutar una vez al montar
    handleScroll();

    window.addEventListener("scroll", throttledScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [handleScroll]);

  return { activeSection, hasShadow };
};

export default useScrollSpy;
