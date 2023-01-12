import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import darkIcon from "../assets/images/dark.png";

export const Nav = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <Link to="/">Rachel Solov</Link>
      <Link to="/about"> About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/resume">Resume</Link>
      <div className="h-screen bg-white dark:bg-black flex justify-center items-center">
        <button src={darkIcon} onClick={handleThemeSwitch}>
          <img src={darkIcon} alt="sun and moon" />
        </button>
      </div>
    </>
  );
};
