const ParticlesConfig = {
  // background: {
  //   color: {
  //     value: "#212529",
  //   },
  // },
  fullScreen: {
    zIndex: -1,
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "repulse",
      },
      onHover: {
        enable: true,
        mode: "bubble",
      },
    },
    modes: {
      bubble: {
        distance: 250,
        duration: 2,
        opacity: 0,
        size: 0,
      },
      grab: {
        distance: 400,
      },
      repulse: {
        distance: 400,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: {
        value: "#ffffff",
      },
      distance: 150,
      opacity: 0.4,
    },
    // move: {
    //   attract: {
    //     rotate: {
    //       x: 600,
    //       y: 600,
    //     },
    //   },
    //   enable: true,
    //   outModes: {
    //     bottom: "out",
    //     left: "out",
    //     right: "out",
    //     top: "out",
    //   },
    //   random: true,
    //   speed: 1,
    // },
    number: {
      density: {
        enable: true,
      },
      value: 160,
    },

    opacity: {
      random: {
        enable: true,
      },
      value: {
        min: 0,
        max: 1,
      },
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0,
      },
    },
    size: {
      random: {
        enable: true,
      },
      value: {
        min: 1,
        max: 3,
      },
      animation: {
        speed: 4,
        minimumValue: 0.3,
      },
    },
  },
  themes: [
    {
      name: "light",
      default: {
        value: true,
        mode: "light",
      },
      options: {
        background: {
          color: "#F0FFFF",
        },
        particles: {
          color: {
            value: "#B2BEB5",
          },
        },
      },
    },
    {
      name: "dark",
      default: {
        value: true,
        mode: "dark",
      },
      options: {
        background: {
          color: "212529",
        },
        particles: {
          color: {
            value: "#ffffff",
          },
        },
      },
    },
  ],
};
export default ParticlesConfig;
