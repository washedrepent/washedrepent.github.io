//TopHero.js
import React from 'react';
import Particles from "react-tsparticles";
import { ThemeContext } from './ThemeContext';
import Typewriter from 'typewriter-effect';

//load images
import herolight from "../img/herolight2.svg";
import herodark from "../img/herodark2.svg";
import portrait from "../img/portrait.png";
import triangleDark from "../img/triangle-bg-dark.svg";
import triangleLight from "../img/triangle-bg-light.svg";

const TopHero = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    const particlesInit = (main) => {
        //console.log(main);
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        //console.log(container);
    };

    return (
        <div className="flex relative">
            <Particles 
                id="tsparticles"
                init={particlesInit}
              
                className = "main-hero bg-herolight dark:bg-herodark bg-contain h-full"
                loaded={particlesLoaded} 
                options={
                    {
                    "fps_limit":60,
                    "background" : {
                        
                        "image" : theme ==='dark'? (herodark ):(herolight)
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
                            "color": theme ==='dark'? ( "#fa6860" ):("#6860fa"),
                            "distance":150,
                            "enable":true,
                            "opacity":0.7,
                            "width":2.3
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


            <div className="absolute w-full top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex md:grid md:grid-cols-2 md:gap-4">
                    <div className="flex flex-initial flex-wrap space-y-10 self-start justify-end">
                        <h1 className="text-8xl text-mainblue-darkest dark:text-accent">Hans-Eric Lippke</h1>
                        <h2 className="text-5xl text-orange dark:text-accent2 w-full">Technology Manager</h2>
                        <h2 className="text-5xl text-bled dark:text-primary">
                            <Typewriter
                                options={{
                                    wrapperClassName: "mainslogan",
                                    strings: ['Plan', 'Build', 'Achieve'],
                                    autoStart: true,
                                    loop: true,
                                    skipAddStyles:true
                                }}
                            />
                        </h2>
                    </div>
                    <div className="flex justify-start self-center">   
                        <img className="w-auto max-h-96 px-32" src={portrait} alt="Picture of Hans-Eric Lippke" />
                    </div>
                </div>
            </div>
            <img className="custom-shape-divider-bottom-1633819435 hidden dark:block" src={triangleDark} />
            <img className="custom-shape-divider-bottom-1633819435 block dark:hidden" src={triangleLight} /> 
        </div> 
    );
};

export default TopHero;