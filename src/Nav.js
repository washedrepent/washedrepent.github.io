import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import me from './me.jpg';
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center h-screen bg-mainbg bg-cover">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white rounded-lg shadow-lg p-5 md:p-10 mx-2 border-mainblue-dark border-8">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight leading-10 font-extrabold text-mainblue sm:text-5xl sm:leading-none md:text-6xl">
              Welcome to <span className="text-blurp">Hans-Eric Lippke's</span>
            </h2>
            <h2 className="text-4xl tracking-tight leading-10 mt-9 font-extrabold text-black sm:text-5xl sm:leading-none md:text-6xl">
                <span className="text-pinky">Portfolio/Resume Site</span>
            </h2>
            <h2 className="text-2xl tracking-tight leading-10 mt-9 font-extrabold text-bled sm:text-5xl sm:leading-none md:text-6xl">
                      Coming Soon...ish
            </h2>
            <h3 className='text-md md:text-2xl text-center mt-4 font-bold text-bled'>Busy learning/playing with react and tailwind</h3>
          </div>
   
          <div className="max-w-screen-md py-4 px-8 bg-mainblue-darkest shadow-lg rounded-lg mt-20 m-auto">
            <div className="flex justify-center md:justify-end -mt-16">
              <img className="w-24 h-24 object-cover rounded-lg border-2 border-mainblue-dark"  src={me} alt="Picture of me" />
            </div>
            <div className="text-left">
              <h2 className="text-white text-3xl font-semibold justify-start">About Me:</h2>
              <p className="mt-2 font-bold text-white">I am available for freelance in web development, devops, solutions architecting, api's and serverless related fields. I have 6+ years of professional experience and enjoy challenging myself and broadening my skills. I am a jack of all trades with a focus towards web development. Feel free to react out or cantact me if you are interested in learning more about what I can offer or would like to have me become a part of your project.</p>
            </div>
            <div className="text-right  mt-4">
              <a href="#" className="text-2xl font-bold text-white">Links are below :)</a>
            </div>
          </div> 
        
          <div className="flex flex-wrap mt-10 justify-center">
          <div className="m-3">
            <a href="https://www.linkedin.com/in/hanseric/" target="_blank" title="Hans-Eric Lippke's LinkedIn"
              className="md:w-50 bg-white tracking-wide text-linkedin font-bold rounded border-2 border-linkedin hover:border-linkedin hover:bg-linkedin hover:text-white shadow-md py-2 px-6 inline-flex items-center">
              <span className="mx-auto">My LinkedIn</span>
            </a>
          </div>
          <div className="m-3">
            <a href="https://forms.gle/GyWbLeCANzgWeXUB8" target="_blank" title="Hans-Eric Lippke's contact form"
              className="md:w-50 bg-white tracking-wide text-bled font-bold rounded border-2 border-bled hover:border-bled hover:bg-bled hover:text-white shadow-md py-2 px-6 inline-flex items-center">
              <span className="mx-auto">Contact Form</span>
            </a>
          </div>
          <div className="m-3">
            <a href="https://www.upwork.com/freelancers/~0123bc19abb81e951e" target="_blank" title="Hans-Eric Lippke's upwork"
              className="md:w-50 bg-white tracking-wide text-upwork font-bold rounded border-2 border-upwork hover:border-upwork hover:bg-upwork hover:text-white shadow-md py-2 px-6 inline-flex items-center">
              <span className="mx-auto">Upwork</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Nav;