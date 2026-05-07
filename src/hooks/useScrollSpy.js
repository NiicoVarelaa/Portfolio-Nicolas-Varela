import { useState, useEffect, useCallback, useRef } from "react";

const useScrollSpy = (sectionIds, offset = 200) => {
  const [activeSection, setActiveSection] = useState("");
  const [hasShadow, setHasShadow] = useState(false);
  const activeSectionRef = useRef("");

  const handleScroll = useCallback(() => {
    const shouldShowShadow = window.scrollY > 10;
    setHasShadow(shouldShowShadow);

    const scrollPosition = window.scrollY + offset;

    let current = "";
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element && element.offsetTop <= scrollPosition) {
        current = id;
      }
    });

    if (current !== activeSectionRef.current) {
      activeSectionRef.current = current;
      setActiveSection(current);
    }
  }, [sectionIds, offset]);

  useEffect(() => {
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
