import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { ThemeProvider, default as ThemeContext } from "../ThemeContext";

const wrapper = ({ children }) => <ThemeProvider>{children}</ThemeProvider>;

describe("ThemeContext", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
  });

  it("defaults to light mode when no saved theme", () => {
    const { result } = renderHook(
      () => {
        const { useContext } = require("react");
        return useContext(ThemeContext);
      },
      { wrapper },
    );
    expect(result.current.isDarkMode).toBe(false);
  });

  it("provides isDarkMode and toggleTheme", () => {
    const { result } = renderHook(
      () => {
        const { useContext } = require("react");
        return useContext(ThemeContext);
      },
      { wrapper },
    );
    expect(typeof result.current.isDarkMode).toBe("boolean");
    expect(typeof result.current.toggleTheme).toBe("function");
  });

  it("toggles between light and dark", () => {
    const { result } = renderHook(
      () => {
        const { useContext } = require("react");
        return useContext(ThemeContext);
      },
      { wrapper },
    );
    expect(result.current.isDarkMode).toBe(false);
    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.isDarkMode).toBe(true);
    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.isDarkMode).toBe(false);
  });

  it("saves theme to localStorage on change", () => {
    const { result } = renderHook(
      () => {
        const { useContext } = require("react");
        return useContext(ThemeContext);
      },
      { wrapper },
    );
    act(() => {
      result.current.toggleTheme();
    });
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  it("toggles dark class on document element", () => {
    const { result } = renderHook(
      () => {
        const { useContext } = require("react");
        return useContext(ThemeContext);
      },
      { wrapper },
    );
    act(() => {
      result.current.toggleTheme();
    });
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("loads saved dark theme from localStorage on init", () => {
    localStorage.setItem("theme", "dark");
    const { result } = renderHook(
      () => {
        const { useContext } = require("react");
        return useContext(ThemeContext);
      },
      { wrapper },
    );
    expect(result.current.isDarkMode).toBe(true);
  });

  it("loads saved light theme from localStorage on init", () => {
    localStorage.setItem("theme", "light");
    const { result } = renderHook(
      () => {
        const { useContext } = require("react");
        return useContext(ThemeContext);
      },
      { wrapper },
    );
    expect(result.current.isDarkMode).toBe(false);
  });
});
