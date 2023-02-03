import ParticlesConfig from "../assets/javascript/ParticlesConfig";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import React, { useEffect, useState } from "react";
import darkIcon from "../assets/images/dark.png";

const ParticleBackground = (props) => {
  const [theme, setTheme] = useState("light");
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);
  const [particlesContainer, setParticlesContainer] = useState();

  const particlesLoaded = useCallback((container) => {
    setParticlesContainer(container);
  }, []);

  useEffect(() => {
    if (particlesContainer && particlesContainer.currentTheme !== theme) {
      particlesContainer.loadTheme(theme);
    }
  }, [theme, particlesContainer]);
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div id="particle-background">
      <div className="background">
        <button src={darkIcon} onClick={toggleTheme}>
          <img src={darkIcon} alt="sun and moon" />
        </button>
        <Particles
          theme={theme}
          id="tsparticles"
          particlesLoaded="particlesLoaded"
          init={particlesInit}
          loaded={particlesLoaded}
          options={ParticlesConfig}
        />
      </div>
    </div>
  );
};
export default ParticleBackground;
