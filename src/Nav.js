import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div class="flex items-center justify-center h-screen bg-blurp">
    <div class="container">
      <div class="bg-blue-100 rounded-lg shadow-md p-5 md:p-10 mx-2">
        <div class="text-center">
          <h2 class="text-3xl tracking-tight leading-10 font-extrabold text-pinky  sm:text-5xl sm:leading-none md:text-6xl">
            Welcome to <span class="text-mainblue">Hans-Eric Lippke's</span>
          </h2>
          <h2 class="text-4xl tracking-tight leading-10 mt-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              <span class="text-bled">Portfolio/Resume Site</span>
          </h2>
          <h2 class="text-2xl tracking-tight leading-10 mt-10 font-extrabold text-blurp sm:text-5xl sm:leading-none md:text-6xl">
                    Coming Soon...
          </h2>
          
          <h3 class='text-xl md:text-3xl mt-5  font-bold text-mainblue'>Busy building with react and tailwind :)</h3>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Nav;