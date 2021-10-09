//TopHero.js
import React from 'react';
import Particles from "react-tsparticles";
import hero1 from "../img/hero1.svg";
import triangleDark from "../img/triangle-bg-dark.svg";
import triangleLight from "../img/triangle-bg-light.svg";
const TopHero = () => {

    const particlesInit = (main) => {
        console.log(main);
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
 
    };

    return (
        <div className="flex relative">
            <Particles 
                id="tsparticles"
                init={particlesInit}
                className = "main-hero bg-hero1 bg-cover h-auto w-full"
                loaded={particlesLoaded} 
                options={
                    {
                    "fps_limit":60,
                    "background" : {
                        "image" : hero1
                    },
                    "interactivity":{
                        "detectsOn":"canvas",
                        "events":{
                            "onClick":{
                                "enable":true,
                                "mode":"push"
                            },
                            "onHover":{
                                "enable":true,
                                "mode":"repulse"
                            },
                            "resize":true
                        },
                        "modes":{
                            "push":{
                                "particles_nb":2
                            },
                            "repulse":{
                                "distance":50,
                                "duration":0.3
                            }
                        }
                    },
                    "particles":{
                        "color":{
                            "value":""
                        },
                        "links":{
                            "color":"#fab560",
                            "distance":150,
                            "enable":true,
                            "opacity":0.4,
                            "width":1
                        },
                        "move":{
                            "bounce":false,
                            "direction":"none",
                            "enable":true,
                            "outMode":"out",
                            "random":false,
                            "speed":1,
                            "straight":false
                        },
                        "number":{
                            "density":{
                                "enable":true,
                                "area":200
                            },
                            "value":30
                        },
                        "opacity":{
                            "value":1
                        },
                        "shape":{
                            "type":"circle"
                        },
                        "size":{
                            "random":true,
                            "value":3
                        }
                    },
                    "detectRetina":true
                    }
                }
            />
            <img className="custom-shape-divider-bottom-1633819435 hidden dark:block" src={triangleDark} />
            <img className="custom-shape-divider-bottom-1633819435 block dark:hidden" src={triangleLight} /> 
        </div> 
    );
};

export default TopHero;