import React from "react";
import Particles from 'react-tsparticles'; 

const ParticlesJS = () => {
    return (
        <Particles id="tsparticles" params={{
            background: {
                color: {
                    value: "#192129"
                }
            },
            fpsLimit: 60,
            interactivity: {
                detectsOn: "canvas",
                events: {
                    onClick: {
                        enable: true,
                        mode: "repulse"
                    },
                    onHover: {
                        enable: true,
                        mode: "grab"
                    },
                    resize: true
                },
                modes: {
                    push: {
                        quantity: 5
                    },
                    grab: {
                        distance: 200,
                        lineLinked: {
                            opacity: 0.5
                        }
                    },
                    repulse: {
                        distance: 300,
                        duration: 1.5,
                    }
                }
            },
            particles: {
                color: {
                    value: "#f3f1f1"
                },
                links: {
                    color: "#e41376",
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1
                },
                collisions: {
                    enable: true
                },
                move: {
                    direction: "top-right",
                    enable: true,
                    outMode: "none",
                    random: false,
                    speed: 1,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 800
                    },
                    value: 60
                },
                opacity: {
                    value: 0.5
                },
                shape: {
                    type: "circle"
                },
                size: {
                    random: false,
                    value: 2
                }
            },
            detectRetina: true
            }} 
        />
    )
}

export default ParticlesJS;