import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <div flex items-center gap-6 text-sm>
        <Link to="/">Rachel Solov</Link>
      </div>
      <ul>
        <li>
          <Link to="/about"> About</Link>
        </li>
        <li>
          {" "}
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          {" "}
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};
