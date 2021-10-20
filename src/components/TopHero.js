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
    const { theme } = React.useContext(ThemeContext);

    const particlesInit = (main) => {
        //console.log(main);
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        //console.log(container);
    };

    return (
        <div className="flex relative h-120 md:max-h-half w-full">
            <Particles 
                id="tsparticles"
                init={particlesInit}
              
                className = "main-hero bg-herolight dark:bg-herodark bg-contain w-full"
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


            <div className="absolute w-full h-full top-10">
                <div className="flex flex-col space-y-10 md:flex-row">
                    <div className="flex flex-col flex-initial space-y-10 w-full">
                        <h1 className="flex flex-row justify-center text-5xl lg:text-6xl xl:text-8xl font-bold text-mainblue-darkest dark:text-accent">Hans-Eric Lippke</h1>
                        <h2 className="flex flex-row justify-center text-3xl md:text-5xl text-orange dark:text-accent2 w-full">Technology Manager</h2>
                        <h2 className="flex flex-row justify-center text-3xl md:text-5xl text-bled dark:text-primary">
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
                    <div className="flex flex-row w-3/4 justify-start self-center">   
                        <img className="w-auto max-h-96 px-32" src={portrait} alt="Portrait of Hans-Eric Lippke" />
                    </div>
                </div>
            </div>
            <div className="custom-shape-divider-bottom-1633819435" src={triangleDark} alt="dark triangle for bottom of banner">
                <svg  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path  d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill" fill-opacity="1"></path>
                </svg>
            </div>
        </div> 
    );
};

export default TopHero;