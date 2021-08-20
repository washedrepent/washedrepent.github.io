import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center h-screen bg-mainbg bg-cover">
    <div className="container mx-auto max-w-5xl">
      <div className="bg-white rounded-lg shadow-md p-5 md:p-10 mx-2">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight leading-10 font-extrabold text-mainblue sm:text-5xl sm:leading-none md:text-6xl">
            Welcome to <span className="text-blurp">Hans-Eric Lippke's</span>
          </h2>
          <h2 className="text-4xl tracking-tight leading-10 mt-10 font-extrabold text-black sm:text-5xl sm:leading-none md:text-6xl">
              <span className="text-pinky">Portfolio/Resume Site</span>
          </h2>
          <h2 className="text-2xl tracking-tight leading-10 mt-10 font-extrabold text-bled sm:text-5xl sm:leading-none md:text-6xl">
                    Coming Soon...ish
          </h2>
          
          <h3 className='text-xl md:text-3xl mt-10 font-bold text-black'>Busy learning/playing with react and tailwind :)</h3>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Nav;