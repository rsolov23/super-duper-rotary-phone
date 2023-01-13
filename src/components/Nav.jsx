import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <Link to="/">Rachel Solov</Link>
      <Link to="/about"> About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/resume">Resume</Link>
    </>
  );
};
