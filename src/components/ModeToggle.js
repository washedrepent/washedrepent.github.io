import React from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { ThemeContext } from './ThemeContext';


function isDarkMode(){
  const storedtheme = window.localStorage.getItem('color-theme');
  console.log(storedtheme);
  if (storedtheme == 'dark') {
    return true;
  }else{
    return false;
  }
}
const ModeToggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
      <>
      <div className="flex justify-center sm:justify-end items-center w-56">
        <SunIcon className="w-10 text-primary" />
        <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input 
              type="checkbox" 
              name="toggle" 
              id="toggle" 
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              defaultChecked = {isDarkMode()}
            />
            <label for="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
        </div>
        <MoonIcon className="w-10 text-primary" />
          
      </div>
 
      </>
    );
};

export default ModeToggle;