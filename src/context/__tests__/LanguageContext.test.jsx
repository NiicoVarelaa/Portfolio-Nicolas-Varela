import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import {
  LanguageProvider,
  default as LanguageContext,
} from "../LanguageContext";

const wrapper = ({ children }) => (
  <LanguageProvider>{children}</LanguageProvider>
);

describe("LanguageContext", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("lang");
  });

  it("defaults to spanish when no saved language", () => {
    const { result } = renderHook(
      () => {
        const { useContext } = require("react");
        return useContext(LanguageContext);
      },
      { wrapper },
    );
    expect(result.current.lang).toBe("es");
  });

  it("provides lang and toggleLanguage", () => {
    const { result } = renderHook(
      () => {
        const { useContext } = require("react");
        return useContext(LanguageContext);
      },
      { wrapper },
    );
    expect(result.current.lang).toBe("es");
    expect(typeof result.current.toggleLanguage).toBe("function");
  });

  it("toggles between es and en", () => {
    const { result } = renderHook(
      () => {
        const { useContext } = require("react");
        return useContext(LanguageContext);
      },
      { wrapper },
    );
    expect(result.current.lang).toBe("es");
    act(() => {
      result.current.toggleLanguage();
    });
    expect(result.current.lang).toBe("en");
    act(() => {
      result.current.toggleLanguage();
    });
    expect(result.current.lang).toBe("es");
  });

  it("saves language to localStorage on change", () => {
    const { result } = renderHook(
      () => {
        const { useContext } = require("react");
        return useContext(LanguageContext);
      },
      { wrapper },
    );
    act(() => {
      result.current.toggleLanguage();
    });
    expect(localStorage.getItem("lang")).toBe("en");
  });

  it("sets document.documentElement.lang on change", () => {
    const { result } = renderHook(
      () => {
        const { useContext } = require("react");
        return useContext(LanguageContext);
      },
      { wrapper },
    );
    act(() => {
      result.current.toggleLanguage();
    });
    expect(document.documentElement.lang).toBe("en");
  });

  it("loads saved language from localStorage on init", () => {
    localStorage.setItem("lang", "en");
    const { result } = renderHook(
      () => {
        const { useContext } = require("react");
        return useContext(LanguageContext);
      },
      { wrapper },
    );
    expect(result.current.lang).toBe("en");
  });

  it("falls back to es if saved language is invalid", () => {
    localStorage.setItem("lang", "fr");
    const { result } = renderHook(
      () => {
        const { useContext } = require("react");
        return useContext(LanguageContext);
      },
      { wrapper },
    );
    expect(result.current.lang).toBe("es");
  });
});
