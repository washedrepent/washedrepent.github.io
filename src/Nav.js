import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from "./logo3.svg";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="relative md:flex">
        <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
          <a href="#" className="block p-4 text-white font-bold">Better Dev</a>
          <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <aside className="fixed top-0 bottom-0 bg-mainblue-darkest text-white w-64 space-y-6 py-7 px-2 inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
          <a href="#" className="text-white flex items-center space-x-2 px-4">
            <img className="" src={logo} alt="Hans-Eric Lippke's Logo Plan, Build, Achieve"/>
          </a>
          <p className="text-2xl font-extrabold flex items-center">Portfolio/Resume</p>
          <nav>

            <a href="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
              About
            </a>
            <a href="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
              Features
            </a>
            <a href="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
              Pricing
            </a>
          </nav>
        </aside>
        <div className="md:flex flex-col">
          <div className=" bg-mainblue relative min-h-full h-52">
            <div className="p-10 text-bold">
              <p className="text-white ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque volutpat convallis. Proin et neque a erat dictum rhoncus. Aliquam ut pharetra arcu. Quisque venenatis mi magna, sit amet condimentum lectus molestie sit amet. Maecenas porttitor augue eget malesuada sollicitudin. Vestibulum blandit libero nec mi iaculis, ac maximus sem accumsan. Integer mollis urna malesuada lacus vestibulum vestibulum. Etiam in suscipit leo. Fusce arcu leo, tempus sed orci ac, lobortis pharetra eros.
                Suspendisse massa leo, facilisis eget velit in, hendrerit placerat leo. Cras elementum non sem a fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer at purus a diam cursus egestas. Donec finibus elementum massa, quis sodales metus tincidunt in. Nunc condimentum magna a mauris mattis egestas et non sapien. Aliquam et neque at arcu egestas scelerisque quis vitae ante. Ut non viverra neque.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full leading-none">
              <svg data-name="Section 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" className="fill-current text-mainblue-dark"></path>
              </svg>
            </div>
          </div>
          <div className=" bg-mainblue relative min-h-full h-52">
              <div className="p-10 text-bold">
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque volutpat convallis. Proin et neque a erat dictum rhoncus. Aliquam ut pharetra arcu. Quisque venenatis mi magna, sit amet condimentum lectus molestie sit amet. Maecenas porttitor augue eget malesuada sollicitudin. Vestibulum blandit libero nec mi iaculis, ac maximus sem accumsan. Integer mollis urna malesuada lacus vestibulum vestibulum. Etiam in suscipit leo. Fusce arcu leo, tempus sed orci ac, lobortis pharetra eros.
                  Suspendisse massa leo, facilisis eget velit in, hendrerit placerat leo. Cras elementum non sem a fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer at purus a diam cursus egestas. Donec finibus elementum massa, quis sodales metus tincidunt in. Nunc condimentum magna a mauris mattis egestas et non sapien. Aliquam et neque at arcu egestas scelerisque quis vitae ante. Ut non viverra neque.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full leading-none">
                <svg data-name="Section 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" className="fill-current text-mainblue-dark"></path>
                </svg>
              </div>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default Nav;