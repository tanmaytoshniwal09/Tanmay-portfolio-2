"use client"

import Particles from "react-particles-js"

// const particlesOptions = {
//   particles: {
//     number: {
//       value: 120,
//       density: {
//         enable: true,
//         value_area: 1000,
//       },
//     },
//     color: {
//       value: "#ffffff",
//     },
//     shape: {
//       type: "circle",
//     },
//     opacity: {
//       value: 0.8,
//       random: false,
//       anim: {
//         enable: false,
//       },
//     },
//     size: {
//       value: 2,
//       random: true,
//       anim: {
//         enable: false,
//       },
//     },
//     line_linked: {
//       enable: true,
//       distance: 180,
//       color: "#ffffff",
//       opacity: 0.6,
//       width: 1,
//     },
//     move: {
//       enable: true,
//       speed: 3,
//       direction: "none",
//       random: false,
//       straight: false,
//       out_mode: "out",
//       bounce: false,
//       attract: {
//         enable: false,
//       },
//     },
//   },
//   interactivity: {
//     detect_on: "window",
//     events: {
//       onhover: {
//         enable: true,
//         mode: "grab",
//       },
//       onclick: {
//         enable: true,
//         mode: "push",
//       },
//       resize: true,
//     },
//     modes: {
//       grab: {
//         distance: 200,
//         line_linked: {
//           opacity: 1,
//         },
//       },
//       push: {
//         particles_nb: 4,
//       },
//       repulse: {
//         distance: 100,
//         duration: 0.4,
//       },
//     },
//   },
//   retina_detect: true,
// }
const particlesOptions = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 35, // 🔥 reduced from heavy count
      density: {
        enable: true,
        area: 900,
      },
    },
    color: {
      value: "#7c3aed", // modern purple
    },
    links: {
      enable: true,
      color: "#a78bfa",
      distance: 150,
      opacity: 0.2, // 🔥 softer
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.8, // slower movement
      outModes: {
        default: "bounce",
      },
    },
    opacity: {
      value: 0.3,
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
};

interface ParticlesBackgroundProps {
  className?: string
}

export default function ParticlesBackground({ className }: ParticlesBackgroundProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Particles
        params={particlesOptions as any}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  )
}
