import { useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const Turnstile = ({ siteKey, onVerify, onExpire, theme = "auto" }) => {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);

  const renderWidget = useCallback(() => {
    if (!window.turnstile || !containerRef.current) return;
    if (widgetIdRef.current !== null) {
      window.turnstile.remove(widgetIdRef.current);
    }
    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      theme,
      size: "compact",
      appearance: "interaction-only",
      callback: (token) => onVerify(token),
      "expired-callback": () => onExpire(),
    });
  }, [siteKey, theme, onVerify, onExpire]);

  useEffect(() => {
    if (window.turnstile) {
      renderWidget();
    } else {
      const checkTurnstile = setInterval(() => {
        if (window.turnstile) {
          clearInterval(checkTurnstile);
          renderWidget();
        }
      }, 100);
      return () => clearInterval(checkTurnstile);
    }
  }, [renderWidget]);

  useEffect(() => {
    return () => {
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, []);

  return (
    <div className="flex justify-center">
      <div
        ref={containerRef}
        className="p-3 rounded-xl bg-gray-50/50 dark:bg-gray-800/30 border border-gray-100 dark:border-gray-700/50"
      />
    </div>
  );
};

Turnstile.propTypes = {
  siteKey: PropTypes.string.isRequired,
  onVerify: PropTypes.func.isRequired,
  onExpire: PropTypes.func.isRequired,
  theme: PropTypes.string,
};

export default Turnstile;
