import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import "./Header.css";
import "./CountryCard.css";
import { Link } from "react-router-dom";

const DARK_CLASS = "dark";

export default function Header() {
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (prefersDark) => {
      setIsDark(prefersDark);
    }
  );

  const [isDark, setIsDark] = useState(systemPrefersDark);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add(DARK_CLASS);
    } else {
      document.documentElement.classList.remove(DARK_CLASS);
    }
  }, [isDark]);

  const handleToggle = (event) => {
    setIsDark(event.target.checked);
  };
  return (
    <div className="header-container">
      <Link to="/" className="app-title">
        <h1>Where in the world?</h1>
      </Link>
      <div className="dark-mode-container">
        <label className="switch">
          <input type="checkbox" checked={isDark} onClick={handleToggle} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}
