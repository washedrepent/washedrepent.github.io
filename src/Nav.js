import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import me from './me.jpg';
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
    <div className="md:flex items-center md:h-screen v-screen bg-blurp md:bg-mainbg md:bg-cover">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-mainblue-darkest p-5 py-10 md:pt-5 border-none md:bg-white md:rounded-lg md:shadow-lg md:p-10 md:mt-20 md:mx-2 md:border-mainblue-dark md:border-8">
          <div className="text-center">
            <h2 className="hidden md:block md:tracking-tight md:font-extrabold text-mainblue md:leading-none md:text-5xl">
              Welcome to <span className="md:text-blurp text-white ">Hans-Eric Lippke's</span>
            </h2>
            <h2 className="text-3xl tracking-tight leading-none font-extrabold text-mainblue md:hidden">
              Welcome to <br/>
            </h2>
            <h2 className="text-3xl tracking-tight leading-none font-extrabold md:text-blurp text-white mt-3 md:hidden">Hans-Eric Lippke's</h2>
            <h2 className="text-4xl tracking-tight  break-all  mt-9 font-extrabold text-pinky leading-none md:leading-10 md:text-5xl">
              Portfolio/Resume
            </h2>
            <h2 className="text-3xl tracking-tight mt-9 font-extrabold text-bled leading-none md:leading-10 md:text-5xl ">
              Coming Soon...ish
            </h2>
            <h3 className='text-base md:text-xl text-center mt-4 font-bold text-bled'>Busy learning/playing with react and tailwind</h3>
          </div>
   
          <div className="max-w-screen-md py-4 px-8 bg-mainblue-dark md:bg-mainblue-darkest shadow-lg rounded-lg mt-20 m-auto">
            <div className="flex justify-center md:justify-end -mt-16">
              <img className="w-32 h-32 object-cover rounded-lg border-2 border-mainblue-dark"  src={me} alt="Picture of me" />
            </div>
            <div className="text-left">
              <h2 className="text-white text-3xl font-semibold justify-start">About Me:</h2>
              <p className="mt-2 font-bold text-white">I have 6+ years of professional experience and enjoy challenging myself and broadening my skills. I'm a jack of all trades with a focus towards web development. I am available for freelance in web development, devops, solutions architecting, api's and serverless related fields. Feel free to reach out or contact me if you are interested in learning more about what I can offer or would like to have me become a part of your project.</p>
            </div>
            <div className="text-right  mt-4">
              <a href="#" className="text-2xl font-bold text-white">Links below :)</a>
            </div>
          </div> 
        
          <div className="flex flex-wrap mt-10 justify-center">
          <div className="m-3">
            <a href="https://www.linkedin.com/in/hanseric/" target="_blank" title="Hans-Eric Lippke's LinkedIn"
              className="shadow-md py-2 px-6 inline-flex items-center tracking-wide font-bold rounded border-2 bg-linkedin text-white md:w-50 md:bg-white md:text-linkedin md:border-linkedin md:hover:border-linkedin md:hover:bg-linkedin md:hover:text-white">
              <span className="mx-auto">My LinkedIn</span>
            </a>
          </div>
          <div className="m-3">
            <a href="https://forms.gle/GyWbLeCANzgWeXUB8" target="_blank" title="Hans-Eric Lippke's contact form"
              className="shadow-md py-2 px-6 inline-flex items-center tracking-wide font-bold rounded border-2 bg-bled text-white md:w-50 md:bg-white md:text-bled md:border-bled md:hover:border-bled md:hover:bg-bled md:hover:text-white">
              <span className="mx-auto">Contact Form</span>
            </a>
          </div>
          <div className="m-3">
            <a href="https://www.upwork.com/freelancers/~0123bc19abb81e951e" target="_blank" title="Hans-Eric Lippke's upwork"
              className="shadow-md py-2 px-6 inline-flex items-center tracking-wide font-bold rounded border-2 bg-upwork text-white md:w-50 md:bg-white md:text-upwork md:border-upwork md:hover:border-upwork md:hover:bg-upwork md:hover:text-white">
              <span className="mx-auto">Upwork</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav className="bg-mainblue block">
      <div className="container mx-auto pt-4 pb-4 text-center">
        <h4 className="text-black font-bold" >Created with React and tailwindcss</h4>
      </div>
    </nav>
  </div>
  );
}

export default Nav;